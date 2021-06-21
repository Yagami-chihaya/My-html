<template>
  <div>
    <h2>vue打包的推荐写法</h2>
    <button @click='btnClick'>click Me!</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello123'
    }
  },
  methods: {
    btnClick(){
      console.log('我被点了~~');
      console.log(this.msg);
    }
  },

}
</script>

<style scoped>
  h2{
    color:yellowgreen
  }
</style>
