
<script>
export default {
  name: "KFUM",
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
  </div>

  <!-- Tab Content -->
  <div v-show="activeTab === 'problem'" class="tab-content problemsektion">
    <h2 class="Overskrift">Problem</h2>
    <p>Rold Skov Orienteringsklub (RSOK) står over for en række udfordringer, som truer klubbens vækst og fremtidige eksistens. En af de største udfordringer er mangel på nye medlemmer, hvilket både påvirker klubbens økonomi og det sociale fællesskab negativt. Med færre medlemmer bliver det vanskeligere at opretholde aktiviteter og tiltrække sponsorer, hvilket yderligere svækker klubbens fundament.  </p>
    <p>Samtidig oplever klubben, at orienteringsløb som sport ofte virker utilgængelig eller kompleks for udefrakommende. Manglende formidling af sporten på en enkel og inspirerende måde skaber en opfattelse af, at det er en aktivitet, der kun henvender sig til en smal målgruppe. Dette gør det endnu sværere at nå ud til nye medlemmer og tiltrække folk, der ellers kunne have interesse i at deltage.</p>

    <p>En anden væsentlig udfordring er klubbens nuværende hjemmeside, der fremstår dårligt organiseret og ineffektiv som kommunikationsværktøj. Det er vanskeligt for både eksisterende og potentielle medlemmer at finde relevant information, hvilket skaber unødvendige barrierer for involvering. For potentielle medlemmer, der overvejer at starte med orienteringsløb, mangler hjemmesiden tydelig vejledning og inspiration. Dette kan føre til, at mange vælger ikke at tage det næste skridt mod at blive en del af klubben. </p>
    <p>Kombinationen af et faldende medlemstal, en ineffektiv hjemmeside og en kompleks opfattelse af sporten betyder, at RSOK står i en situation, hvor der er brug for en gennemgribende indsats for at gøre klubben mere tilgængelig, imødekommende og relevant for en bredere målgruppe. 
På baggrund af denne problembeskrivelse er vi nået frem til følgende problemformulering.
</p>
    <div class="problemet">
    <img src="/img/RSOKProblem1.png" alt="">
    <img src="/img/RSOKProblem2.png" alt=""></img>
    </div>
  </div>

  <div v-show="activeTab === 'research'" class="tab-content ">
    <h2 class="Overskrift">Research</h2>
    <p>Projektet starter med en desk research, hvor der indsamles viden om orienteringsløb i Danmark og danskernes brug af natur og foreningsliv. Data viser, at orienteringssporten er aktiv og populær, bl.a. med 314 løb og 70.000 deltagere i 2019, samt store internationale mesterskaber i Danmark. Naturen spiller en central rolle i sporten og forbindes med ansvarlighed og respekt for omgivelserne. Generelt opholder mange danskere sig ofte i naturen, især for afslapning, oplevelser, motion og socialt samvær. </p>
    <h3>På baggrund af denne viden udvælges tre centrale målgrupper:
</h3>
<div class="liste">
<ul>
  <li><img class="blomstG" src="/img/blomstG.png" alt="">Interesserede, men uerfarne – personer, der er nysgerrige, men ser sporten som kompliceret.</li>
  <li> <img class="blomstG" src="/img/blomstG.png" alt=""> Naturen som aktiviteten i sig selv – brugere, der søger ro og naturoplevelser.</li>
  <li> <img class="blomstG" src="/img/blomstG.png" alt="">Aktiviteter i naturen – dem, der kombinerer motion, natur og fællesskab.</li>
</ul>
</div>
<p>Disse segmenter danner grundlag for designet af en brugervenlig og målrettet hjemmeside, der både skal tiltrække nye medlemmer og fastholde eksisterende.</p>

  </div>

  <div v-show="activeTab === 'analyse'" class="tab-content">
    <h2 class="Overskrift">Analyse</h2>
    <p>
  Der anvendes en kvalitativ interviewmetode for at opnå indsigt i behov, præferencer og adfærd i relation til naturaktiviteter og foreningssport – især orienteringsløb. Metoden giver et overblik over de faktorer, som brugerne selv fremhæver som motiverende for deltagelse. Her ses tre hovedpointer fra interviews:
</p>
<div class="liste">
<ul>
  <li><img class="blomstG" src="/img/blomstG.png" alt="">Barrierer: Tidsmangel, særligt hos familier med små børn, og bekymring for ikke at passe ind i foreningsfællesskabet.</li>
  <li> <img class="blomstG" src="/img/blomstG.png" alt=""> Motivation: Ønske om kvalitetstid i naturen, fællesskab og let adgang til at prøve sporten.
</li>
  <li> <img class="blomstG" src="/img/blomstG.png" alt="">Behov: Enkle opstartsmuligheder og begyndervenlige tilbud.</li>
</ul>
</div>
<div>
  <h3>Affinity diagram</h3>
  <p>Der udføres affinity diagram for at gruppere og organisere data. Data anvendt fremkommer af intervieaws, samt indhold fra tidligere hjemmeside. </p>
  <img src="/img/RSOKAffinity.png" alt="">
  <p>Disse grupperinger bliver kategoriseret og danner grundlag for udviklingen af et content sitemap, som efterfølgende anvendes til at strukturere navigationen på hjemmesiden.</p>

  <img src="/img/RSOKNav.png" alt="">
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
</style>
