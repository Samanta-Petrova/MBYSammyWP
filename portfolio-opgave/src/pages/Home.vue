<script>
import Card from "../components/Card.vue"

export default {
  name: "Home",
  components: {
    Card
  },
  data() {
  return {
    iconLocation: "/img/lokation.png",
    iconLinkedIn: "/img/IN.png",
    iconHtml: "/img/Html.png",
    iconCss: "/img/CSS.png",
    iconJs: "/img/JS.png",
    iconPs: "/img/PS.png",
    iconAi: "/img/AI.png",
    iconId: "/img/Id.png",

    activeTab: "webdesign",
webdesignCards: [
        {
          image: "/img/RSOK.jpg",
          title: "Rold Skov <br /> Orienteringsklub",
          caption: "Kør musen over mig ",
          description:
            "I Rold Skov ligger lokalerne til Rold Skov Orienteringsklub (herefter RSOK), som er en aktiv orienteringsløbeklub. Klubben har en stærk tilknytning til den naturskønne skov og tilbyder aktiviteter, der kombinerer motion, mental udfordring og socialt fællesskab",
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
        
        
      ]
    
  }
}

    }
</script>


export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      required: true
    }
  }
};

<template>
  <main>
    <section class="IfoForside">
      <div class="introSektion backgroundColorBeige">
        <div class="infoSektion">
          <h1 class="Overskrift">
            Hej jeg hedder <br />
            Samanta
          </h1>
          <p>
            Jeg elsker at skabe brugervenligt og gennemført digitalt design.
            Med øje for detaljer og fokus på både funktion og æstetik, hjælper
            jeg med at omsætte idéer til løsninger, der fungerer i praksis.
            Kig gerne på mit portfolio – jeg deler gerne erfaringer og idéer!
          </p>
          <p>
            Jeg er en kreativ og viljestærk designer med en stor passion for
            farver og visuel formgivning. Kreativitet er min drivkraft, og jeg
            henter ofte inspiration fra forskellige årtier, hvor jeg lader
            historiske æstetikker mødes med moderne design. Min tilgang er
            både legende og målrettet – jeg brænder for at skabe visuelt
            design, der vækker følelser, fortæller historier og giver hvert
            projekt et unikt udtryk med en stærk æstetisk identitet.
          </p>
        </div>

        <div class="ProfileCard">
          <img
              src="/img/ProfilImg.JPG"
              alt=""
              class="CardBillede"
            />
          <h2>Samanta Petrova</h2>
          <p>Ux/Ui og grafisk designer</p>
        </div>

        <div class="Introikoner">
          <div id="lokation">
            <img :src="iconLocation" alt="lokation ikon" />
            <p>Aalborg</p>
          </div>
          <div id="linkedIn">
            <img :src="iconLinkedIn" alt="LinkedIn logo" />
            <p>Linked In</p>
          </div>
        </div>
      </div>
    </section>

    <section class="kompetanceSektion">
      <h2 class="Overskrift">Kompetancer</h2>
      <p>Jeg har erfaring med webudvikling og kan arbejde med HTML, CSS, JavaScript, WordPress og Vue, hvilket gør mig i stand til at bygge både statiske og dynamiske hjemmesider.  </p>
      <p>Fra min tidligere uddannelse i grafisk design har jeg også solide kompetencer i Adobe Photoshop, Illustrator og InDesign, som jeg bruger til visuel kommunikation, grafisk layout og designopgaver.</p>
      <p>Kombinationen af tekniske og kreative færdigheder giver mig mulighed for både at udvikle funktionelle løsninger og skabe visuelt gennemarbejdede resultater.</p>
      <div class="scroll-wrapper">
        <div class="scroll-track">
          <div class="scroll-content">
          <img :src="iconHtml" alt="HTML ikon" />
          <img :src="iconCss" alt="CSS ikon" />
          <img :src="iconJs" alt="JS ikon" />
          <img :src="iconPs" alt="Photoshop ikon" />
          <img :src="iconAi" alt="Illustrator ikon" />
          <img :src="iconId" alt="InDesign ikon" />
           <img :src="iconHtml" alt="HTML ikon" />
          <img :src="iconCss" alt="CSS ikon" />
          <img :src="iconJs" alt="JS ikon" />
          <img :src="iconPs" alt="Photoshop ikon" />
          <img :src="iconAi" alt="Illustrator ikon" />
          <img :src="iconId" alt="InDesign ikon" />
          </div>
        </div>
      </div>
    </section>
    

    
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

  </main>
  <footer>
  </footer>
</template>



<style scoped>
.PointerStar{
  width: 300px;
  padding: 20px;
}
.scroll-wrapper {
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
}

.scroll-track {
  display: flex;
  width: max-content;
}

.scroll-content {
  display: flex;
  gap: 80px;
  animation: scrollLoop 30s linear infinite;
}

.scroll-content img {
  height: 100px;
  width: auto;
  flex-shrink: 0;
}

@keyframes scrollLoop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

</style>
