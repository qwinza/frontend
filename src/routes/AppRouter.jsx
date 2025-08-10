import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/login";
import Home from "../pages/Home";
import UserType from "../features/auth/userType";
import RegisterUser from "../features/auth/registerUser";
import RegisterUMKM from "../features/auth/registerUmkm";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usertype" element={<UserType />} />
      <Route path="/register/user" element={<RegisterUser />} />
      <Route path="/register/umkm" element={<RegisterUMKM />} />
    </Routes>
  );
}
