import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Portfolio from '../pages/Portfolio.vue'
import Kontakt from '../pages/Kontakt.vue'
import OmMig from '../pages/OmMig.vue'
import RSOK from '../pages/RSOK.vue';import KFUM from '../pages/KFUM.vue';import Magnus from '../pages/Magnus.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/kontakt', name: 'Kontakt', component: Kontakt },
  { path: '/OmMig', name: 'OmMig', component: OmMig },
  { path: '/rsok', component: RSOK },
  { path: '/kfum', component: KFUM },
  { path: '/magnus', component: Magnus },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
