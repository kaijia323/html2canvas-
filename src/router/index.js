import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/home')
  },
  {
    name: 'areaSelect',
    path: '/areaSelect',
    component: () => import('@/views/areaSelect')
  },
  {
    name: 'html2canvas',
    path: '/html2canvas',
    component: () => import('@/views/html2canvas')
  },
  {
    name: 'testDemo',
    path: '/testDemo',
    component: () => import('@/views/testDemo')
  },
  {
    name: 'printDemo',
    path: '/printDemo',
    component: () => import('@/views/printDemo')
  }
]

const router = new VueRouter({
  routes
})

export default router
