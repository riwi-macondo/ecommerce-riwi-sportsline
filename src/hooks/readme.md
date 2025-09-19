## HOOKS

Esta carpeta contiene todos los hooks personalizados que se utilizan en la aplicación. Los hooks son funciones reutilizables que permiten compartir la lógica de estado y efectos entre los componentes, y nos ayudan a mantener el código limpio y organizado.

Convenciones
### 1. Nombres de los Hooks

Los nombres de los hooks deben seguir la convención de camelCase y deben comenzar con la palabra use para que sea claro que son hooks.

Ejemplo:

useFetch()

useLocalStorage()

useAuth()

### 2. Estructura de Archivos

Cada hook debe estar en su propio archivo dentro de la carpeta hooks.

El archivo debe tener un nombre descriptivo que indique claramente lo que hace el hook.

Ejemplo de estructura:
hooks/
├── useAuth/
│   └── index.ts
├── useLocalStorage/
│   └── index.ts
└── useFetch/
    └── index.ts

### 3. Tipado con TypeScript

Los hooks deben estar tipados para proporcionar una mejor experiencia de desarrollo y evitar errores de tipo.

Usa interfaces o tipos para tipar las variables de estado, las respuestas de las funciones y los parámetros cuando sea necesario.

Ejemplo:
```bash
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetch = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
```

### 4. Usar useState y useEffect cuando sea necesario

En un hook, es común que uses useState para manejar el estado interno y useEffect para realizar efectos secundarios (como peticiones a APIs o suscripciones).

Ejemplo:
```bash
import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};
```
### 5. Funciones Asíncronas

Si el hook involucra operaciones asíncronas (como una llamada a una API), asegúrate de manejar adecuadamente el estado de carga y el manejo de errores.

Ejemplo con función asíncrona:
```bash
interface UseFetchData {
  data: any | null;
  loading: boolean;
  error: string | null;
}

export const useFetchData = (url: string): UseFetchData => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error en la petición');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
```
### Ejemplo de Uso

Supongamos que tienes un hook llamado useFetch para obtener datos desde una API.

### 1. En tu componente, importa el hook:
import { useFetch } from './hooks/useFetch';

### 2. Usa el hook dentro del componente:
```bash
const Componente = () => {
  const { data, loading, error } = useFetch<any>('https://api.example.com/data');

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Datos obtenidos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```