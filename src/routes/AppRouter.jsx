import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/login";
import Home from "../pages/Home";
import UserType from "../features/auth/userType";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usertype" element={<UserType />} />
      {/* route lain */}
    </Routes>
  );
}
