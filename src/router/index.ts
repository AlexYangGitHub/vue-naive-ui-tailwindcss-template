import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/setting', component: SettingView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
