import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    redirect:'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../components/home.vue')        //懒加载,用户使用该组件时才会加载
  },
  {
    path: '/user/:userId',      //动态绑定
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ()=>import('../components/user.vue')
  },
  {
    path:'/test',
    name:'test',
    component:()=>import('../components/test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass:'Active'
})

export default router
