<script>
import Card from './Card.vue';

export default {
  name: "PortfolioCards",
  components: {
    Card
  },
  data() {
    return {
      activeTab: "webdesign",
      webdesignCards: [
        {
          image: "/img/RSOK.jpg",
          title: "Rold Skov <br /> Orienteringsklub",
          caption: "Kør musen over mig ",
          description:
            "I Rold Skov ligger lokalerne til Rold Skov Orienteringsklub...",
          route: "/rsok"
        },
        {
          image: "/img/AaKFUM.jpg",
          title: "KFUM Aalborg",
          caption: "Kør musen over mig ",
          description:
            "KFUM Aalborg er en ungdomsorganisation med fokus på fællesskab og aktiviteter.",
          route: "/kfum"
        }
      ]
    }
  }
}
</script>


<template>
  <section class="portfolioSektion BackgroundColorGreen card-section ">
      
      <h2 class="Overskrift">Nyeste cases</h2>
      <div class="card-grid">
       <div class="flip-card" v-for="(card, index) in webdesignCards" :key="index">
        <Card :card="card" />
      </div>
        <router-link to="/portfolio">
          <img class="PointerStar" src="/img/StarWTekst.png" alt="Se mere stjerne" />
        </router-link>
      </div>
    </section>
</template>


<style scoped>
/* */
</style>
