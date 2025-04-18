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
    sitemap(),
    compress(),
    robotsTxt()
  ],
  output: 'hybrid',
  adapter: netlify({
    edgeMiddleware: false,
    functionPerRoute: false,
    builders: true,
    binaryMediaTypes: ['image/*', 'video/*'],
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
      }
    }
  },
});
