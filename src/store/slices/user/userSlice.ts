import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserSliceInterface from "./userSlice.interface";
import User from "./User.interface ";
import UserPayload from "./User-payload.interface";
import { loginAPI, signupAPI } from "../../../services/authService";
import {
  getUserFromLocalStorage,
  getUserTokenFromLocalStorage,
} from "./userStorage";

//initial state
const initialState: UserSliceInterface = {
  user: getUserFromLocalStorage(),
  status: null,
  error: null,
  token: getUserTokenFromLocalStorage(),
};

//login async thunk
export const login = createAsyncThunk<User, UserPayload>(
  "user/login",
  async function (inputData) {
    return await loginAPI(inputData);
  }
);

//signup async thunk
export const signup = createAsyncThunk<User, UserPayload>(
  "user/signup",
  async function (inputData) {
    return await signupAPI(inputData);
  }
);

//slice for user
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null;
      state.status = null;
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("response");
    },
    resetUserError: (state) => {
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "resolved";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || "Failed to login";
      })
      .addCase(signup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "resolved";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || "Failed to login";
      });
  },
});

export const { logout, resetUserError } = userSlice.actions;

export default userSlice.reducer;
