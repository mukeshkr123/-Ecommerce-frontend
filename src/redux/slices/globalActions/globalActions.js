import { createAsyncThunk } from "@reduxjs/toolkit";

//reset error action
export const resetErrorAction = createAsyncThunk("resetError-Action", () => {});

//reset success action
export const resetSuccessAction = createAsyncThunk(
  "resetSuccess-Action",
  () => {}
);
