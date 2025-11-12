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
            link: "/rsok"
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
      <div v-for="(card, index) in cards" :key="index">
        <router-link
          v-if="card.link"
          :to="card.link"
          class="flip-card card-link"
        >
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
        </router-link>

        <div
          v-else
          class="flip-card"
        >
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
      </div>

      <div class="SeeMere">
        <p>See mere her <i class="fa-solid fa-chevron-right"></i></p>
        <router-link to="/portfolio">
          <img class="pointer" :src="starImage" alt="Se mere stjerne" />
        </router-link>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* mulig css */
</style>
