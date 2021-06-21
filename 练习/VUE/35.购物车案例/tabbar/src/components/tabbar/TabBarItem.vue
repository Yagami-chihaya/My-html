<template>
  
    
  <div class="tab-bar-item" @click='itemClick'>
    
      <slot name='item-img'></slot>      <!--插槽最终会被替换，所以在插槽里面定义属性是没有用的-->
      <div :style='isActivated ? {color:this.activeColor}:{}'>            <!--解决办法是用标签包装要定义的插槽-->
        <slot name='item-text'></slot>
      </div>
    
    
  </div>
  
</template>

<script>
export default {
  el: '',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'hotpink'
    }
  },
  data () {
    return {
      
      
    }
  },
  computed:{
    isActivated(){
      return this.$route.path == this.path
    }
  },
  methods: {
    
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style> /*这里scoped一定不能使用，会导致template里标签样式不生效*/ 
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px; /*选项卡一般高度*/ 
  }
  .tab-bar-item img{
    width: 28px;
    height: 28px;
    opacity: 0.3;
  }
  .tab-bar-item img:hover{
    opacity: 1;
    widows: 28px;
    height: 28px;
  }
  .tab-bar-item p{
    
    font-size: 8px;
    font-weight: 300;
    
  }
  
  
</style>
