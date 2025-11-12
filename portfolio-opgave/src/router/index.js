import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Portfolio from '../pages/Portfolio.vue'
import Kontakt from '../pages/Kontakt.vue'
import OmMig from '../pages/OmMig.vue'
import RSOK from '../pages/RSOK.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/kontakt', name: 'Kontakt', component: Kontakt },
   { path: '/omMig', name: 'OmMig', component: OmMig },
   { path: '/rsok', component: RSOK },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
