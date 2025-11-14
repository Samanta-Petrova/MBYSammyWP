<script>
import NavHeader from './components/Header.vue' 
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavHeader,
    Footer
  }
}

</script>

<template>
  <div id="app">
    <NavHeader />
    <router-view />
  </div>

  <Footer/>
</template>





<style>
/**/
</style>
