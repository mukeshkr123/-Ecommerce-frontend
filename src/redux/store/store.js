import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/users/userSlice";
import productReducer from "../slices/products/productsSlices";

//create storeS
const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer,
  },
});

export default store;
