# Para realizar los test
npm i vitest happy-dom -D

# código de vite.config.ts
<reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom'
  }
})

Agregar script al package.json
scripts: {
  "test": "vitest",
}

Para testear componentes de React
se instala usando el siguiente comando
- npm install --save-dev @testing-library/react

Para simular eventos de usuario
- npm i @testing-library/user-event -D


# React + TypeScript + Vite

# Intrucciones
- Crear una app de React que implemente un campo de texto y botón para añadir un elementos.
- Cuando se hace click en el botón, el texto en el campo de entrada debe agregarse a continuación a una lista de elementos.
- Además, cada vez que se hace click en cualquier elemento de la lista, debe eliminarse de la lista.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
