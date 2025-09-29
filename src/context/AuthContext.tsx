// path: src/context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

/**
 * Tipado para evitar errores
 */
export type Role = "admin" | "seller" | "customer";

export type User = {
  role: Role;
  name: string;
};

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

/**
 * Exporto el contexto para poder mockearlo en tests.
 */
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // DEV: inicializado como admin para probar; en producción -> null
  const [user, setUser] = useState<User | null>({ role: "admin", name: "Test" });

  const login = (userData: User) => {
    setUser(userData);
    // aquí normalmente guardarías token en localStorage / cookie
  };

  const logout = () => {
    setUser(null);
    // borrar token, etc.
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};