import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true,
    // Desactivar completamente las redirecciones
    functionPerRoute: false,
    redirects: false
  })
});