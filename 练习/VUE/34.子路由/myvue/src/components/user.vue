<template>
  <div>
    <h2>用户</h2>
    
  </div>
</template>

<script>
export default {
  el: '',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  meta:{
    title:'用户信息'
  },
  created(){
    console.log('created');
    
    //document.title = '用户信息'
    
  },
  unmounted(){       //destroyed已废弃
    console.log('destroyed');
  },
  activated(){
    console.log('user activated');
    //this.$router.push(this.path)
  },
  deactivated(){
    console.log('user deactivated');
  },
  beforeRouteLeave(to,from,next){
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  }
  /*
  mounted(){
    console.log('已挂载');
    
  }*/

}
</script>

<style scoped>

</style>
