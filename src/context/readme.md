## LOGICA DEL CONTEXTO :ZUSTAND

Este directorio contiene toda la lógica del estado global de la aplicación utilizando Zustand, una librería ligera para manejar el estado en aplicaciones React. Aquí se centraliza la gestión del estado, manteniendo una arquitectura limpia y eficiente.

Convenciones
### 1. Estructura de Archivos

Cada "store" de Zustand debe tener su propia carpeta y archivo. En el archivo de cada store, exportaremos la lógica relacionada con el estado y las acciones necesarias para modificarlo.

Ejemplo de estructura:
contexto/
├── useAuth/
│   ├── index.ts
│   └── README.md
├── useCart/
│   ├── index.ts
│   └── README.md
└── useUser/
    ├── index.ts
    └── README.md

### 2. Uso de create de Zustand

Cada store se debe crear utilizando la función create de Zustand. Esta función define el estado y las acciones que pueden modificar ese estado.

Ejemplo básico de uso:
import create from 'zustand';

type Estado = {
  contador: number;
  incrementar: () => void;
};

export const useContador = create<Estado>((set) => ({
  contador: 0,
  incrementar: () => set((state) => ({ contador: state.contador + 1 })),
}));

### 3. Tipado con TypeScript

Asegúrate de tipar el estado y las acciones en todos los stores para tener un control claro sobre el tipo de datos con los que estás trabajando.

Ejemplo:
type AuthState = {
  isAuthenticated: boolean;
  login: (usuario: string) => void;
  logout: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: (usuario) => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));

### 4. Acciones Asíncronas

Si necesitas manejar operaciones asíncronas (como peticiones a una API), asegúrate de definir las acciones adecuadas y manejar los estados de carga, éxito y error.

Ejemplo con acción asíncrona:
type UsuarioState = {
  usuario: any;
  loading: boolean;
  error: string | null;
  obtenerUsuario: (id: string) => Promise<void>;
};

export const useUsuario = create<UsuarioState>((set) => ({
  usuario: null,
  loading: false,
  error: null,
  obtenerUsuario: async (id) => {
    set({ loading: true });
    try {
      const response = await fetch(`/api/usuario/${id}`);
      const data = await response.json();
      set({ usuario: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

### 5. Acciones Compuestas

Si tu store necesita hacer varias actualizaciones de estado a la vez, puedes hacer uso de la función set para actualizar múltiples partes del estado en una sola llamada.

Ejemplo con acciones compuestas:
export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  usuario: null,
  login: (usuario) => set({ isAuthenticated: true, usuario }),
  logout: () => set({ isAuthenticated: false, usuario: null }),
}));

### Ejemplo de Uso

Supongamos que tenemos un store de autenticación (useAuth) que maneja el estado del usuario.

Primero, en tu componente, importa el store:

import { useAuth } from './contexto/useAuth';


Luego, usa el store para obtener el estado y las acciones:

``` bash

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Cerrar sesión</button>
      ) : (
        <button onClick={() => login('usuario')}>Iniciar sesión</button>
      )}
    </div>
  );
};
```