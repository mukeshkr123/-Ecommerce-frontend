import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navabar";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import AdminRoute from "./components/AuthRoute/AdminRoute";
import LoginForm from "./components/User/Login/LoginForm";
import RegisterForm from "./components/User/Register/RegisterForm";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* users  */}
        <Route path="/login" element={<LoginForm />} />

        <Route path="/register" element={<RegisterForm />} />

        <Route path="/dashboard" element={<AuthRoute></AuthRoute>} />

        <Route path="/route" element={<AdminRoute></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
