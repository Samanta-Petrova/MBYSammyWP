
<script>
import PortfolioCards from "../components/PortfolioCards.vue";


export default {
  name: "KFUM",
  components:{
    PortfolioCards
  },
  data() {
    return {
      activeTab: "problem"
    };
  }
};
</script>

<template>
  <section class="enklOpgaveSide">
    <div class="enklOpgave" >
  <div class="GrønBoks ">
  <h2 class="GrønBoksOverskrift">Aalborg KFUM Fodbold</h2>
  
  <p>Aalborg KFUM-fodbold, er en fodboldklub placeret i hjertet af Hasseris. Fodboldklubben er stiftet i 1991, da Aalborg KFUM Idrætsklub lavede en vedtægtsændring. Klubben rummer på nuværende tidspunkt 29 hold fordelt på børne-, ungdoms- og seniorrækker. Klubbens mission er at skabe et attraktivt læringsmiljø med formålet om at flest mulige bliver længst muligt i fodbolden. Klubben er Aalborgs største og den 4. største i hele Jylland, men hvad er problemet så? 
    </p>
  </div>
  
<img class="pointer" src="/img/The-star-piont-down.png" alt="Stjerne maskot">
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
      :class="{ active: activeTab === 'kode' }"
      @click="activeTab = 'test'"
    >
      Test
    </button>
    <button
      class="tab-button"
      :class="{ active: activeTab === 'produkt' }"
      @click="activeTab = 'produkt'"
    >
      Produkt
    </button>
  </div>

  <!-- Tab Content -->
  <div v-show="activeTab === 'problem'" class="tab-content problemsektion">
    <h2 class="Overskrift">Problem</h2>
    <p>Klubbens nuværende hjemmeside er bygget på en standardplatform, der bruges af mange andre klubber, hvilket gør siden uoverskuelig og ensformig. Dette kan gøre det svært for klubben at fastholde eksisterende medlemmer og tiltrække nye, især i konkurrence med andre fodboldklubber i storbyen. Vi startede derfor med at undersøge hjemmesidens struktur og indhold for at identificere de vigtigste problemområder. Analysen viste, at siden både visuelt og indholdsmæssigt virkede kompakt og uoverskuelig, hvilket dannede udgangspunkt for det videre arbejde.</p>
    <div class="problemetKFUM">
      <img src="/img/KFUMproblem.png" alt="Kfum hjemmesside før redesign ">
    </div>
  </div>

  <div v-show="activeTab === 'research'" class="tab-content">
    <h2 class="Overskrift">Research</h2>
    <p>På baggrund af problemidentifikationen gennemførte vi research med fokus på børnefamilier, som udgør en central målgruppe. Vi lavede segmentering, desk research og kvalitative interviews med forældre for at forstå deres behov og adfærd. Resultaterne viste, at forældrene prioriterer, at børnene oplever socialt fællesskab, pædagogiske trænere og et inkluderende miljø. Disse indsigter blev grundlaget for analysen og designarbejdet, da vi nu vidste, hvilke funktioner og informationer der var mest relevante at fremhæve på den nye hjemmeside.</p>
    <img src="/img/TematiskAnalyse.png" alt="Tematisk analyse af interview">
  </div>

  <div v-show="activeTab === 'analyse'" class="tab-content">
    <h2 class="Overskrift">Analyse</h2>
    <p>Med udgangspunkt i researchen analyserede vi den eksisterende hjemmeside for at finde konkrete forbedringsmuligheder. Vi lavede heuristisk evaluering, kundemøde og Empathy Maps, og gennemgik alt tekst- og billedmateriale i et content inventory. Analysen viste, at hjemmesiden skulle gøres mere intuitiv, overskuelig og personlig, samtidig med at klubbens værdier som fællesskab og inklusion skulle fremhæves. De samlede indsigter dannede fundamentet for designprocessen og bestemte hvilke elementer og funktioner, der skulle prioriteres i prototyperne.</p>
    <p>Som første del af analysen gennemførte gruppen en heuristisk evaluering for at finde potentielle problemer på brugergrænsefladen. Evalueringen blev udført fælles, så vi kunne identificere de mest centrale problemområder, som efterfølgende kunne drøftes nærmere med klubben. Dette gjorde det muligt både at forstå, hvilke elementer på siden der skabte udfordringer for brugerne, og hvilke der var bevidste valg fra klubbens side.</p>
      <img src="/img/Heuristik.png" alt="Heruistisk analyse af hjemmesiden ">
    
      <p>Som yderligere del af analysen blev der udviklet et Empathy Map for hver af interviewdeltagerne for at få dybere indsigt i deres behov og oplevelser. Deltagernes svar blev opdelt i kategorierne ”Think”, ”Do”, ”Say” og ”Feel”, så vi kunne kortlægge deres tanker, handlinger, udtalelser og følelser i forhold til klubbens hjemmeside.
</p>
<p>Når denne del var udfyldt, blev ”Pains” og ”Gains” tilføjet for at identificere frustrationer og forhindringer samt de elementer, der allerede fungerede godt eller ønskedes tilføjet. Til sidst blev ”User Need Insights” udfyldt, hvor både de første og anden del af metoden blev analyseret for at opsummere de vigtigste brugerbehov.</p>
<p>Resultatet af Empathy Maps viste tydeligt, at fælles for alle brugere var ønsket om, at deres børn bliver en del af et socialt fællesskab. Disse indsigter dannede et solidt fundament for det videre arbejde med design og test, da de konkret pegede på, hvilke funktioner og informationer der var mest relevante for målgruppen.</p>
    <div class="EmpatyMap">
      <img src="/img/EmpathyMapHELE.png" alt=" Hele empathy map">
      <img src="/img/Gains.png" alt="Gains fra empathy map">
      <img src="/img/Pains.png" alt=" Pins fra empaty map">
    </div>
  </div>

  <div v-show="activeTab === 'design'" class="tab-content">
    <h2 class="Overskrift">Design</h2>
    <p>Baseret på analysens indsigter udviklede vi skitser, wireframes og prototyper. Vi anvendte iterative metoder som Google Design Sprints og Crazy 8-metoden for at generere idéer, teste løsninger og justere designet undervejs. Formålet var at sikre, at hjemmesidens layout, navigation og visuelle identitet afspejlede brugernes behov og klubbens værdier. Resultatet blev konkrete wireframes og mockups, som dannede grundlag for testfasen og den endelige implementering.</p>

    <div class="skitser">
      <h3>Crazy 8-metoden</h3>
      <img src="/img/Crazy8.png" alt=" Crazy 8">
      </div>
      <h3>Skitser / Heat Mapping</h3>
      <div class="skitser sammen">
      <img src="/img/SkitserKFUM1.png" alt=" Skitse 1">
      <img src="/img/Skitse2.png
      " alt="Skitse 2">
      </div>
      <div class="skitser">
      <h3>Wireframes</h3>
      <img src="/img/Wireframes.png" alt="Wireframe ">
    </div>
  </div>

  <div v-show="activeTab === 'test'" class="tab-content">
    <h2 class="Overskrift">Test</h2>
    <p>Vi testede prototyperne med Think Aloud-tests og 5 Second Tests for at identificere navigationsproblemer og sikre, at klubbens budskaber blev tydeligt kommunikeret. Testene viste blandt andet, at navnet “Kalender” skulle ændres til “Aktiviteter”, og at årgangsfiltre var nødvendige under hold. Disse justeringer blev implementeret i prototyperne, hvilket gjorde hjemmesiden mere intuitiv og brugervenlig, samtidig med at den kommunikerede klubbens værdier effektivt.</p>
    <div class="liste skitser">
      <ul>
        <li><p>Før</p></li>
        <img src="/img/TATFoer.png" alt=" Think aloud test før ændringer på wireframe ">
        <img src="/img/MenyBF.png" alt="Think aloud test førændringer på design">
        <li><p>Efter</p></li>
        <img src="/img/TATEfter.png" alt=" Think aloud test efter ændringer wireftame ">
        <img src="/img/MenyEF.png" alt="hink aloud test efter ændringer produkt">
      </ul>
    </div>
  </div>

  <div v-show="activeTab === 'produkt'" class="tab-content">
    <h2 class="Overskrift">Produkt</h2>
    <p>Den endelige hjemmeside blev implementeret i WordPress med tilpasset CSS, billeder og farver, så den både fremhæver klubbens værdier og er nem at administrere. Alle design- og indholdsvalg bygger direkte på den research, analyse og test, vi har gennemført, hvilket sikrer, at hjemmesiden matcher brugernes behov og klubbens mål. Resultatet er en intuitiv, overskuelig og visuelt tiltalende hjemmeside, der kan fungere som model for andre klubber og samtidig styrker fællesskabet og inklusionen i KFUM.</p>
    <div class="skitser">
      <img src="/img/KFUMForside.png" alt="Kfum redesign 1">
      <img src="/img/Forside2.png" alt=" Kfum redesign 1">
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


.skitser img{
  padding:20px;
  width:50%;
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
.sammen{
  display: flex;
}
</style>
