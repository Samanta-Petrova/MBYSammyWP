<script setup>
import { ref, onMounted } from 'vue'
import PortfolioCards from "../components/PortfolioCards.vue"

// Refs for each card stack
const cardStackMusik = ref(null)
const cardStackRejse = ref(null)
const homeCards = ref([]) // or populate with actual card data


// Function to apply card flipping logic to a stack
const setupCardStack = (stackRef) => {
  if (!stackRef.value) {
    console.error('card-stack ikke fundet i DOM - check HTML.')
    return
  }

  const handleClick = () => {
    const topCard = stackRef.value.querySelector('.photo-card')
    if (!topCard) return

    topCard.classList.add('moving')

    setTimeout(() => {
      topCard.classList.remove('moving')
      stackRef.value.appendChild(topCard)
    }, 520)
  }

  stackRef.value.addEventListener('click', handleClick)

  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowRight' || ev.key === ' ') {
      handleClick()
    }
  })
}

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
              alt=""
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
            alt=""
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
                alt=""
              />
              <h2 class="caption">Post Malone</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card">
              <img class="musikogrejse"
                src="/img/Gobs.JPG"
                alt=""
              />
              <h2 class="caption">Gobs</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card">
              <img class="musikogrejse"
                src="/img/Gilli.JPG"
                alt=""
              />
              <h2 class="caption">Gilli</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card">
              <img class="musikogrejse" src="/img/UAK.JPG" alt="" />
              <h2 class="caption">Ud af Kontrol</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>
          </div>
        </div>
      </section>
      <section class="RejseSection">
        <div class="RejserMedBilleder">
          
          <div class="card-stack" ref="cardStackRejse">
            <div class="photo-card-ROM">
              <img
                src="/img/Sigulda.jpeg"
                alt=""
              />
              <h2 class="caption">Letland</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card-ROM">
              <img
                src="/img/Tyrkiet1.jpeg"
                alt=""
              />
              <h2 class="caption">Tyrkiet</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card-ROM">
              <img
                src="/img/Rhodos.jpeg"
                alt=""
              />
              <h2 class="caption">Grækenland</h2>
              <p class="Lillecaption">Tryk på mig</p>
            </div>

            <div class="photo-card-ROM">
              <img src="/img/Tyrkiet2.jpeg" alt="" />
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
      <section><PortfolioCards :cards="homeCards" /></section>
    </main>
</template>

<style scoped>

</style>




