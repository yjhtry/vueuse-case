import { type App as VueApp, createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  extendRoutes: routes => setupLayouts(routes),
  history: createWebHashHistory(import.meta.env.BASE_URL),
})
app.use(router)

Object.values(import.meta.glob<{ install: (app: VueApp) => void }>('./modules/*.ts', { eager: true }))
  .forEach((i) => {
    i.install?.(app)
  })

app.mount('#app')
