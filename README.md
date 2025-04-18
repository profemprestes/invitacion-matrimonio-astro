# Invitación Cumpleaños Infantil - Galia

![Versión](https://img.shields.io/badge/versión-0.0.1-blue)
![Astro](https://img.shields.io/badge/Astro-3.6.5-orange)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4)
![Netlify](https://img.shields.io/badge/Netlify-deployed-00C7B7)

Una aplicación web moderna para crear invitaciones digitales para cumpleaños infantiles, con un diseño elegante y personalizable.

## ✨ Características

- 🎨 Diseño responsive y elegante optimizado para todos los dispositivos
- 🔄 Componentes interactivos con React y Framer Motion para animaciones atractivas
- 🌈 Esquema de colores personalizado y cuidadosamente seleccionado
- 📝 Formularios interactivos para recolectar respuestas de los invitados
- 🚀 Optimizado para rendimiento y velocidad
- 🔒 Configuración de seguridad mejorada para implementación en producción

## 🛠️ Tecnologías

Este proyecto utiliza un stack moderno de desarrollo web:

- **[Astro](https://astro.build/)**: Framework web con enfoque en rendimiento y experiencia de desarrollo
- **[React](https://reactjs.org/)**: Biblioteca para crear interfaces de usuario
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitario
- **[HeroUI](https://heroui.dev/)**: Componentes UI modernos
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animaciones
- **[TypeScript](https://www.typescriptlang.org/)**: Superset tipado de JavaScript
- **[Netlify](https://netlify.com/)**: Plataforma de hosting y despliegue continuo

## 🎨 Paleta de colores

La aplicación utiliza una paleta de colores elegante y fresca:

- **Principal**: `#95C998` - Verde claro
- **Secundario 1**: `#5F6934` - Verde oliva
- **Secundario 2**: `#3D6679` - Azul grisáceo

## 📂 Estructura del proyecto

```
/
├── public/           # Archivos estáticos
├── src/
│   ├── components/   # Componentes React reutilizables
│   ├── layouts/      # Layouts de Astro
│   ├── pages/        # Páginas de la aplicación
│   └── styles/       # Estilos globales y utilidades
└── package.json      # Dependencias y scripts
```

## 🚀 Primeros pasos

### Prerrequisitos

- Node.js (v18 o superior)
- PNPM (recomendado) o NPM

### Instalación

1. Clona el repositorio
   ```bash
   git clone https://github.com/tu-usuario/invitacion-cumple-galia.git
   cd invitacion-cumple-galia
   ```

2. Instala las dependencias
   ```bash
   pnpm install
   ```

3. Inicia el servidor de desarrollo
   ```bash
   pnpm dev
   ```

4. Abre tu navegador en `http://localhost:3000`

## 📦 Comandos disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm preview` - Vista previa local de la build de producción
- `pnpm clean` - Limpia la caché y archivos generados

## 🚢 Despliegue

Este proyecto está configurado para desplegarse automáticamente en Netlify:

1. Conecta tu repositorio a Netlify
2. Netlify detectará automáticamente la configuración en `netlify.toml`
3. Cada push a la rama principal activará un nuevo despliegue

## 🔧 Personalización

### Fuentes

El proyecto utiliza tres fuentes principales:
- **Raleway Variable** - Para textos generales
- **Rubik Variable** - Para elementos de UI
- **Parisienne** - Para títulos decorativos y elementos destacados

### Breakpoints responsive

```
- 'phone': max-width 576px
- 'tablet': min-width 577px
- 'laptop': min-width 769px
- 'desktop': min-width 993px
- 'greater-desktop': min-width 1745px
```

## 📄 Licencia

[MIT](LICENSE)

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias.

---

Desarrollado con ❤️ usando Astro, React y TailwindCSS
