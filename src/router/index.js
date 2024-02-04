import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import routes from './routes'
import { createRouterGuards } from './permission'

const history = process.env.VITE_ROUTER_MODE === 'hash'
  ? createWebHashHistory()
  : createWebHistory()

const router = createRouter({
  history,
  routes
})

export function setupRouter (app) {
  createRouterGuards(router)
  app.use(router)
}

