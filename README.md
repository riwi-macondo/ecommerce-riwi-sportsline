# 🛒 Riwi SportsLine - E-commerce Frontend

SPA (Single Page Application) desarrollada en **React + TypeScript** para la empresa **Riwi SportsLine**, que permite a clientes, vendedores y administradores interactuar con la plataforma de forma segura, ágil y confiable.

El proyecto consume la API REST existente y ofrece una experiencia moderna, responsiva y accesible.

---

## 🚀 Objetivos principales

- Autenticación con **JWT + Refresh Token** y persistencia de sesión segura.
- Manejo de roles: **administrador, vendedor y cliente**.
- Gestión visual de **productos, clientes y pedidos**.
- Validaciones de formularios y manejo robusto de errores.
- Interfaz profesional, responsiva y accesible.
- Despliegue en entornos productivos como **Vercel**, **Netlify** o **Docker**.

---

## 🛠️ Tecnologías principales

- **TypeScript**: tipado fuerte y escalabilidad.
- **React + Vite**: velocidad y modularidad.
- **React Router DOM**: navegación SPA con rutas protegidas.
- **Zustand**: manejo de estado global sencillo y eficiente.
- **Axios**: consumo de API REST con interceptores y manejo de errores.
- **React Hook Form + Yup**: validaciones declarativas y robustas.
- **TailwindCSS**: diseño moderno, responsivo y profesional.
- **Jest + React Testing Library**: pruebas unitarias y de componentes.

---

## 📌 Funcionalidades clave

### 🔑 Autenticación y roles
- Registro e inicio de sesión conectados al backend.
- Persistencia de sesión en `LocalStorage` o cookies seguras.
- Rutas protegidas según rol (admin, vendedor, cliente).
- Manejo de errores de autenticación (401/403).

### 📦 Gestión de productos y clientes
- CRUD visual de productos y clientes.
- Formularios con validaciones y feedback en tiempo real.
- Manejo de errores desde la API.
- Interfaz amigable y adaptable a dispositivos móviles.

### 🛍️ Gestión de pedidos
- Carrito de compras con múltiples productos.
- Registro y consulta de pedidos.
- Validaciones de negocio (ej. stock insuficiente).
- Notificaciones y feedback visual.

### ✅ Calidad y despliegue
- Cobertura mínima de pruebas del **40%**.
- Principios de **Clean Code** y buenas prácticas.
- Flujo de trabajo profesional con **GitHub Flow**.
- Deploy en Vercel / Netlify / Docker Compose.

---

## ⚡ Instalación y ejecución

```bash
# Clonar repositorio
git clone https://github.com/moicanbas/ecommerce-riwi-sportsline

# Entrar al proyecto
cd ecommerce-riwi-sportsline

# Instalar dependencias
npm install

# Ejecutar en entorno de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🌐 Despliegue
El proyecto está preparado para ser desplegado en:

- Vercel
- Netlify
- Docker
