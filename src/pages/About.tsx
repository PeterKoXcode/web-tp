import { Container, Nav, Navbar as NavbarAbout } from "react-bootstrap";

export function About() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div
        className="text-center py-3"
        style={{
          width: "100%",
          height: "100%",
          margin: 0,
          background: "#42455a",
          color: "white",
        }}
      >
        <Container className="pb-3">
          <NavbarAbout>
            <Nav className="me-auto justify-content-center">
              <Nav.Link
                style={{ opacity: 0.2, color: "white" }}
                onClick={() => scrollToSection("projectAssignment")}
              >
                Zadanie projektu
              </Nav.Link>
              <Nav.Link
                style={{ opacity: 0.2, color: "white" }}
                onClick={() => scrollToSection("octTheory")}
              >
                OCT teória
              </Nav.Link>
              <Nav.Link
                style={{ opacity: 0.2, color: "white" }}
                onClick={() => scrollToSection("databases")}
              >
                Databázy
              </Nav.Link>
              <Nav.Link
                style={{ opacity: 0.2, color: "white" }}
                onClick={() => scrollToSection("codeImplementation")}
              >
                Implementácia do kódu
              </Nav.Link>
            </Nav>
          </NavbarAbout>
        </Container>
        <h1
          style={{
            background: "#42404a",
            padding: "20px",
            borderTop: "1px rgb(113 116 131) solid",
            borderBottom: "1px rgb(113 116 131) solid",
          }}
        >
          Segmentácia vrstiev sietnice oka z obrazov získaných optickou
          koherentnou tomografiou (OCT)
        </h1>
        <section
          id="projectAssignment"
          className="pt-5 mx-auto"
          style={{
            /*padding: "0 150px 0 150px",*/
            width: "60%",
            color: "#fff",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "43px",
              }}
            >
              Zadanie projektu
            </h2>
            <p
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              Optická koherentná tomografia je neinvazívne zobrazovacie
              vyšetrenie oka, ktoré nasníma jednotlivé rezy snímaného tkaniva na
              úrovni mikrometrov s možnosťou vizualizácie jednotlivých vrstiev.
              Výsledkom sú rezy tkanivom s možnosťou 3D rekonštrukcie obrazu,
              ako pri počítačovej tomografii (CT), ale bez radiačnej záťaže.
              Úlohou tímového projektu je spracovanie jednotlivých nasnímaných
              rezov centra sietnice, obsahujúcich jej jednotlivé vrstvy, ich
              príprava a analýza za účelom segmentácie týchto vrstiev. <br />
              1. Vyhľadajte voľne dostupné databázy OCT obrazov sietnice. <br />
              2. Naštudujte si dostupné metódy segmentácie týchto dát. <br />
              3. Podľa dostupných metód vyhľadajte metódy predspracovania, ak sú
              potrebné a skúste niektoré implementovať. <br />
              4. Z naštudovaných riešení implementujte vybrané riešenie
              segmentácie, prípadne navrhnite vlastné. <br />
              5. Otestujte vytvorené riešenie.
            </p>
          </div>
        </section>

        <section
          id="octTheory"
          className="pt-5 mx-auto"
          style={{
            /*padding: "0 150px 0 150px",*/
            width: "60%",
            color: "#fff",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "43px",
              }}
            >
              OCT teória
            </h2>
            <div
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              <h4 style={{ fontWeight: "bolder" }}>Sietnica oka</h4>
              <p>
                Sietnica je jednou z najdôležitejších a najcitlivejších častí
                oka. Jej úlohou je zachytávanie svetelných lúčov. Obraz
                zachytený práve sietnicou sa následne premieňa na nervové
                signály posielané do zrakového centra v mozgu pomocou zrakových
                nervov. V zrakovom centre sa zrakový vnem ďalej spracováva a
                vytvára sa obraz, ktorý aktuálne vidíme.
              </p>
              <h4 style={{ fontWeight: "bolder" }}>Makula</h4>
              <p>
                Makula alebo žltá škvrna je centrálna časť sietnice obsahujúca
                fotoreceptory, prevažne čapíky a v jej okraji aj tyčinky, vďaka
                ktorým zabezpečuje ostré videnie priamo pred vami, čítanie,
                riadenie auta alebo rozpoznávanie tvárí. Fovea je jamka v centre
                makuly obsahujúca iba čapíky, takže tu je videnie najostrejšie.
                OCT obraz prierezu normálnej makuly ako aj foveu môžeme
                pozorovať na obrázku nižšie.
              </p>
              <h4 style={{ fontWeight: "bolder" }}>Vrstvy makuly</h4>
              <p>
                OCT sa stala najužitočnejším zobrazovacím spôsobom na
                diagnostiku, liečbu a monitorovanie chorôb sietnice, pretože
                poskytuje virtuálnu „optickú biopsiu“ makuly. Táto neinvazívna
                zobrazovacia technika vytvára prierezové obrazy sietnice,
                predného segmentu, terča zrakového nervu a vrstvy nervových
                vlákien sietnice s vysokým rozlíšením. OCT využíva
                nízkokoherentnú interferometriu blízkeho infračerveného svetla
                na získanie pohľadov do oka, ktoré sa podobajú histologickým
                rezom. Pomocou tohto spôsobu vieme pozorovať jednotlivé vrstvy
                makuly, ktorými sú:
              </p>
              <ul
                style={{
                  display: "inline-block",
                  textAlign: "left",
                }}
              >
                <li>
                  <span className="fw-bold ">Vrstva nervových vlákien</span> -
                  je tvorená axónmi gangliových buniek sietnice zhromažďujúce
                  vizuálne impulzy, ktoré prechádzajú z tyčiniek a čapíkov do
                  vrstvy neurových vlákien
                </li>
                <li>
                  <span className="fw-bold ">Vrstva gangliových buniek</span> -
                  skladá sa z gangliových buniek sietnice, ktoré dostávajú
                  informácie z fotoreceptorov cez interneuróny
                </li>
                <li>
                  <span className="fw-bold ">Vnútorná plexiformná vrstva</span>{" "}
                  - v tejto vrstve skončia bipolárne bunky, čím sa vytvára
                  synaptický kontakt s gangliovou bunkou zodpovedajúceho typu
                </li>
                <li>
                  <span className="fw-bold ">Vnútorná jadrová vrstva</span> -
                  táto vrstva sa skladá z troch tried nervových buniek, ktoré
                  prenášajú vizuálne signály z fotoreceptorov do gangliových
                  buniek a tvarujú signály do vizuálnych tokov
                </li>
                <li>
                  <span className="fw-bold ">Vonkajšia plexiformná vrstva</span>{" "}
                  - v tejto vrstve prebiehajú 2 synaptické interakcie:
                  <ul>
                    <li>
                      <span className="fw-bold ">Vonkajšia jadrová vrstva</span>{" "}
                      - rozdeľuje vizuálny signál do dvoch samostatných kanálov
                      toku informácií, jeden pre detekciu objektov svetlejších
                      ako pozadie a druhý tmavších a zároveň tým postupne
                      vytvárame kontrast vizuálnych objektov
                    </li>
                    <li>
                      <span className="fw-bold ">
                        Vonkajšia obmedzujúca membrána
                      </span>{" "}
                      - obsahuje jadrá čapíkových a tyčinkových fotoreceptorov
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="fw-bold ">Elipsoidná zóna</span> - považuje
                  sa za odraz funkcie fotoreceptorov a používa sa ako indikátor
                  vizuálnych výsledkov pri mnohých ochoreniach sietnice
                </li>
                <li>
                  <span className="fw-bold ">Interdigitačná zóna</span> - sa
                  považuje za kontaktné valce tvorené vrcholmi buniek
                  pigmentového epitelu sietnice
                </li>
                <li>
                  <span className="fw-bold ">Pigmentový epitel sietnice</span> -
                  jeho hlavnou úlohou je udržať sietnicu pri živote a umožniť
                  fotoreceptorovým bunkám detekovať svetlo
                </li>
                <li>
                  <span className="fw-bold ">Bruchova membrána</span> - slúži
                  ako substrát pre pigmentový epitel sietnice
                </li>
                {/* Add more list items as needed */}
              </ul>
            </div>
          </div>
          <img
            className="img-fluid"
            src="./images/layers_sk.png"
            alt="OCT layers"
            style={{
              borderRadius: "10px",
              boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)",
            }}
          />
        </section>

        <section
          id="databases"
          className="pt-5 mx-auto"
          style={{
            /*padding: "0 150px 0 150px",*/
            width: "60%",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "43px",
            }}
          >
            Databázy
          </h2>
          <p
            style={{
              fontSize: "15px",
              /*margin: "30px 0 30px 40px",*/
              lineHeight: "25px",
              color: "#919191",
            }}
          >
            Celkovo sme získali prístup k šiestim veľko-početným databázam,
            ktoré sme analyzovali podľa niekoľkých kritérií. Uprednostňujeme
            obrázky zdravých makúl pred chorými. V prípade, že sa jednalo o
            choré snímky, zaznamenali sme typy choroby, o aké sa jednalo. Podľa
            vzájomnej dohody a štandardov sme sa zhodli, že vyberieme a ďalej
            budeme pracovať s databázou, ktorá ma na obrázkoch dokopy 9 vrstiev.
            Pre účel našej práce je vhodné pracovať so segmentovanými obrázkami,
            tzn. prierez makuly na danom obrázku je správne rozdelený na
            jednotlivé vrstvy. Pre tieto podmienky nám najviac vyhovujú dva
            datasety:{" "}
            <a href="https://people.duke.edu/~sf59/Chiu_BOE_2014_dataset.htm">
              Sanghai
            </a>{" "}
            a{" "}
            <a href="https://www.openicpsr.org/openicpsr/project/108503/version/V1/view?path=/openicpsr/108503/fcr:versions/V1/Normal-Retinal-OCT-images&type=folder">
              Waterloo
            </a>
            .
          </p>
        </section>
        <section
          id="codeImplementation"
          className="pt-5 mx-auto"
          style={{
            /*padding: "0 150px 0 150px",*/
            width: "60%",
            color: "#fff",
            display: "flex",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "43px",
              }}
            >
              Implementácia do kódu
            </h2>
            <p
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              Načítajú sa obrázky. Z masky, ktorá obsahuje RGB hodnoty farieb
              spravíme masku, ktorá obsahuje čísla tried jednotlivých vrstiev
              (hodnoty od 0 po 9). Všetky obrázky sú resize-nuté na jednu
              veľkosť a je z nich vytvorená trénovacia, validačná a testovacia
              množina, s ktorými sa potom trénujeme sieť alebo vykonávame
              predikcie.
            </p>
            <p></p>
          </div>
          <img
            className="img-fluid"
            src="./images/img_with_mask_trans_inv.png"
            alt="OCT layers"
          />
        </section>
      </div>
    </>
  );
}
