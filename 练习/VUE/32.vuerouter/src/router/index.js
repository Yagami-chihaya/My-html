import { createRouter, createWebHistory } from 'vue-router'
import host from '../components/host.vue'

const routes = [
  {
    path:'/',
    redirect:'/host'     //重定向
  },
  
  {
    path: '/host',
    name: 'host',
    component: host
  },
  {
    path: '/text',
    name: 'text',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/text.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode:'history', //取消url的hash,但似乎把createWebHashHistory改成createWebHistory才有用,
  linkActiveClass:"active11"  //更改活跃标签的class名

})

export default router
