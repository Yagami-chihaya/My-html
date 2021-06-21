<template>
  <div id="nav">
    <router-link :to="{path:'/home',query:{name:'yagamichihaya'}}" >Home</router-link> 
    

    <router-link :to="{path:'/user/'+user,query:{name:'qiaoyang',age:'18',gendar:'male'}}" >User</router-link>
    <p>{{userId}}</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.gendar}}</p>
    <p>{{$route.query.age}}</p>
    
    <!--下面使用keep-alive会报错-->
    <!--<keep-alive>
      <router-view/>
    </keep-alive>-->
    <router-view v-slot="{ Component }">
      <keep-alive>
      <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  
  
</template>
<script>
export default {
  data(){
    return {
      user:'chihaya'
    }
    
  },
  computed:{
    userId(){
      
      return this.$route.params.userId
    }
  },


  created(){
    console.log('created');
    this.$router.push('/home')
    document.title = 'qiaoyang~~'
  },
  mounted(){
    console.log('挂载完成');
  },
  updated(){
    console.log('已更新');
  },
  
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.active{
  
}
</style>
