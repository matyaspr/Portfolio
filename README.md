# Portfolio SPA

Single Page Application desarrollada con **React 18** para generar un portfolio de proyectos técnicos, pensada para demostrar skills en entrevistas de desarrollo.

## Stack

- **React 18** + **react-scripts** (Create React App)
- Diseño responsivo con CSS custom properties (tema oscuro)
- Routing SPA vía `react-scripts` (no se necesita React Router para una sola página)

## Requisitos

Solo necesitas **Docker** y **Docker Compose** instalados en tu máquina. No es necesario tener Node.js ni npm localmente.

## Cómo ejecutar

```bash
# Construir la imagen y levantar el contenedor
docker compose up -d

# Abrir en el navegador
open http://localhost:3000
```

Para detenerlo:

```bash
docker compose down
```

## Desarrollo

Si querés hacer cambios y verlos en vivo (hot reload), necesitás Node.js local:

```bash
npm install
npm start
# Abre http://localhost:3000
```

Cuando termines los cambios, reconstruí la imagen de Docker:

```bash
docker compose build
docker compose up -d
```

## Estructura del proyecto

```
├── Dockerfile           # Build multi-stage (node:20 → nginx:alpine)
├── docker-compose.yml   # Orquestación del contenedor
├── nginx.conf           # Configuración de nginx para SPA
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js         # Entry point de React
    ├── App.js           # Componente raíz
    ├── App.css          # Estilos globales
    ├── components/
    │   ├── Header.js    # Navegación fija con scroll detection
    │   ├── Hero.js      # Sección de presentación
    │   ├── Projects.js  # Grilla de proyectos con filtros
    │   ├── Skills.js    # Categorías de tecnologías
    │   ├── Experience.js# Timeline de experiencia laboral
    │   └── Contact.js   # Formulario de contacto + enlaces
    └── data/
        ├── projects.js  # Datos de proyectos (editables)
        └── skills.js    # Datos de skills técnicas (editables)
```

## Cómo personalizar

1. **Proyectos**: editá `src/data/projects.js` — cada proyecto tiene título, descripción, tecnologías, imagen, y links a GitHub/demo.
2. **Skills**: editá `src/data/skills.js` — categorías y tecnologías.
3. **Experiencia**: editá `src/components/Experience.js` — roles, empresas, logros.
4. **Hero**: editá `src/components/Hero.js` — tu nombre, rol, descripción.
5. **Contacto**: editá `src/components/Contact.js` — links a GitHub, LinkedIn, email.

## Build con Docker

El `Dockerfile` usa build multi-stage:

1. **Stage 1 (build)**: usa `node:20-alpine` para instalar dependencias y compilar la app con `npm run build`.
2. **Stage 2 (serve)**: usa `nginx:1.25-alpine` para servir los archivos estáticos compilados.

Esto resulta en una imagen final liviana (~25 MB) lista para producción.
