

<script>
import PortfolioCards from "../components/PortfolioCards.vue";

import "../assets/style.css";


export default {
  name: "Magnus",
components: {
    PortfolioCards
  }
};
</script>


<template>


  <section class="enklOpgaveSide">
    <div class="enklOpgave" >
  <div class="GrønBoks ">
  <h2 class="GrønBoksOverskrift">Aalborg KFUM Fodbold</h2>
  
  <p>Jeg har udviklet en portfolioside for en semi-professionel League of Legends-spiller. Formålet med projektet var at skabe en overskuelig og brugervenlig platform, hvor besøgende nemt kunne finde alle relevante informationer om spilleren. På siden kunne man blandt andet se hans foretrukne roller, statistikker, tidligere hold og turneringsresultater. Derudover integrerede jeg kontaktmuligheder, så interesserede – fx teams, samarbejdspartnere eller fans – hurtigt kunne komme i kontakt med ham.
Projektet fokuserede både på funktionalitet, design og brugeroplevelse, og jeg arbejdede med at skabe et visuelt udtryk, der afspejlede gamingmiljøets æstetik, samtidig med at det fremstod professionelt og let at navigere i.
    </p>
  </div>
  
<img class="pointer" src="/img/The-star-piont-down.png" alt="">
</div>
  </section>
  <section class="PortfolioTaps">
  <!-- Tabs -->
  <div class="tab-container">
    <button
      class="tab-button"
      :class="{ active: activeTab === 'problem' }"
      @click="activeTab = 'problem'"
    >
      Problem
    </button>
    <button
      class="tab-button"
      :class="{ active: activeTab === 'research' }"
      @click="activeTab = 'research'"
    >
      Research
    </button>
    <button
      class="tab-button"
      :class="{ active: activeTab === 'analyse' }"
      @click="activeTab = 'analyse'"
    >
      Analyse
    </button>
    <button
      class="tab-button"
      :class="{ active: activeTab === 'design' }"
      @click="activeTab = 'design'"
    >
      Design
    </button>
    <button
      class="tab-button"
      :class="{ active: activeTab === 'produkt' }"
      @click="activeTab = 'produkt'"
    >
      Produkt
    </button>
    <button
      class="tab-button"
      :class="{ active: activeTab === 'kode' }"
      @click="activeTab = 'kode'"
    >
      Kode
    </button>
  </div>

  <!-- Tab Content -->
  <div v-show="activeTab === 'problem'" class="tab-content problemsektion">
    <h2 class="Overskrift">Problem</h2>
    <p>lubben har et brændende ønske om at beholde sine nuværende medlemmer og rekruttere nye, men det kan være svært når man konkurrerer med mange andre fodboldklubber i storbyen. Kan det have at gøre med, at det første et nyt medlem møder, er en hjemmeside, som ligner alle andre? 
 </p>

    <p>Klubbens hjemmeside er opsat på DBU’s KlubOffice, som er en platform rigtig mange andre klubber bruger. Platformen er en nem måde, hvorpå klubberne kan opsætte en hjemmeside, uden at skulle have en ansat med meget baggrundsviden inden for faget. Den begrænser dog muligheden for at personliggøre sin hjemmeside da der bruges en standard skabelon. </p>

    <p>På nuværende tidspunkt møder medlemmerne en lettere uoverskuelig hjemmeside, som nok et eller andet sted minder om noget fra 00’erne. Hjemmesidens indhold er placeret kompakt, og når der er meget indhold kan det hurtigt virke rodet. 
</p>
    <div class="problemetKFUM">
    <img src="/img/KFUMproblem.png
    " alt="">
    
    </div>
  </div>

  <div v-show="activeTab === 'research'" class="tab-content ">
    <h2 class="Overskrift">Research</h2>
    <p>Hjemmesiden skal kunne bruges af alle aldersgrupper, men projektet fokuserer på børnefamilier, da klubben ønsker at appellere til denne målgruppe. Derfor laves brugerundersøgelser med udgangspunkt i forældrene, som forventes at være de primære brugere af hjemmesiden. De bruger siden til tilmelding, information om træning og kampe samt nyheder. </p>
    <p>Der udarbejdes en segmentering ud fra både objektive og subjektive kriterier for at forstå forældrenes behov og adfærd. Hypoteser testes gennem desk research, og ved behov suppleres med yderligere undersøgelser.</p>
    <p>For at uddybe indsigterne gennemføres semistrukturerede kvalitative interviews med forældre. Interviewene optages, transskriberes og analyseres tematisk for at finde fællestræk. Analysen viser, at forældre vægter, at børnene går til fodbold for det sociale fællesskab og fordi vennerne også spiller.</p>
    <p>Derudover forventer forældrene, at trænerne er pædagogiske, og at klubben er inkluderende, så alle børn trives – uanset niveau.
</p>
<p>De gennemgående temaer fra interviewene skal danne grundlag for den videre udvikling af hjemmesiden, så den afspejler brugernes behov og værdier.</p>

  </div>

  <div v-show="activeTab === 'analyse'" class="tab-content">
    <h2 class="Overskrift">Analyse</h2>
    <p>
  I det videre arbejde skal hjemmesiden udvikles med udgangspunkt i forældrenes udsagn fra interviewene. Selvom kun seks forældre blev interviewet, viser resultaterne tydelige fællestræk og behov, som bør afspejles i designet.
</p>
<p>Der udarbejdes et Empathy Map for hver deltager, hvor svarene opdeles i Think, Do, Say, Feel samt Pains og Gains. Denne metode giver indsigt i brugernes tanker, følelser, frustrationer og ønsker. Analysen afsluttes med User Need Insights, som opsummerer de vigtigste behov – især ønsket om, at børnene skal være en del af et socialt fællesskab.</p>

<img id="EMHele" src="/img/EmpathyMapHELE.png
" alt="">
<div class="EmpatyMap">
  <img src="/img/Gains.png" alt="">
  <img src="/img/Pains.png" alt="">
</div>
  </div>

  <div v-show="activeTab === 'design'" class="tab-content">
    <h2 class="Overskrift">Design</h2>
    <h3>Skitser</h3>
    <p>Der arbejdes med skitser som et visuelt værktøj til at eksperimentere med forskellige placeringer af elementer som navigation, indhold og call-to-action-knapper. Skitserne er enkle og hurtigt producerede, hvilket gør det nemt at afprøve idéer. De anvendes også til at præsentere konceptet på papir og sikre, at idéen stemmer overens med ønsket om en enkel og overskuelig løsning i projektet.</p>
    <div class="skitser">
    <img src="/img/RSOKSkitse1.png" alt="">
    <img src="/img/RSOKSkitse1.png" alt=""></img>
    </div>
    <h3>Wireframes</h3>
    <p>Der anvendes wireframes, som er en mere detaljeret og struktureret version af skitsen. Wireframes definerer de primære elementer og funktioner på siden uden at fokusere på visuelle detaljer som farver, skrifttyper og billeder.</p>
    <div class="skitser">
      <img src="/img/RSOKWF1.png" alt="">
      <img src="/img/RSOKWF2.png" alt="">
    </div>
  </div>

  <div v-show="activeTab === 'produkt'" class="tab-content">
    <h2 class="Overskrift">Produkt</h2>
    <p>Ved at arbejde med disse metoder er der opnået et resultat, der resulterer i en mere overskuelig og brugervenlig side. Dette gør det nemmere og hurtigere for brugeren at finde de nødvendige informationer. Det overordnede design er blevet simplere, samtidig med at virksomhedens identitet og værdier er bevaret.</p>
    <div class="skitser">
      <img src="/img/RSOKProdukt1.png" alt="">
      <img src="/img/RSOKProdukt2.png" alt="">
    </div>
  </div>
</section>
<section><PortfolioCards :cards="homeCards" /></section>

</template>

<style scoped>
.problemsektion{
  display: block;
  padding:20px;
}
.problemsektion img{
  padding: 20px;
}
.blomstG{
  width: 30px;
  padding: 10px;
}
.liste ul {
  list-style-type: none;
  padding: 10px;
    justify-content: center;
  align-items: center;
}
.liste li {
  display: flex;
  align-items: center;
  gap: 10px; 
  margin-bottom: 10px;
}
h3 {
  color: #817696;
  font-size: 1.5rem;
}
.skitser{
  display: flex;
}
.skitser img{
  padding:20px
}
.problemetKFUM img{
  width: 70%;
}

.EmpatyMap img {
  padding-right: 20px;
  width:70%
}
#EMHele{
  width: 70%;
  padding-bottom: 20px;
}
</style>
