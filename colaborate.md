# 🤝 Guía de Colaboración - Riwi SportsLine Frontend

Este documento define las reglas y buenas prácticas para colaborar en el desarrollo del proyecto **Riwi SportsLine Frontend**.  
El objetivo es mantener un flujo de trabajo claro, ordenado y profesional.

---

## 🌱 Flujo de trabajo con Git

1. **Crear rama desde `main`:**
   - Para cada cambio, crea una rama siguiendo la nomenclatura establecida:
     - `newModule-[name]` → Nuevos módulos completos (ej. `newModule-auth`).
     - `newFeature-[name]` → Nuevas funcionalidades (ej. `newFeature-cart`).
     - `newFixed-[name]` → Mejoras o correcciones (ej. `newFixed-login-bug`).

2. **Commits claros y descriptivos:**
   - Usa mensajes breves y precisos.
   - Ejemplo:  
     ```
     feat: agregar validación de email en registro
     fix: corregir bug en persistencia de sesión
     refactor: optimizar estructura de componentes
     ```

3. **Pull Requests (PR):**
   - Cada PR debe estar vinculado a una tarea/issue.
   - Describe claramente los cambios realizados.
   - Incluye capturas de pantalla o GIFs si aplica (UI/UX).
   - Asegúrate de que el PR pase las pruebas antes de enviarlo.

---

## 📦 Estándares de código

- Usar **TypeScript** con tipado estricto.
- Mantener la arquitectura modular:
- Estado global con **Zustand**.
- Consumo de API con **Axios** + interceptores.
- Validaciones con **React Hook Form + Yup**.
- Estilos con **TailwindCSS** (respetando consistencia de diseño).
- Código limpio siguiendo principios de **Clean Code**.

---

## ✅ Pruebas y calidad

- Pruebas unitarias con **Jest + React Testing Library**.
- Cobertura mínima del **40%** en módulos críticos.
- Usa **ESLint + Prettier** para mantener formato y estilo uniforme.
- No se aceptarán PRs que rompan la build o tengan errores de lint.

---

## 🚀 Despliegue

- Cada PR aprobado será integrado a `main`.
- Las versiones listas para producción serán desplegadas en **Vercel / Netlify / Docker**.

---

## 📌 Recomendaciones

- Mantén tu rama actualizada con `main` para evitar conflictos.
- Divide las tareas grandes en PRs pequeños y manejables.
- Documenta cualquier cambio relevante en el **README.md** o en comentarios del código.

---

### 💡 Recordatorio
La colaboración exitosa depende de **comunicación clara, código limpio y compromiso con la calidad**.  
Cada contribución suma al crecimiento del proyecto 🚀.
