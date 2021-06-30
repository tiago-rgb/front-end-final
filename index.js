import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import registar from '../components/registar.vue'
import login from '../components/login.vue'
import clube from '../components/clube.vue'
import treinador from '../components/treinador.vue'
import jogador from '../components/jogador.vue'
import estadio from '../components/estadio.vue'
import admin from '../components/admin.vue'

Vue.use(VueRouter)

// é para acrescentar as paginas

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/registar',
    name: 'registar',
    component: registar
  },
  {
    path: '/clube',
    name: 'clube',
    component: clube
  },
  {
    path: '/treinador',
    name: 'treinador',
    component: treinador
  },
  {
    path: '/jogador',
    name: 'jogador',
    component: jogador
  },
  {
    path: '/estadio',
    name: 'estadio',
    component: estadio
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/about.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
