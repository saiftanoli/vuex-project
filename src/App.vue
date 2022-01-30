<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <shope-one  />
    <shop-two />

  </div>
</template>

<script>
import ShopeOne from './components/ShopeOne.vue'
import ShopTwo from './components/shopTwo.vue'

export default {
  name: 'App',
  components: {
    ShopeOne,
    ShopTwo
    
  }
}
</script>

