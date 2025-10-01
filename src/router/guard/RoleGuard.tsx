import { Routes, Route } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import Login from "../../pages/Login";

// Si no existen, crea estos componentes básicos en /src/pages/
import AdminDashboard from "../../pages/AdminDashboard";
import SellerDashboard from "../../pages/SellerDashboard";
import CustomerHome from "../../pages/CustomerHome";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={<Login />} />

      {/* Ruta protegida solo para admin */}
      <Route
        path="/admin"
        element={
          <AuthGuard roles={["admin"]}>
            <AdminDashboard />
          </AuthGuard>
        }
      />

      {/* Ruta protegida solo para seller */}
      <Route
        path="/seller"
        element={
          <AuthGuard roles={["seller"]}>
            <SellerDashboard />
          </AuthGuard>
        }
      />

      {/* Ruta protegida solo para customer */}
      <Route
        path="/customer"
        element={
          <AuthGuard roles={["customer"]}>
            <CustomerHome />
          </AuthGuard>
        }
      />
    </Routes>
    
  );
};