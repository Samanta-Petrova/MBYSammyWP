
 <!-- App.vue -->
<template>
  <div id="app">
    <NavHeader />
    <router-view />
  </div>
</template>



<script>
import NavHeader from './components/Header.vue' // sørg for stien er korrekt

export default {
  name: 'App',
  components: {
    NavHeader
  }
}
</script>

<style>
/**/
</style>
