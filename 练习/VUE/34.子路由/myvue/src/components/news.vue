<template>
  <div>
    <li>aa</li>
    <li>bb</li>
    <li>cc</li>
    <li>dd</li>
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
    title:'新闻'
  },
  
  created(){
    console.log('created');
    //document.title = '新闻'
  },
  
}
</script>

<style scoped>
  li{
    color: palegreen;
  }
</style>
