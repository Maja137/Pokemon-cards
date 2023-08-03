import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-dio',
    component: HomeView
  },
  {
    path: '/cards',
    name: 'cards-dio',
    component: () => import('../views/CardsView.vue')
  },
  {
    path: '/newcard',
    name: 'new-dio',
    component: () => import('../views/NewCardView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
