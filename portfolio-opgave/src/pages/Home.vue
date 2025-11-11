<script>
export default {
  name: "Home"
}
</script>



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
              src="./Assets/Photos/IMG_0068.JPG"
              alt=""
              class="CardBillede"
            />
            <h2>Samanta Petrova</h2>
            <p>Ux/Ui og grafisk designer</p>
          </div>
          <div class="Introikoner">
            <div id="lokation">
              <img
                src="./Assets/Photos/Ikoner/lokation.png"
                alt="lokation ikon"
              />
              <p>Aalborg</p>
            </div>
            <div id="linkedIn">
              <img src="./Assets/Photos/Ikoner/IN.png" alt="Linked in logo" />
              <p>Linked In</p>
            </div>
          </div>
        </div>
      </section>
      <section class="kompetanceSektion">
        <h2 class="Overskrift">Kompetancer</h2>
        <div class="KSlogoer">
          <div class="mmdIkoner">
            <img src="./Assets/Photos/Ikoner/Html.png" alt="" />
            <img src="./Assets/Photos/Ikoner/CSS.png" alt="" />
            <img src="./Assets/Photos/Ikoner/JS.png" alt="" />
          </div>
          <div class="gdtIkoner">
            <img src="./Assets/Photos/Ikoner/PS.png" alt="" />
            <img src="./Assets/Photos/Ikoner/AI.png" alt="" />
            <img src="./Assets/Photos/Ikoner/Id.png" alt="" />
          </div>
        </div>
      </section>
      <section class="portfolioSektion BackgroundColorGreen">
        <h2 class="Overskrift">Nyeste cases</h2>
        <div class="cardsSektion">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="./Assets/Photos/IMG_0068.JPG" alt="Case billede" />
                <h2>
                  Rold Skov <br />
                  Orienteringsklub
                </h2>
                <p class="Lillecaption">
                  Kør musen over mig <i class="fa-solid fa-chevron-right"></i>
                </p>
              </div>
              <div class="flip-card-bagside">
                <p>
                  I Rold Skov ligger lokalerne til Rold Skov Orienteringsklub
                  (herefter RSOK), som er en aktiv orienteringsløbeklub. Klubben
                  har en stærk tilknytning til den naturskønne skov og tilbyder
                  aktiviteter, der kombinerer motion, mental udfordring og
                  socialt fællesskab.
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="./Assets/Photos/IMG_0068.JPG" alt="Case billede" />
                <h2>
                  Rold Skov <br />
                  Orienteringsklub
                </h2>
                <p class="Lillecaption">
                  Kør musen over mig <i class="fa-solid fa-chevron-right"></i>
                </p>
              </div>
              <div class="flip-card-bagside">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat obcaecati perspiciatis possimus. Expedita cum sint
                  reiciendis, saepe quisquam maiores corporis ipsum maxime
                  debitis nam, accusantium quibusdam, voluptatum voluptate
                  possimus perspiciatis.
                </p>
              </div>
            </div>
          </div>
          <div class="SeeMere">
            <p>See mere her <i class="fa-solid fa-chevron-right"></i></p>
            <a href="./Portfolio.html">
              <img
                class="pointer"
                src="./Assets/Photos/Stars/TheStarVenstre.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer></footer>
  

</template>


