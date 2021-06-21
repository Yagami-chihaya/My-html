<template>
  <div>
    <h2>暂无消息！</h2>
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
    title:'消息'
  },
  
  created(){
    console.log('created');
   // document.title = '消息'
  }
}
</script>

<style scoped>
  h2{
    color: purple;
  }
</style>
