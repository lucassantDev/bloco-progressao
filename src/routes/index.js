import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '../components/MainScreen.vue'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainScreen
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
