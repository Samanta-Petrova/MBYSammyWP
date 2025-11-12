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

<style scoped>
h1, h2, h3, h4, h5, h6 {
font-family: "Fascinate", system-ui;
    font-weight: 400;
    font-style: normal;
}
.navConteiner {
  display: flex;
  gap: 2rem;
  justify-content: end;
  padding-right: 4rem;
}

.navConteiner li {
  list-style: none;
  padding: 1rem 2rem;
  background-color: var(--KnappeGreen);
  border-radius: 30px;
}

.navConteiner a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}
</style>
