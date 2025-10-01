// path: src/router/router.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";
import AdminDashboard from "../pages/AdminDashboard";
import SellerDashboard from "../pages/SellerDashboard";
import CustomerHome from "../pages/CustomerHome";

import { AuthGuard } from "./guard/AuthGuard";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rutas protegidas por rol */}
            <Route
                path="/admin"
                element={
                    <AuthGuard roles={["admin"]}>
                        <AdminDashboard />
                    </AuthGuard>
                }
            />

            <Route
                path="/seller"
                element={
                    <AuthGuard roles={["seller"]}>
                        <SellerDashboard />
                    </AuthGuard>
                }
            />

            <Route
                path="/customer"
                element={
                    <AuthGuard roles={["customer"]}>
                        <CustomerHome />
                    </AuthGuard>
                }
            />

            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}