import { createAsyncThunk } from "@reduxjs/toolkit";
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
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseUrl}/users/login`, {
        email: payload?.email,
        password: payload?.password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
