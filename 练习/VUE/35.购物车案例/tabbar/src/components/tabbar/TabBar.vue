<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
    
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
  
}
</script>

<style scoped>
  #tab-bar{
  
  display: flex;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  background-color: #dddddd;
}

  
</style>
