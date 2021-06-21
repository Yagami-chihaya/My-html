<template>
  <div>
    <h2>欢迎回来！</h2>
    <router-link to='/home/news' >新闻</router-link>
    <router-link to='/home/info' >消息</router-link>
    
    <router-view></router-view>
    
    
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      path:'/home/news'
    }
  },
  methods: {

  },
  meta:{
    title:'首页'
  },
  
  created(){
    console.log('created');
    this.$router.push('/home/news')
    console.log(this);
    //document.title = '首页'
  },
  
  activated() {
    console.log('home activated');
    
    
    this.$router.push(this.path)            //当加载home组件时自动载入path路径的子组件
  },
  deactivated(){
    console.log('home deactivated');
  },
  beforeRouteLeave(to,from,next){
    console.log(this.$route.path);
    this.path = this.$route.path         //保存当前子组件的痕迹，便于下次加载home组件自动载入
    next()
  }
}
</script>

<style scoped>
  h2{
    color:orchid
  }
  a{
    text-align: center;
    font-size: 10px;
    text-decoration: none;
    padding: 5px;
  }
</style>
