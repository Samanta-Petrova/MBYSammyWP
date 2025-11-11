import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Portfolio from '../pages/Portfolio.vue'
import Kontakt from '../pages/Kontakt.vue'
import OmMig from '../pages/OmMig.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/kontakt', name: 'Kontakt', component: Kontakt },
   { path: '/omMig', name: 'OmMig', component: OmMig },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
