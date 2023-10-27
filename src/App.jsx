import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navabar";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import AdminRoute from "./components/AuthRoute/AdminRoute";
import LoginForm from "./components/User/Login/LoginForm";
import RegisterForm from "./components/User/Register/RegisterForm";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ManageStocks from "./components/Admin/Products/ManageStocks";
import OrdersList from "./components/Admin/Orders/OrderList";
import AddProduct from "./components/Admin/Products/AddProduct";
import UpdateProduct from "./components/Admin/Products/UpdateProduct";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* users  */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* admin route */}
        <Route
          path="/admin"
          element={
            <AuthRoute>
              <AdminDashboard />
            </AuthRoute>
          }
        >
          {/* products */}
          <Route path="" element={<OrdersList />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-products" element={<ManageStocks />} />
          <Route path="products/edit/:id" element={<UpdateProduct />} />

          {/* coupons */}
          {/* <Route path="add-coupon" element={<OrderList />} />
          <Route path="manage-coupon" element={<OrderList />} />
          <Route path="manage-coupon/edit/:code" element={<OrderList />} /> */}

          {/* category */}
          {/* <Route path="category-too-add" element={<OrderList />} />
          <Route path="add-category" element={<OrderList />} />
          <Route path="manage-category" element={<OrderList />} />
          <Route path="editCategory" element={<OrderList />} /> */}
        </Route>
        <Route path="/route" element={<AdminRoute></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
