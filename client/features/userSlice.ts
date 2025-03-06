import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../src/utils/types";
import axios from "axios";

export type UserState = {
  user: User | null;
  userLoading: boolean;
  error: string | null;
};

const initialState: UserState = {
  user: null,
  userLoading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/v1/users/current-user");
      return response.data.user as User;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch user");
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await axios.get("/api/v1/auth/logout");
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (formData: FormData, thunkAPI) => {
    try {
      const response = await axios.patch(
        "/api/v1/users/update-user",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.user as User;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to update user");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.userLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.userLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.userLoading = false;
        state.error = action.payload as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userLoading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.userLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.userLoading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.userLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
