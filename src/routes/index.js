import { createRouter, createWebHistory } from 'vue-router'
import LoginScreen from '../components/LoginScreen.vue'
import MainScreen from '../components/MainScreen.vue'
import NewUserScreen from '../components/NewUserScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginScreen
  },
  {
    path: '/NewUserScreen',
    name: 'NewUser',
    component: NewUserScreen
  },
  {
    path: '/Main',
    name: 'Main',
    component: MainScreen
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router