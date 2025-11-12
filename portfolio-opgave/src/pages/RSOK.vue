
<script>
export default {
  name: "RSOK",
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
  <h2 class="GrønBoksOverskrift">Rold Skov Orienteringsklub</h2>
  
  <p>I Rold Skov ligger lokalerne til Rold Skov Orienteringsklub (herefter RSOK), som er en aktiv orienteringsløbeklub. Klubben har en stærk tilknytning til den naturskønne skov og tilbyder aktiviteter, der kombinerer motion, mental udfordring og socialt fællesskab.
<br>
<br>
RSOK’s håber at inspirere flere til at opdage glæden ved orienteringsløb og blive en del af fællesskabet. Rsok håber at opnå dette ved hjælp af en mere brugervenlig hjemmeside, der tydeligt formidler klubbens værdier og aktiviteter,</p>
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
  <div v-show="activeTab === 'problem'" class="tab-content">
    <h2>Problem</h2>
    <p>RSOK’s hjemmeside mangler en god informations arketektur og derfor opleves siden ukordineret og forvirrende for brugeren </p>
  </div>

  <div v-show="activeTab === 'research'" class="tab-content">
    <h2>Research</h2>
    <p>Her kan du dele din research og indsigter.</p>
  </div>

  <div v-show="activeTab === 'analyse'" class="tab-content">
    <h2>Analyse</h2>
    <p>Her kan du analysere data og behov.</p>
  </div>

  <div v-show="activeTab === 'design'" class="tab-content">
    <h2>Design</h2>
    <p>Her kan du vise dine designskitser og ideer.</p>
  </div>

  <div v-show="activeTab === 'produkt'" class="tab-content">
    <h2>Produkt</h2>
    <p>Her kan du præsentere det færdige produkt.</p>
  </div>
</section>

</template>

<style scoped>
/* */
</style>
