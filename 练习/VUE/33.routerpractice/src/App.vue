<template>
  <div id="nav">
    <router-link to="/home" replace>Home</router-link> 
    <router-link :to="'/user/'+user1" replace>user</router-link>
    <router-link to='/test' replace>test</router-link>
    <p>{{userId}}</p>
  </div>
  <router-view/>
</template>
<script>
export default {
  data(){
    return{
      user1:'zhangsan'
    }
  },
  computed:{
    userId(){
      console.log(this);
      return this.$route.params.userId        //$route指向当前活跃路由
      
    }
  }
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
</style>
