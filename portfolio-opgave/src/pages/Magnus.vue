
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
  <h2 class="GrønBoksOverskrift">Magnus Bonde</h2>
  
  <p> Jeg har udviklet en portfolioside for en semi-professionel League of Legends-spiller. Formålet med projektet var at skabe en overskuelig og brugervenlig platform, hvor besøgende nemt kunne finde alle relevante informationer om spilleren.
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
      :class="{ active: activeTab === 'design' }"
      @click="activeTab = 'design'"
    >
      Design
    </button>
    
  </div>

  <!-- Tab Content -->
  <div v-show="activeTab === 'problem'" class="tab-content problemsektion">
    <h2 class="Overskrift">Problem</h2>
    <p>I dagens esports-verden er der mange spillere og hold, men det kan være svært at finde professionelle og stilrene platforme, der præsenterer spilleres informationer på en overskuelig måde. Mange eksisterende esports-hjemmesider er enten visuelt overfyldte eller mangler en klar struktur, hvilket gør det udfordrende for besøgende at finde relevante oplysninger hurtigt. Desuden er kontaktinformationer ofte skjulte eller svære at få adgang til, hvilket skaber barrierer for samarbejde, sponsorater eller faninteraktion. Der er derfor et behov for en hjemmeside, der kombinerer et stilrent design med nem adgang til alle væsentlige oplysninger om en spiller.</p>
    <div class="problemetKFUM">
      <img src="/img/DorligEksempel.png" alt=" Eksempel på esports side ">
    </div>
  </div>

  <div v-show="activeTab === 'research'" class="tab-content">
    <h2 class="Overskrift">Research</h2>
    <h3>Målgruppe</h3>
    <p>
Portfoliosiden henvender sig primært til esports-interesserede, særligt fans af League of Legends, som ønsker hurtigt og let adgang til information om semi-professionelle spillere. Derudover er siden målrettet potentielle sponsorer, samarbejdspartnere og scouts, der har behov for en professionel og overskuelig præsentation af spillerens kompetencer og kontaktinformationer. Medie- og gaming-journalister udgør også en vigtig del af målgruppen, da de ofte søger detaljerede oplysninger til artikler, interviews eller reportage. Sekundært kan siden inspirere andre spillere, som ønsker at opbygge deres egne esports-portfolios, samt gaming-fællesskaber og sociale medier, der deler information om talenter og events.</p>
<h3>Segmentering</h3>
    <p>
Målgruppen kan segmenteres på flere niveauer. Demografisk er den primært mellem 16 og 35 år og inkluderer både studerende og unge professionelle, samt personer tilknyttet esports-organisationer og sponsorater. Psykografisk er målgruppen dedikerede gamere og esports-fans, som værdsætter konkurrence, professionalisme og netværk. Adfærdsmæssigt er brugerne aktive på digitale platforme, sociale medier, Twitch, Discord og gaming-fora, og de søger hurtigt information om spillere, statistik og kontaktmuligheder. Geografisk er målgruppen global inden for esports-miljøet, med et særligt fokus på Danmark, hvor spilleren er aktiv.</p>
  </div>

  

  <div v-show="activeTab === 'design'" class="tab-content">
    <h2 class="Overskrift">Design</h2>
    <p>Portfoliosidens design er skabt med udgangspunkt i esports-målgruppens visuelle præferencer og behov for hurtig informationsadgang. Baggrundsbillederne på tværs af alle tre undersider bruger en stiliseret fantasy- og gamingæstetik, som harmonerer med League of Legends-universet og appellerer stærkt til fans og dedikerede gamere. De farvemættede illustrationer med karakter-silhuetter og magiske omgivelser skaber en genkendelig stemning, som målgruppen forbinder med spillets verden, og som derfor fastholder deres opmærksomhed allerede ved første blik.</p>
<p>Navigationsmenuen er placeret tydeligt i toppen og består af få, letforståelige punkter: Hjem, Karriere og Kontakt. Denne simple struktur er vigtig, fordi mange esports-hjemmesider ofte er overfyldte eller ulogiske, hvilket gør navigationen besværlig. Her bliver brugeren i stedet mødt af et meget direkte flow, hvor hvert menupunkt fører til præcis den information, en scout, sponsor eller fan typisk leder efter. Det understøtter formålet om at skabe en platform, hvor relevante oplysninger er lette at finde uden unødvendigt kompleks layout.</p>
<p>På forsiden præsenteres spilleren med et stort og centralt portræt samt tydelige oplysninger som navn, esports-alias, rolle og nationalitet. Denne hurtige identifikation er vigtig både for fans, der vil lære spilleren at kende, og for professionelle aktører, der skal kunne danne sig et overblik inden for få sekunder. Under dette findes sektionen Højdepunkter, som visualiserer spillerens achievements gennem store billedkort. Det gør det muligt for besøgende at skimme resultater visuelt, hvilket passer godt til målgruppens digitale adfærd og forventning om hurtig overblik.</p>
    <div class="skitser">
      <h3>Forside</h3>
      <img src="/img/LandingPageMagnus.png" alt=" landing page ">
      </div>
      <p>Karrieresiden er struktureret i mindre tekstblokke afbrudt af billeder, logoer og ikoner fra de teams, spilleren har repræsenteret. Denne kombination af tekst og grafik gør indholdet mere fremkommeligt for en målgruppe, som ofte foretrækker visuelt understøttet information frem for lange tekstafsnit. Billeder af holdsejre, teamlogoer og kendte esports-symboler øger troværdigheden, fordi de signalerer professionalisme og dokumenterer spillerens faktiske erfaring.</p>
      <h3>Karriere</h3>
      <div class="skitser sammen">
      <img src="/img/CareerMagnus.png" alt="Karriere side ">
      </div>
      <h3>Kontakt</h3>
      <p>Kontaktsiden er designet med en stor og overskuelig kontaktboks, som ligger tydeligt i forgrunden oven på det samme genkendelige baggrundsbillede. Dette imødekommer et af de centrale problemer i eksisterende esports-hjemmesider: kontaktinformationer er ofte skjulte eller svære at finde. Her er kontaktfeltet placeret direkte og tilgængeligt, hvilket gør det let for scouts, journalister og sponsorer at etablere kontakt uden friktion. Ikonet for kommunikation understreger funktionen visuelt, hvilket igen tiltaler brugere, der orienterer sig visuelt og hurtigt.</p>
      <div class="skitser">
      <img src="/img/ContactMagnus.png" alt="Kontakt side">
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
