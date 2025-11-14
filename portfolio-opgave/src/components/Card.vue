
<script>
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
        {{ card.caption }} <i class="fa-solid fa-chevron-right"></i>
      </p>
    </div>
    <div class="flip-card-bagside">
      <p>{{ card.description}}</p>
    </div>
  </component>
</template>

<style scoped>
/* */
</style>
