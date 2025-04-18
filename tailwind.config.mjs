import { heroui } from "@heroui/react";
import animations from '@midudev/tailwind-animations';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      'phone': { 'max': '576px' },
      'tablet': '577px',
      'laptop': '769px',
      'desktop': '993px',
      'greater-desktop': '1745px',
    },
    colors: {
      // Colores primarios con variaciones de transparencia
      'color01': {
        DEFAULT: '#95C998',
        50: '#95C99880',
        100: '#95C998BF',
        200: '#95C998',
        light: '#a5d9a8',
        dark: '#75a978',
      },
      'color02': {
        DEFAULT: '#5F6934',
        50: '#5F693480',
        100: '#5F6934BF',
        200: '#5F6934',
        light: '#7f8954',
        dark: '#3f4924',
      },
      'color03': {
        DEFAULT: '#3D6679',
        50: '#3D667980',
        100: '#3D6679BF',
        200: '#3D6679',
        light: '#5d8699',
        dark: '#2d4659',
      },
      transparent: 'transparent',
      current: 'currentColor',
      'red-500': '#ef4444',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.emerald,
      purple: colors.violet,
      pink: colors.fuchsia,
      amber: colors.amber,
    },
    fontFamily: {
      'raleway': ['Raleway Variable', 'sans-serif'],
      'parisienne': ['Parisienne', 'cursive'],
      'rubik': ['Rubik Variable', 'sans-serif'],
      'sans': ['Raleway Variable', 'system-ui', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', 'serif'],
    },
    extend: {
      animation: {
        'float': 'floating 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'fade-out': 'fadeOut 0.5s ease-out forwards',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            a: {
              fontWeight: '500',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: {
              fontWeight: '600',
            },
          },
        },
      },
    },
  },

  plugins: [
    heroui(),
    animations,
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
          '&:hover': {
            boxShadow: theme('boxShadow.2xl'),
            transform: 'translateY(-5px)',
            transition: 'all 0.3s ease',
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.color01.DEFAULT'),
          color: theme('colors.white'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.bold'),
          '&:hover': {
            backgroundColor: theme('colors.color01.dark'),
          },
        },
        '.invitation-container': {
          backgroundImage: 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
          '--tw-gradient-from': theme('colors.color01.50'),
          '--tw-gradient-to': theme('colors.color03.50'),
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
          borderRadius: theme('borderRadius.xl'),
          padding: theme('spacing.8'),
          boxShadow: theme('boxShadow.lg'),
        },
        '.responsive-container': {
          width: '100%',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen tablet': {
            maxWidth: '540px',
          },
          '@screen laptop': {
            maxWidth: '720px',
          },
          '@screen desktop': {
            maxWidth: '960px',
          },
          '@screen greater-desktop': {
            maxWidth: '1140px',
          },
        },
      });
    }),
    // Plugin para soporte de texto con contorno
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          textShadow: `
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000
          `,
        },
        '.text-outline-light': {
          textShadow: `
            -1px -1px 0 #fff,
            1px -1px 0 #fff,
            -1px 1px 0 #fff,
            1px 1px 0 #fff
          `,
        },
      };
      addUtilities(newUtilities);
    }),
    // Plugin para aspect ratios
    plugin(function({ addUtilities }) {
      const aspectRatios = {
        '.aspect-1-1': {
          aspectRatio: '1 / 1',
        },
        '.aspect-16-9': {
          aspectRatio: '16 / 9',
        },
        '.aspect-4-3': {
          aspectRatio: '4 / 3',
        },
        '.aspect-3-2': {
          aspectRatio: '3 / 2',
        },
      };
      addUtilities(aspectRatios);
    }),
  ],
  safelist: [
    'animate-float',
    'animate-bounce-slow',
    'animate-fade-in',
    'animate-fade-out',
    'text-outline',
    'text-outline-light',
  ],
}