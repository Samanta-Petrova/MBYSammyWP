<script>
import Card from '../components/Card.vue';

export default {
  name: "Portfolio",
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
            "I Rold Skov ligger lokalerne til Rold Skov Orienteringsklub (herefter RSOK), som er en aktiv orienteringsløbeklub. Klubben har en stærk tilknytning til den naturskønne skov og tilbyder aktiviteter, der kombinerer motion, mental udfordring og socialt fællesskab.",
          route: "/rsok"
        },
        {
          image: "/img/AaKFUM.jpg",
          title: "KFUM Aalborg",
          caption: "Kør musen over mig ",
          description:
            "KFUM Aalborg er en ungdomsorganisation med fokus på fællesskab og aktiviteter.",
          route: "/kfum"
        },
        {
          image: "/img/MagiskJul.jpg",
          title: "Magnus Bonde <br/> League of Legends",
          caption: "Kør musen over mig ",
          description:
            "Jeg har udviklet en portfolioside for en semi-professionel League of Legends-spiller. Formålet med projektet var at skabe en overskuelig og brugervenlig platform, hvor besøgende nemt kunne finde alle relevante informationer om spilleren.",
          route: "/magnus"
        },
        {
          image: "/img/MagiskJul.jpg",
          title: "Blokhus<br/>Magisk jul",
          caption: "Kør musen over mig ",
          description:
            "En moderne app designet til at forbedre brugeroplevelsen.",
          route: "/ny-app"
        }
      ],
      grafiskCards: [
        {
          image: "/img/IMG_0068.JPG",
          title: "Plakatdesign",
          caption: "Kør musen over mig",
          description:
            "Et kreativt plakatdesign til en lokal begivenhed."
        },
        {
          image: "/img/IMG_0068.JPG",
          title: "Logo koncept",
          caption: "Kør musen over mig",
          description:
            "Et minimalistisk logo designet til en startup."
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
      
          <img class="pointer" src="/img/SratWhistle.png" alt="" />
       
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
  <div
    v-for="(card, index) in webdesignCards"
    :key="index"
    class="flip-card"
  >
    <Card :card="card" />
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
  </main>
</template>


<style scoped>
/* your styles here */
</style>



