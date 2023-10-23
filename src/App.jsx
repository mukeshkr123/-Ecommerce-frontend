import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navabar";
import AuthRoute from "./components/AuthRoute/AuthRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* users  */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AuthRoute></AuthRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
