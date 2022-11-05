import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login.vue'
import signUp from '../views/signUp.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
