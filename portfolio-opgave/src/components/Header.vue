
<script>
export default {
  name: "NavHeader",
  props: {
    background: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      links: [
        { text: "Forside", href: "/" },
        { text: "Portfolio", href: "/portfolio" },
        { text: "Om Mig", href: "/OmMig" },
        { text: "Kontakt", href: "/kontakt" },
      ],
    };
  },
};
</script>

<template>
  <header>
    <nav>
      <ul :class="background ? 'navConteiner' : 'navConteinerUBG'">
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link.href">{{ link.text }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>



<style scoped>

/* */
</style>
