
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
.navConteiner {
  display: flex;
  justify-content: end;
  text-align: center;
  gap: 2rem;
  padding-right: 4rem;
  padding: 20px;

}

.navConteiner li {
  list-style-type: none;
  padding: 1.3rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  align-items: end;
  background-color: var(--KnappeGreen);
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
