<script>
export default {
  name: "PortfolioPreview",
  data() {
    return {
      cards: [
        {
          image: "/img/RSOK.jpg",
          title: "Rold Skov <br /> Orienteringsklub",
          description:
            "I Rold Skov ligger lokalerne til Rold Skov Orienteringsklub...",
            link
        },
        {
          image: "/img/DesignCase.jpg",
          title: "Design Case <br /> Branding",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        }
      ],
      starImage: "/img/TheStarVenstre.png"
    };
  }
};
</script>

<template>
  <section class="portfolioSektion BackgroundColorGreen">
    <h2 class="Overskrift">Nyeste cases</h2>
    <div class="cardsSektion">
      <div class="flip-card" v-for="(card, index) in cards" :key="index">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="card.image" alt="Case billede" />
            <h2 v-html="card.title"></h2>
            <p class="Lillecaption">
              Kør musen over mig <i class="fa-solid fa-chevron-right"></i>
            </p>
          </div>
          <div class="flip-card-bagside">
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
      <div class="SeeMere">
        <p>See mere her <i class="fa-solid fa-chevron-right"></i></p>
        <a href="/portfolio">
          <img class="pointer" :src="starImage" alt="Se mere stjerne" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Leave empty if you're using global style.css */
</style>
