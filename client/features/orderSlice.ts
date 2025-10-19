import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

/* ---------------------------- Types ---------------------------- */
export interface OrderItem {
  product: string;
  name: string;
  price: number;
  image: string;
  amount: number;
}

export interface Order {
  _id: string;
  user: string;
  orderItems: OrderItem[];
  subTotal: number;
  total: number;
  tax: number;
  shippingFee: number;
  status: string;
  paymentUrl?: string;
  reference?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderState {
  orders: Order[];
  currentOrder: Order | null;
  isLoading: boolean;
  error: string | null;
}

/* ---------------------------- Initial State ---------------------------- */
const initialState: OrderState = {
  orders: [],
  currentOrder: null,
  isLoading: false,
  error: null,
};

/* ---------------------------- Async Thunks ---------------------------- */

export const createOrder = createAsyncThunk<
  { order: Order; paymentUrl: string },
  {
    items: { product: string; amount: number }[];
    tax: number;
    shippingFee: number;
    email: string;
  },
  { rejectValue: string }
>("orders/createOrder", async (payload, thunkAPI) => {
  try {
    const res = await axios.post("/api/v1/orders", payload);
    return res.data as { order: Order; paymentUrl: string };
  } catch {
    return thunkAPI.rejectWithValue("Failed to create order");
  }
});

export const getAllOrders = createAsyncThunk<
  Order[],
  void,
  { rejectValue: string }
>("orders/getAll", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/api/v1/orders/admin/all");
    return res.data.orders as Order[];
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch orders");
  }
});

export const getSingleOrder = createAsyncThunk<
  Order,
  string,
  { rejectValue: string }
>("orders/getSingle", async (id, thunkAPI) => {
  try {
    const res = await axios.get(`/api/v1/orders/${id}`);
    return res.data.order as Order;
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch order");
  }
});

// Get current user orders
export const getCurrentUserOrders = createAsyncThunk<
  Order[],
  void,
  { rejectValue: string }
>("orders/getCurrentUser", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/api/v1/orders");
    return res.data.orders as Order[];
  } catch {
    return thunkAPI.rejectWithValue("Failed to fetch user orders");
  }
});

// Verify Paystack
export const verifyPaystackPayment = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("orders/verifyPayment", async (reference, thunkAPI) => {
  try {
    const res = await axios.get(
      `/api/v1/orders/verify/payment?reference=${reference}`
    );
    return res.data;
  } catch {
    return thunkAPI.rejectWithValue("Payment verification failed");
  }
});

// Update order
export const updateOrder = createAsyncThunk<
  Order,
  { orderId: string; paymentIntentId?: string },
  { rejectValue: string }
>("orders/updateOrder", async (payload, thunkAPI) => {
  try {
    const res = await axios.patch(`/api/v1/orders/${payload.orderId}`, {
      paymentIntentId: payload.paymentIntentId,
    });
    return res.data.order as Order;
  } catch {
    return thunkAPI.rejectWithValue("Failed to update order");
  }
});

/* ---------------------------- Slice ---------------------------- */
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Order
      .addCase(
        createOrder.fulfilled,
        (
          state,
          action: PayloadAction<{ order: Order; paymentUrl: string }>
        ) => {
          state.isLoading = false;
          state.currentOrder = action.payload.order;
        }
      )

      // Get All Orders
      .addCase(
        getAllOrders.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.isLoading = false;
          state.orders = action.payload;
        }
      )

      // Get Single Order
      .addCase(
        getSingleOrder.fulfilled,
        (state, action: PayloadAction<Order>) => {
          state.isLoading = false;
          state.currentOrder = action.payload;
        }
      )

      // Current User Orders
      .addCase(
        getCurrentUserOrders.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.isLoading = false;
          state.orders = action.payload;
        }
      )

      // Update Order
      .addCase(updateOrder.fulfilled, (state, action: PayloadAction<Order>) => {
        state.isLoading = false;
        state.currentOrder = action.payload;
      })

      // Common matchers
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload || "Something went wrong";
        }
      );
  },
});

export const { clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
