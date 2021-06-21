<template>
  <div id="nav">
    <router-link to="/host" replace>host</router-link> 
    <router-link to="/text" replace>text</router-link>
    <button @click='hostclick'>HOST</button>
  </div>
  <router-view/>
</template>

<script>
export default {
  
  methods:{
    hostclick(){
      console.log('被点了');
      this.$router.push('/host')      //设置点击跳转
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
