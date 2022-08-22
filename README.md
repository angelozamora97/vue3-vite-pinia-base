# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

# Revisar configuracion

# vue3-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

### NODE version

```
16.15.0
```

### NPM integrados

```
vite
vue-router@4
axios
pinia
```

# Documentación

- La siguiente documentación busca redactar para un facil entendimiento sobre el ordenamiento de carpetas y la función de cada una de estas dentro de la arquitectura base del proyecto Front End - VueJS 3.

## Arquitectura

- Para el proyecto base en vue3 se usa una estructuración de arquitectura en capas, representamos la comunicación que se tienen entre la capa de compononentes, la capa store, los models y la capa servicios.

- La capa de Modules representa el flujo de negocio de cada servicio, contiene a los diversos componentes y store que interactuan para el flujo de servicio en especifico.
- La capa de componentes y la capa de store hacen uso de los models para el tipado de datos.
- La capa de componentes y la capa store pueden acceder a la capa de servicios para consumir los datos del servidor.
- La capa de componentes puede acceder a las funciones de la capa store para manejar el estados de los datos en la aplicación.

<image src="./src/assets/images/arquitectura-front.PNG" alt="Arquitectura Front End">

## Estructuración de carpetas

- A continuación se muetras una imagen referencial de la estructuración de carpetas que se tiene para el proyecto asi como la descripcion del funcionamiento de cada una de ellas

<image src="./src/assets/images/estructuracion.PNG" alt="Estructuración de carpetas Front End">

## Assets

- Dentro de esta carpeta encontraremos todo lo referente a los archivos CSS e Imagenes generales del proyecto

  ### CSS

  ```
  Contiene archivos de estilos '.css/.sass/etc' generales para el proyecto, tales como 'style.css' donde encontraremos configuraciones 'css' que serán usadas en varias partes del proyecto
  ```

  ### Images

  ```
  Contiene archivos de tipo imagen '.jpg/.png/.svg/etc' que se usaran en el proyecto
  ```

## Layouts

- Esta carpeta contiene los distintos componentes cuyo fin es presentacional, pintan la estructura basica de las vistas de la aplicación, serán intercambiadas de manera reactive en el App.vue mediante el uso de 'meta.layout' en el router

## Composables

- En esta carpeta se tienen a los diversos composables que seran usados en diversas partes de la aplicacion, a su ves tambien puede contener adaptadores de las funciones del store para obtener un bajo acoplamiento entre los compontentes y el store

## Models

- Esta carpeta contiene a los diversas interfaces y tipos de datos que serán usadas en la aplicación.

## Modules

- Esta carpeta contiene a los diversos modulos de la aplicación, cada modulo contiene diversas carpetas y archivos referentes a la lógica de servicio de ese modulo.

  ### Layouts

  ```
  - Esta carpeta contiene distintos componentes cuyo fin es presentacional, pintan la estructura basica de las vistas de cada modulo en cuestión
  ```

  ### Router

  ```
  Esta carpeta contiene el archivo  configuración de rutas del modulo
  ```

  ### Components

  ```
  Dentro de esta carpeta se ubican los diversos componentes que se reutilizaran en las diversas vistas de este modulo de la aplicación
  ```

  ### Views

  ```
  Dentro de esta carpeta se ubican las vistas de este modulo de la aplicación, cada una de ellas asociadas a una ruta de la aplicación.
  ```

## Router

- Esta carpeta contiene el archivo general de configuración de rutas del proyecto, aquí se importan y gestionan todos los archivos router de los distintos modulos.

## Store

- Esta carpeta contiene el Store general del proyecto, aquí se gestionara el state, actions y getters que seran usados en varios modulos de la aplicación

## Services

- Esta carpeta representa la capa de servicios de la aplicación, contiene la configuración de axios que se utiliza para el consumo de apis asi como la carpeta de servicios de cada modulo.

  ### Apis

  ```
  Contiene la configuracion de los servicios usados en la aplicación distribuido por modulos
  ```

## Common

- En esta carpeta se encuentran todos aquellos componentes que reutilizaré en distintos sitios de la aplicación.

  ### Components

  ```
  Contiene a los diversos componentes que serán reutilizados en distintos sitios de la aplicación,
  tales como Botones, Titulos, etc
  ```

  ### Views

  ```
  Contiene a las diveras vistas que seran reutilizados en distintos sitios de la aplicación
  ```

## Utils

- Esta carpeta contiene varias funciones de utilidad para la trata de datos que seran usadas a lo largo de la aplicación, tales como el parseo de Fechas, un filtrado de palabras, etc.

# Tecnologias base del proyecto

- Se presenta una definicion sobre las diferentes tecnologias base usadas en el proyecto

  ## Vue

  - Es un marco de JavaScript para construir interfaces de usuario. Se basa en HTML, CSS y JavaScript estándar, y proporciona un modelo de programación declarativo y basado en componentes que lo ayuda a desarrollar interfaces de usuario de manera eficiente, ya sea simple o compleja.
  - Para el proyecto se usa Vue3 composition api

  https://vuejs.org/guide/introduction.html

  ## Vue-router

  - Enrutador oficial de vue, es la biblioteca de enrutamiento oficial del lado del cliente que proporciona las herramientas necesarias para asignar los componentes de una aplicación a diferentes rutas de URL del navegador.
  - Para el proyecto se usa vue-router v4.x

  https://router.vuejs.org/guide/

  ## Pinia

  - Es una nueva librería de gestión de estados para el ecosistema Vue. Como gestor de estados que es, cumple la misma función que Vuex y otras tantas librerías con el mismo propósito, aunque en este caso, Pinia sería oficial y cuenta con el soporte del equipo encargado de Vue.

  https://pinia.vuejs.org/introduction.html

  ## AXIOS

  - Es una librería JavaScript que puede ejecutarse en el navegador y que nos permite hacer sencillas las operaciones como cliente HTTP, por lo que podremos configurar y realizar solicitudes a un servidor y recibiremos respuestas fáciles de procesar.

  https://axios-http.com/docs/intro

  ## VITE

  - Es una herramienta para Frontend, creada por Evan You, mismo creador de Vuejs, esta herramienta nos permitirá crear aplicaciones de Javascript usando algún framework o libreria como ReactJs, Vuejs, Angular ya sea con algún framework especifico o ya sea Vanillajs.

  - Ofrece una mejor y mas rapida compilacion del proyecto en el ambiente de desarrollo por encima de VueCLI

  https://vitejs.dev/guide/
