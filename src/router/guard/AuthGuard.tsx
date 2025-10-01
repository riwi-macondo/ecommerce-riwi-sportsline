// path: src/router/guard/AuthGuard.tsx
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth, Role } from "../../context/AuthContext";

interface AuthGuardProps {
  children?: ReactNode;
  roles?: Role[];
}

/**
 * Guard genérico: si no está autenticado -> /login
 * si está autenticado pero rol no permitido -> /unauthorized
 * si todo ok -> render children
 */
export const AuthGuard = ({ children, roles }: AuthGuardProps) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (roles && (!user || !roles.includes(user.role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};