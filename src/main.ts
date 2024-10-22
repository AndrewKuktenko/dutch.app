import { provideApolloClient } from '@vue/apollo-composable'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { apolloClient } from './apollo'

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

provideApolloClient(apolloClient)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app.use(router)

app.mount('#app')
