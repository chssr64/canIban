import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Urouter from '../views/Urouter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/urouter',
    name: 'Urouter',
    component: Urouter
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
