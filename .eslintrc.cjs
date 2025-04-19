module.exports = {
  root: true, // Indica que este es el archivo de configuración raíz y detiene la búsqueda de archivos .eslintrc más arriba en el directorio [cite: 1]
  env: {
    browser: true, // Habilita variables globales del navegador [cite: 1]
    node: true,    // Habilita variables globales de Node.js [cite: 1]
    es2022: true,  // Habilita características de ECMAScript 2022 [cite: 1]
  },
  extends: [
    'eslint:recommended',                // Reglas recomendadas de ESLint [cite: 1]
    'plugin:@typescript-eslint/recommended', // Reglas recomendadas para TypeScript [cite: 1]
    'plugin:react/recommended',           // Reglas recomendadas para React [cite: 1]
    'plugin:react-hooks/recommended',     // Reglas recomendadas para React Hooks [cite: 1]
    'plugin:astro/recommended',           // Reglas recomendadas para Astro [cite: 1]
    'plugin:jsx-a11y/recommended',        // Reglas recomendadas para accesibilidad en JSX [cite: 1]
    'plugin:prettier/recommended',        // Integra Prettier como regla de ESLint [cite: 1]
  ],
  parser: '@typescript-eslint/parser',   // Parser para TypeScript [cite: 1]
  parserOptions: {
    ecmaFeatures: {
      jsx: true,                       // Habilita JSX [cite: 1]
    },
    ecmaVersion: 'latest',               // Versión de ECMAScript a soportar [cite: 1]
    sourceType: 'module',                // Tipo de módulo (ESM) [cite: 1]
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'prettier'], // Plugins de ESLint [cite: 1]
  rules: {
    'prettier/prettier': 'warn',                           // Marca los problemas de estilo de Prettier como advertencias [cite: 2]
    'no-unused-vars': 'off',                              // Desactiva la regla no-unused-vars de ESLint (usar la de TypeScript) [cite: 2]
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }], // Advierte sobre variables no usadas, excepto las que empiezan con _ [cite: 2]
    'react/react-in-jsx-scope': 'off',                     // Desactiva la regla de React de requerir la importación de React en cada archivo JSX [cite: 2]
    'react/prop-types': 'off',                             // Desactiva la verificación de prop-types de React (se asume que se usa TypeScript) [cite: 2]
    'react/jsx-uses-react': 'off',                         // Otra regla desactivada de React [cite: 2]
    'jsx-a11y/click-events-have-key-events': 'warn',        // Advierte sobre la falta de eventos de teclado en elementos clickeables [cite: 2]
    'jsx-a11y/no-static-element-interactions': 'warn',      // Advierte sobre la interacción en elementos estáticos sin roles [cite: 2]
  },
  settings: {
    react: {
      version: 'detect',                                 // Detecta automáticamente la versión de React [cite: 2]
    },
  },
  overrides: [
    {
      files: ['*.astro'],                                  // Aplica estas reglas solo a archivos .astro [cite: 3]
      parser: 'astro-eslint-parser',                      // Usa el parser de ESLint para Astro [cite: 3]
      parserOptions: {
        parser: '@typescript-eslint/parser',             // Usa el parser de TypeScript dentro de archivos .astro [cite: 3]
        extraFileExtensions: ['.astro'],                  // Permite al parser de TypeScript procesar archivos .astro [cite: 3]
      },
      rules: {
        // Reglas específicas para archivos Astro (puedes añadir reglas aquí) [cite: 3]
      },
    },
    {
      files: ['*.tsx', '*.jsx'],                           // Aplica estas reglas solo a archivos .tsx y .jsx [cite: 3]
      rules: {
        // Reglas específicas para archivos React (puedes añadir reglas aquí) [cite: 3]
      },
    },
  ],
  ignorePatterns: ['dist/**', 'node_modules/**', '.astro/**', '*.cjs'], // Ignora estos directorios y archivos [cite: 4]
};