import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  /*{
    path:'/',
    redirect:'/home',
    meta:{
      title:'首页'
    }
  },*/
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/home.vue'),
    children:[
      
      /*{
        path:'/home',
        redirect:'/home/news'
      },*/
      {
        path:'/home/news',
        name:'新闻',
        component:() => import('../components/news.vue'),
        meta:{
          title:'新闻'
        }
      },
      {
        path:'/home/info',
        component:() => import('../components/info.vue'),
        meta:{
          title:'信息'
        }
      }
    ]
  },
  {
    path: '/user/:userId',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/user.vue'),
    meta:{
      title:'用户信息'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass:'active'
})

router.beforeEach((to,from,next)=>{       //eforEach其实是vur-router的钩子函数，可以理解为每个router跳转之前都会调用的一个方法
  document.title = to.meta.title     //事实证明使用路由的name属性同样可以更改标题
  //document.title = to.name
  next()
})
/*
router.afterEach((to,from,next)=>{
  confirm(`确定要离开${from.meta.title}吗`)     
  next()
})*/

export default router
