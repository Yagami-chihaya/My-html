<template>
  <div id='app'>
    <router-view></router-view>
    <tabbar>
      <tabbaritem path="/home">    
        
        <template v-slot:item-img>
          <img src="./assets/img/tabBar/首页-选中.png">
        </template>
        <template v-slot:item-text>
          <p>首页</p>
        </template>
        
        
      </tabbaritem>
      <tabbaritem path="/category">    
        
          <template v-slot:item-img>
            <img src="./assets/img/tabBar/分类.png">
          </template>
          <template v-slot:item-text>
            <p>分类</p>
          </template>
      
        
      </tabbaritem>
      <tabbaritem path="/cart">    
        
          <template v-slot:item-img>
          <img src="./assets/img/tabBar/购物车.png">
        </template>
        <template v-slot:item-text>
          <p>购物车</p>
        </template>
        
        
      </tabbaritem>
      <tabbaritem path="/profile">    
        

      
        <template v-slot:item-img>
          <img src="./assets/img/tabBar/我的.png">
        </template>
        <template v-slot:item-text>
          <p>我的</p>
        </template>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from './components/tabbar/TabBar.vue'
import tabbaritem from './components/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components: {
    tabbar,
    tabbaritem
  }
}
</script>

<style>
@import url('./assets/css/base.css');



</style>
