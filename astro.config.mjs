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
      filter: (page) => !page.includes('/_'),
    }),
    compress({
      // Configuración optimizada para evitar problemas
      html: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeRedundantAttributes: true,
      },
      css: {
        postcss: true,
      },
      js: {
        ecma: 2020,
      },
      img: {
        quality: 80,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/_astro', '/api'],
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
    binaryMediaTypes: ['image/*', 'video/*', 'font/*', 'audio/*'],
    imageCDN: true,
  }),
  site: 'https://galiacumple.netlify.app',
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
      postcss: {
        plugins: [],
      },
    },
    build: {
      rollupOptions: {
        external: ['sharp'],
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-components': ['@heroui/react'],
            'animations': ['framer-motion', '@midudev/tailwind-animations'],
          },
        },
      },
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
      minify: 'esbuild',
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
    },
    ssr: {
      noExternal: ['@heroui/react', '@midudev/tailwind-animations', 'framer-motion'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', '@heroui/react'],
      exclude: ['sharp'],
      esbuildOptions: {
        target: 'es2020',
      },
    },
  },
  // Removed experimental flags as they are now standard features in Astro 4.x
  compressHTML: true,
});