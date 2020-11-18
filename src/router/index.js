import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'areaSelect',
    path: '/areaSelect',
    component: () => import('@/views/areaSelect')
  },
  {
    name: 'html2canvas',
    path: '/html2canvas',
    component: () => import('@/views/html2canvas')
  }
]

const router = new VueRouter({
  routes
})

export default router
