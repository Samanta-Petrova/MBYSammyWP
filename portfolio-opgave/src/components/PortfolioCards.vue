<script>
export default {
  name: "PortfolioPreview",
  data() {
    return {
      cards: [
        {
          image: require("@/assets/Photos/IMG_0068.JPG"),
          title: "Rold Skov <br /> Orienteringsklub",
          description:
            "I Rold Skov ligger lokalerne til Rold Skov Orienteringsklub...",
        },
        {
          image: require("@/assets/Photos/IMG_0068.JPG"),
          title: "Rold Skov <br /> Orienteringsklub",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        },
      ],
    };
  },
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
          <img class="pointer" :src="starImage" alt="" />

          />
        </a>
      </div>
    </div>
  </section>

</template>



<style scoped>

</style>
