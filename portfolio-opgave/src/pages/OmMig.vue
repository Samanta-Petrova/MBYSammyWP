<script setup>
// Importerer variabler som er min compunent 
import { ref, onMounted } from 'vue'
import PortfolioCards from "../components/PortfolioCards.vue"

// Refs for each card stack
const cardStackMusik = ref(null)
const cardStackRejse = ref(null)


// En hjælpefunktion, der får en card-stack ref og tilføjer interaktionslogik.
const setupCardStack = (stackRef) => {
  //Sikrer at card-stacken eksisterer i DOM’en og logger en fejl hvis HTML ikke matcher 
  if (!stackRef.value) {
    console.error('card-stack ikke fundet i DOM - check HTML.')
    return
  }

  const handleClick = () => {
    const topCard = stackRef.value.querySelector('.photo-card')
    if (!topCard) return
// finder det øveste kort i stakken ved brug af .photo-card
//Den stopper hvis der ikke findes en kort 
    topCard.classList.add('moving')
//Tilføjer en css klasse der tarter en animation - moving 
    setTimeout(() => {
      topCard.classList.remove('moving')
      stackRef.value.appendChild(topCard)
    }, 520)
  }
//Normalvis ville man ikke bruge eventlistener i vueman ville normalvis bruge noget i stil med @cklick eller @keydown men det virkede ikke og ingen chat botter hjalp
// men det tilføjer event der hedder click så stakken bliver klickbar
 stackRef.value.addEventListener('click', handleClick) 

//
}
//Når kompunenten er fuldt mounted (betyder at det er færdig opsat i html) inden flip funktionen for begge stakke bliver opsat
onMounted(() => {
  setupCardStack(cardStackMusik)
  setupCardStack(cardStackRejse)
})

</script>




<template>
   <main>
      <section class="OmMigintro">
        <div class="introSektion">
          <div class="lilleBoks infoSektion">
            <h1 class="Overskrift">Om mig</h1>
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
              alt="Profil billede"
              class="CardBillede"
            />
            <h2>Samanta Petrova</h2>
            <p>Ux/Ui og grafisk designer</p>
          </div>
        </div>
      </section>
      <section class="FremtidsSection backgroundColorBeige">
        <div class="planerFremtid">
          <img
            class="OMStjerne"
            src="/img/ThestaropenArms.png"
            alt="Stjerne maskot med åbne arme "
          />
          <p>
            Jeg har store planer for min fremtid, hvor jeg drømmer om at
            udforske arbejdsmarkedet inden for grafisk design og
            multimediedesign. På sigt vil jeg gerne prøve kræfter med livet som
            freelance-designer og arbejde fra min egen kreative vinkel.
            <br />
            Jeg har mange interesser og elsker at prøve nye ting. Nogle af mine
            yndlingshobbyer er at tegne, lave illustrationer og tage poloroid
            billeder.
          </p>
        </div>
      </section>
      <section class="MusikSection">
        <div class="MusikMedBilleder">
          <div class="MusikTekst">
            <p>
              Musik spiller en central rolle i mit liv, den hjælper mig både med
              at koncentrere mig og med at koble af efter en lang dag. Jeg
              elsker også at tage til koncerter med venner, fordi jeg nyder den
              særlige stemning og energi, man kun oplever live.
            </p>
          </div>
          <div class="card-stack" ref="cardStackMusik">
            <div class="photo-card">
              <img class="musikogrejse"
                src="/img/PostMalone1.JPEG"
                alt=" Billede fra Post Malone koncert"
              />
              <h2 class="caption">Post Malone</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card">
              <img class="musikogrejse"
                src="/img/Gobs.JPG"
                alt="Billede fra Gobs koncert"
              />
              <h2 class="caption">Gobs</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card">
              <img class="musikogrejse"
                src="/img/Gilli.JPG"
                alt="Billede fra Gilli koncert"
              />
              <h2 class="caption">Gilli</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card">
              <img class="musikogrejse" src="/img/UAK.JPG" alt="Billede fra Ud af Kontrolkoncert" />
              <h2 class="caption">Ud af Kontrol</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>
          </div>
        </div>
      </section>
      <section class="RejseSection">
        <div class="RejserMedBilleder">
          
          <div class="card-stack" ref="cardStackRejse">
            <div class="photo-card">
              <img
                src="/img/Sigulda.jpeg"
                alt="Byen Sigulda i Letland "
              />
              <h2 class="caption">Letland</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card">
              <img
                src="/img/Tyrkiet1.jpeg"
                alt="Billede af tyrkiet"
              />
              <h2 class="caption">Tyrkiet</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card">
              <img
                src="/img/Rhodos.jpeg"
                alt="Billede af grækenland"
              />
              <h2 class="caption">Grækenland</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card">
              <img src="/img/Tyrkiet2.jpeg" alt="Billede af tyrkiet" />
              <h2 class="caption">Tyrkiet</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>
          </div>
          <div class="RejseTekst">
            <p>
              Jeg elsker at rejse, fordi det er utrolig spændende at opleve noget nyt og se, hvordan mennesker lever i andre lande. Hver rejse giver mig nye indtryk og inspiration. Samtidig betyder det meget for mig at vende tilbage til Letland, som er mit hjemland – der føler jeg mig altid hjemme, uanset hvor længe jeg har været væk.
            </p>
          </div>
        </div>
      </section>
      <!-- her bruges den importerede komponent-->
    </main>
</template>

<style scoped>
/* Det meste af min css er i style.css */
</style>




