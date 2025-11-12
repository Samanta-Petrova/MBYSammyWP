<script>
export default {
  name: "Portfolio",
  data() {
    return {
      activeTab: "webdesign",
      webdesignCards: [
        {
          image: "/img/RSOK.jpg",
          title: "Rold Skov <br /> Orienteringsklub",
          caption: "Kør musen over mig 1",
          description:
            "I Rold Skov ligger lokalerne til Rold Skov Orienteringsklub...",
        },
        {
          image: "/img/MagiskJul.jpg",
          title: "Magisk jul",
          caption: "Kør musen over mig 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        }
      ],
      grafiskCards: [
        {
          image: "/img/IMG_0068.JPG",
          title: "Rold Skov <br /> Orienteringsklub",
          caption: "Kør musen over mig",
          description:
            "I Rold Skov ligger lokalerne til Rold Skov Orienteringsklub...",
        },
        {
          image: "/img/IMG_0068.JPG",
          title: "Rold Skov <br /> Orienteringsklub",
          caption: "Kør musen over mig",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        }
      ]
    };
  }
};
</script>



<template>
  <main>
    <section class="portfolioSection">
      
      <div class="portfolioSide">
        <div class="GrønBoks">
          <h2 class="GrønBoksOverskrift">Portfolio</h2>
          <p>
            Velkommen til min portfolio. Her kan du få indblik i mine projekter
            som multimediedesignstuderende og grafisk designer, hvor jeg
            arbejder med Ux/Ui - og front-end design.
          </p>
        </div>
        <div class="star">
          <img src="/img/ThePointingStar.png" alt="" />
        </div>
      </div>
    </section>

    <section class="PortfolioTaps">
      <!-- Tabs -->
      <div class="tab-container">
        <button
          class="tab-button"
          :class="{ active: activeTab === 'webdesign' }"
          @click="activeTab = 'webdesign'"
        >
          Web design
        </button>
        <button
          class="tab-button"
          :class="{ active: activeTab === 'grafisk' }"
          @click="activeTab = 'grafisk'"
        >
          Grafisk Design
        </button>
      </div>

      <!-- Webdesign content -->
      <div
        id="webdesign"
        class="portfolioSektion card-grid tab-content"
        v-show="activeTab === 'webdesign'"
      >
        <div class="flip-card" v-for="(card, index) in webdesignCards" :key="index">
          <div class="flip-card-inner">
            <div class="flip-card-front card">
              <img :src="card.image" alt="Case billede" />
              <h2 v-html="card.title"></h2>
              <p class="Lillecaption">
                {{ card.caption }} <i class="fa-solid fa-chevron-right"></i>
              </p>
            </div>
            <div class="flip-card-bagside">
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Grafisk Design content -->
      <div
        id="grafisk"
        class="portfolioSektion card-grid tab-content"
        v-show="activeTab === 'grafisk'"
      >
        <div class="flip-card" v-for="(card, index) in grafiskCards" :key="index">
          <div class="flip-card-inner">
            <div class="flip-card-front card">
              <img :src="card.image" alt="Case billede" />
              <h2 v-html="card.title"></h2>
              <p class="Lillecaption">
                {{ card.caption }} <i class="fa-solid fa-chevron-right"></i>
              </p>
            </div>
            <div class="flip-card-bagside">
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PortfolioCards :cards="homeCards" />

  </main>
</template>




<style scoped>
/* your styles here */
</style>



