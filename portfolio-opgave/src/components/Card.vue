
<script>
// Denne del definere en vue komponent der bliver importeret og brugt i andre side/komponentr 
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      required: true
    }
  }
};
</script>
<template>
  <component
    :is="card.route ? 'router-link' : 'div'"
    :to="card.route"
    class="card-link flip-card-inner"
  >
    <div class="flip-card-front card">
      <img :src="card.image" alt="Case billede" />
      <h2 v-html="card.title"></h2>
      <p class="Lillecaption">
        {{ card.caption }}
      </p>
    </div>
    <div class="flip-card-bagside">
      <p>{{ card.description}}</p>
    </div>
  </component>
</template>

<style scoped>
/* Styling i styling.css*/
</style>
