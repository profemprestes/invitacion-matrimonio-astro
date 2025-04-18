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
      // Configuración más conservadora para evitar problemas
      html: {
        removeComments: true,
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
    imageCDN: true,
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
      assetsInlineLimit: 4096,
      // Elimina terser para usar el minificador por defecto que es más estable
      minify: 'esbuild',
    },
    ssr: {
      noExternal: ['@heroui/react', '@midudev/tailwind-animations'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
      exclude: ['sharp'],
    },
    // Simplifica la configuración legacy
    legacy: {
      buildSsrCjsExternalHeuristics: true,
    },
  },
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  compressHTML: true,
});
