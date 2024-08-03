# EJERCICIO REACT-NATIVE

Este es un ejercicio para comprender las funciones básicas para desarrollar una aplicación móvil utilizando react y el framework expo.


## Instalar proyecto

Instalación por defecto, con la mayoria de dependencias necesarias y utilizando typescript.
```bash
npx create-expo-app@latest
```

Intalación de plantilla en blanco, utilizando javascript. (Sin dependencias)
```bash
npx create-expo-app@latest --template blank
```


### Dependencias utilizadas

Constantes de expo - [Link](https://docs.expo.dev/versions/latest/sdk/constants/)
```bash
npx expo install expo-constants
```
Safe area context - [Link](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)
```bash
npx expo install react-native-safe-area-context
```
SVG - [Link](https://docs.expo.dev/versions/latest/sdk/svg/#installation)

Se puede utilizar en conjunto con SVGR - [Link](https://react-svgr.com/playground/)
```bash
npx expo install react-native-svg
```

## Instalar Tailwind al proyecto

Instalar nativewind

```bash
  npm install nativewind@2
```
Instalar Tailwind, versión exacta 3.3.2 ya que las posteriores podrían romper el proyecto.
```bash
  npm install --save-dev --save-exact tailwindcss@3.3.2
```
Inicializar plantilla tailwind.
```bash
  npx tailwindcss init
```
Agregar rutas de seguimiento al archivo tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Agregar plugin de tailwind al archivo babel.config.js
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};
```


## Documentation

[React Native](https://reactnative.dev/)

[Expo](https://docs.expo.dev/)

[Expo/vector-icons](https://icons.expo.fyi/Index)

[Tutorial 1](https://www.youtube.com/watch?v=U23lNFm_J70&t=37s)

[Tutorial 2](https://www.youtube.com/watch?v=ZDoiMLqWz2E)
