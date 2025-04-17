import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://galiacumple.netlify.app',
  output: 'static',
  integrations: [
    react({ fastRefresh: true }),
    tailwind({
      config: { path: './tailwind.config.mjs' },
      applyBaseStyles: false,
    }),
    compress({ css: true, html: true, img: true, js: true, svg: true }),
    sitemap(),
    // prefetch nativo en Astro 4 ya no requiere integration
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@ui': path.resolve('./src/components/ui'),
        '@modals': path.resolve('./src/components/modals'),
        '@cards': path.resolve('./src/components/cards'),
        '@media': path.resolve('./src/components/media'),
        '@forms': path.resolve('./src/components/forms'),
        '@layouts': path.resolve('./src/layouts'),
        '@sections': path.resolve('./src/sections'),
        '@styles': path.resolve('./src/styles'),
        '@utils': path.resolve('./src/utils'),
        '@data': path.resolve('./src/data'),
        '@assets': path.resolve('./src/assets'),
        '@types': path.resolve('./src/types'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: { drop_console: true },
      },
    },
    css: {
      devSourcemap: true,
    },
    server: {
      watch: { usePolling: false },
    },
  },
  viewTransitions: true,
});
