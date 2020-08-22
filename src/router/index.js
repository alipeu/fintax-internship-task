import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// routing using path variables
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/Table.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../views/Calculator.vue')
  },
  {
    path: '/query',
    name: 'Query',
    component: () => import('../views/Query.vue')
  },
  {
    path: '/query_page',
    name: 'Query Page',
    component: () => import('../views/QueryPage.vue')
  },
  {
    path: '/api',
    name: 'API',
    component: () => import('../views/API.vue')
  },
  {
    path: '/storage',
    name: 'Local Storage',
    component: () => import('../views/LocalStorage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// navigation guard - global before hooks
router.beforeEach((to, from, next) => {
  if (to.path === '/shhh') {
    next('/')
  }
  else {
    next()
  }
})

export default router
