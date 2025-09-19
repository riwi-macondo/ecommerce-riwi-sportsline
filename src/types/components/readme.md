## INTERFACES Para componentes
### Ejemplo: 

types/
├── components/
│   ├── IButton.ts
    ├── INombreDeTipado.ts


``` bash
// El nombre del archivo comienza con I y luego la segunda en mayuscula 


export interface NombreComponenteProps {
  texto: string;
  cantidad: number;
}

