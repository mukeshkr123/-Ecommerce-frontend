import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navabar";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import AdminRoute from "./components/AuthRoute/AdminRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* users  */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<AuthRoute></AuthRoute>} />

        <Route path="/route" element={<AdminRoute></AdminRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
