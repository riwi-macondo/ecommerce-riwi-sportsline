## Utils

Esta carpeta contiene todas las funciones de utilidad que usamos en la aplicación. Son funciones que no dependen de la UI y pueden ser reutilizadas en diferentes partes de la aplicación.

Convenciones
### 1. Nombres de las Funciones

Usa camelCase para nombrar las funciones.

Los nombres deben ser claros y describir bien lo que hace la función.

Ejemplo:

calcularTotal()

validarEmail()

formatearFecha()

### 2. Estructura de Archivos

Cada conjunto de funciones similares debe estar en su propia carpeta.

Dentro de cada carpeta, crea un archivo index.ts donde definirás las funciones.

Ejemplo de estructura:

utils/
├── calcular/
│   ├── index.ts
├── formato/
│   ├── index.ts
└── validaciones/
    ├── index.ts

### 3. Tipado con TypeScript

Asegúrate de usar TypeScript para tipar las funciones correctamente, para que sea fácil saber qué parámetros espera cada función y qué devuelve.

Ejemplo:

export const calcularTotal = (precio, cantidad): nombreDelTipado => {
  return precio * cantidad;
};

### 4. Funciones Simples

Las funciones en utils deben ser puras: no deben tener efectos secundarios y deben devolver un resultado basado solo en sus argumentos.

Ejemplo:

// Función que suma dos números
export const sumar = (a: number, b: number): number => a + b;
