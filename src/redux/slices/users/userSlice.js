import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

// initial state
const initialState = {
  loading: false,
  error: null,
  users: [],
  user: {},
  profile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: {},
  },
};

// login action
export const LoginUserAction = createAsyncThunk(
  "users/login",
  async ({ email, password }, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseUrl}/users/login`, {
        email,
        password,
      });
      // save the user intp localstorage
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// register the user
export const registerUserAction = createAsyncThunk(
  "users/register",
  async ({ fullname, email, password }, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseUrl}/users/register`, {
        fullname,
        email,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// users slice
const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    // login
    builder.addCase(LoginUserAction.pending, (state, action) => {
      state.userAuth.loading = true;
    });
    builder.addCase(LoginUserAction.fulfilled, (state, action) => {
      state.userAuth.userInfo = action.payload;
      state.userAuth.loading = false;
    });
    builder.addCase(LoginUserAction.rejected, (state, action) => {
      state.userAuth.error = action.payload;
      state.userAuth.loading = false;
    });
    // register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

//generate reducer
const userReducer = userSlice.reducer;

export default userReducer;
