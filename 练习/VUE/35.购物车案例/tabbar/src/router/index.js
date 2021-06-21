import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/home',
    name:'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/category',
    name:'category',
    component: () => import('../views/category/category.vue')
  },
  {
    path: '/cart',
    name:'cart',
    component: () => import('../views/cart/cart.vue')
  },
  {
    path: '/profile',
    name:'profile',
    component: () => import('../views/profile/profile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
