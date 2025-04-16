const { heroui } = require("@heroui/react");
import animations from '@midudev/tailwind-animations'
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'phone': { 'max': '576px' },
  
      'tablet': '577px',
      // => @media (min-width: 768px) { ... }
  
      'laptop': '769px',
      // => @media (min-width: 1024px) { ... }
  
      'desktop': '993px',
      // => @media (min-width: 1280px) { ... }
      'greater-desktop': '1745px',
    },
    colors: {
      'color01': '#95C998FF',
      'color02': '#5F6934FF',
      'color03': '#3D6679FF',
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
    },
    extend: {},
  },

  // Usar heroui() en lugar de nextui()
  plugins: [
    require('postcss-nesting'),
    require('tailwindcss/nesting'),
    heroui(),
    animations
  ]
}
