import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../src/utils/types";
import axios from "axios";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { RootState } from "../src/store";

export type CartState = {
  cartItems: ICartItem[];
  cartLoading: boolean;
  amount: number;
  total: number;
  error: string | null;
};

const initialState: CartState = {
  cartItems: [],
  cartLoading: false,
  amount: 0,
  total: 0,
  error: null,
};

// Fetch cart items from the backend
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/v1/cart");

      console.log(response.data.cartItems);
      return response.data.cartItems;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch cart items");
    }
  }
);

export const clearCartItems = createAsyncThunk(
  "cart/clearCartItems",
  async (_, thunkAPI) => {
    try {
      await axios.delete("/api/v1/cart");
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("Clear cart failed");
    }
  }
);

// Save cart items to the backend
export const saveCartItems = createAsyncThunk(
  "cart/saveCartItems",
  async (cartItems: ICartItem[], thunkAPI) => {
    try {
      const response = await axios.post("/api/v1/cart", [...cartItems]);

      return response.data.cartItems;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to save cart items");
    }
  }
);
export const updateCartItems = createAsyncThunk(
  "cart/updateCartItems",
  async (cartItems: ICartItem[], thunkAPI) => {
    try {
      const response = await axios.patch("/api/v1/cart", [...cartItems]);
      return response.data.cartItems;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to update cart items");
    }
  }
);

export const cartListenerMiddleware = createListenerMiddleware();

// cartListenerMiddleware.startListening({
//   predicate: (_, currentState, previousState) => {
//     const prevCart = (previousState as RootState).cart.cartItems;
//     const currentCart = (currentState as RootState).cart.cartItems;
//     return prevCart !== currentCart;
//   },
//   effect: async (_, listenerApi) => {
//     const state = listenerApi.getState() as RootState;
//     await listenerApi.dispatch(saveCartItems(state.cart.cartItems));
//   },
// });

cartListenerMiddleware.startListening({
  predicate: (action, currentState, previousState) => {
    const prevCart = (previousState as RootState).cart.cartItems;
    const currentCart = (currentState as RootState).cart.cartItems;

    // Skip persisting if the action is `clearCartOnLogout`
    if (action.type === clearCartOnLogout.type) {
      return false;
    }

    // Otherwise, persist changes if the cart items have changed
    return prevCart !== currentCart;
  },
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    await listenerApi.dispatch(saveCartItems(state.cart.cartItems));
  },
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    clearCartOnLogout: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== itemId
      );
    },
    increase: (state, action: PayloadAction<string>) => {
      const cartItem = state.cartItems.find(
        (item) => item.productId === action.payload
      );
      if (cartItem) {
        cartItem.amount += 1;
      }
    },
    decrease: (state, action: PayloadAction<string>) => {
      const cartItem = state.cartItems.find(
        (item) => item.productId === action.payload
      );
      if (cartItem && cartItem?.amount > 1) {
        cartItem.amount -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.productId !== cartItem?.productId
        );
      }
    },
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.productId === newItem.productId
      );
      if (existingItem) {
        existingItem.amount += newItem.amount || 1;
      } else {
        state.cartItems.push(newItem);
      }
      // console.log(newItem);
      // console.log(state.cartItems);
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.cartLoading = true;
      state.error = null;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      state.cartLoading = false;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.cartLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(updateCartItems.pending, (state) => {
      state.error = null;
      state.cartLoading = true;
    });
    builder.addCase(updateCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      state.cartLoading = false;
    });
    builder.addCase(updateCartItems.rejected, (state, action) => {
      state.error = action.payload as string;
      state.cartLoading = false;
    });
    builder.addCase(clearCartItems.pending, (state) => {
      state.error = null;
      state.cartLoading = true;
    });
    builder.addCase(clearCartItems.fulfilled, (state) => {
      state.cartItems = [];
      state.cartLoading = false;
    });
    builder.addCase(clearCartItems.rejected, (state, action) => {
      state.error = action.payload as string;
      state.cartLoading = false;
    });
  },
});

export const {
  clearCart,
  clearCartOnLogout,
  removeItem,
  increase,
  decrease,
  addItem,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
