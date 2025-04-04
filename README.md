# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Vite (Frontend Build Tool)
Vite is a modern frontend build tool and development server for JavaScript applications.
It provides fast Hot Module Replacement (HMR), optimized builds with Rollup, and native ES module support.
Typically used for Vue.js, React, and other frontend frameworks.

## Create a vite project with pnpm package manager
```
volta list
volta install node@18
volta install pnpm
pnpm create vite 
```

## Build and run project project
```
cd vite-project
pnpm install
pnpm run dev
```

## Add vue router
Reference: https://router.vuejs.org/guide/
```
pnpm add vue-router@4
```

## JSON Server
we need json-server globally as we have to use json-server command, so it can be done using volta itself instead of pnpm
```
volta add json-server
 json-server src/data.json --watch
```