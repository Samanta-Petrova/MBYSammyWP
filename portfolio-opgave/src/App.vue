<template>
  <div id="app">
    <NavHeader />      <!-- Header vises altid -->
    <router-view />    <!-- Vue Router viser den aktuelle side her -->
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
/* evt. global styling her */
</style>
