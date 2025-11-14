

<script>
import ContactForm from '../components/Contactform.vue'

export default {
  name: "Kontakt",
  components: {
    ContactForm
  }
}
</script>

<template>
  <main>
    <section>
  <h2 class="LillaBoksOverskrift">Kontakt</h2>
  <div class="kontakt-page">
    <ContactForm />
    <img class="star" src="/img/StarJump.png" alt="Stjerne maskot der hopper">
  </div>
  </section>
</main>
</template>

<style scoped>
.kontakt-page {
  padding: 40px;
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.kontakt-page img.star {
  max-width: 40%;
  height: auto;
  margin-right: 20px;
}

main{
  background-color: #F9F6EA;
}

</style>
