## COMPONENTS 
### Ejemplo: 

Components/
├── NombreComponente/
│   ├── index.tsx


``` bash
// El nombre comienza en mayuscula - Crear carpeta 


import {NombreComponenteProps} from './ruta/archivo'

export const NombreComponente = ({ texto, cantidad }: NombreComponenteProps) => {
  return (
    <div>
      <p>{texto}</p>
      <p>{cantidad}</p>
    </div>
  );
};
```
