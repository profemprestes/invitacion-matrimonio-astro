import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    compress({
      html: {
        removeAttributeQuotes: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
      css: true,
      js: true,
      img: {
        quality: 80,
      },
      svg: {
        multipass: true,
      },
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: true,
    })
  ],
  output: 'hybrid',
  adapter: netlify({
    edgeMiddleware: false,
    functionPerRoute: false,
    builders: true,
    binaryMediaTypes: ['image/*', 'video/*'],
    imageCDN: true, // Habilita CDN para imágenes
  }),
  site: 'https://galiacumple.netlify.app',
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
    build: {
      rollupOptions: {
        external: ['sharp']
      },
      cssCodeSplit: true,
      // Mejora el tamaño del archivo final
      assetsInlineLimit: 4096,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    ssr: {
      noExternal: ['@heroui/react', '@midudev/tailwind-animations'],
    },
    // Configura optimizaciones para el desarrollo
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
    },
    // Agregar soporte para módulos legacy
    legacy: {
      buildSsrCjsExternalHeuristics: true,
    },
  },
  // Configuración de rendimiento
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  compressHTML: true,
});
