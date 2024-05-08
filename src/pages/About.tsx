import { Container, Nav, Navbar as NavbarAbout } from "react-bootstrap";
import MyTable from "../components/MyTable";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            <Nav className="me-auto justify-content-center align-items-center flex-wrap">
              <Nav.Link
                style={{ opacity: 0.2, color: "white" }}
                onClick={() => scrollToSection("projectAssignment")}
              >
                Zadanie projektu
              </Nav.Link>
              <span style={{ opacity: 0.2, color: "white" }}>•</span>
              <Nav.Link
                style={{ opacity: 0.2, color: "white" }}
                onClick={() => scrollToSection("octTheory")}
              >
                OCT teória
              </Nav.Link>
              <span style={{ opacity: 0.2, color: "white" }}>•</span>
              <Nav.Link
                style={{ opacity: 0.2, color: "white" }}
                onClick={() => scrollToSection("databases")}
              >
                Použité dáta a ich spracovanie
              </Nav.Link>
              <span style={{ opacity: 0.2, color: "white" }}>•</span>
              <Nav.Link
                style={{ opacity: 0.2, color: "white" }}
                onClick={() => scrollToSection("codeImplementation")}
              >
                Implementácia
              </Nav.Link>
              <span style={{ opacity: 0.2, color: "white" }}>•</span>
              <Nav.Link
                style={{ opacity: 0.2, color: "white" }}
                onClick={() => scrollToSection("results")}
              >
                Výsledky
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
          className="pt-5 mx-auto col-sm-12 col-md-8 px-2"
          style={{
            /*padding: "0 150px 0 150px",*/
            /*width: "60%",*/
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
          className="pt-5 mx-auto col-sm-12 col-md-8 px-2"
          style={{
            /*padding: "0 150px 0 150px",*/
            /*width: "60%",*/
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
                  - obsahuje synaptické kontakty medzi bipolárnymi, amakrinnými
                  a gangliovými bunkami. V tejto vrstve, "vypnuté" a "zapnuté"
                  bipolárne bunky skončia, čím sa vytvorí synaptický kontakt s
                  gangliovou bunkou zodpovedajúceho typu
                </li>
                <li>
                  <span className="fw-bold ">Vnútorná nukleárna vrstva</span> -
                  táto vrstva sa skladá z troch tried nervových buniek, ktoré
                  prenášajú vizuálne signály z fotoreceptorov do gangliových
                  buniek a tvarujú signály do vizuálnych tokov
                </li>
                <li>
                  <span className="fw-bold ">Vonkajšia plexiformná vrstva</span>{" "}
                  - v tejto vrstve prebiehajú 2 synaptické interakcie,
                  rozdelenie vizuálneho signálu do dvoch samostatných kanálov
                  toku informácií, jeden na detekciu objektov svetlejších ako
                  pozadie a druhý na detekciu objektov tmavších ako pozadie a
                  vytvorenie kontrastu vizuálnych objektov
                </li>
                <li>
                  <span className="fw-bold ">Vonkajšia nukleárna vrstva</span> -
                  obsahuje jadrá čapíkových a tyčinkových fotoreceptorov a jej
                  hrúbka je dôležitým biomarkerom degenerácií sietnice
                </li>
                <li>
                  <span className="fw-bold ">
                    Vonkajšia limitujúca membrána
                  </span>{" "}
                  - nachádza sa na základoch tyčiniek a čapíkov so štruktúrou
                  podobnou sieti. Túto líniu tvoria spojovacie komplexy medzi
                  fotoreceptormi a Müllerovými bunkami (podporné bunky)
                </li>
                <li>
                  <span className="fw-bold ">Elipsoidná zóna</span> - považuje
                  sa za odraz funkcie fotoreceptorov a používa sa ako indikátor
                  vizuálnych výsledkov pri mnohých ochoreniach sietnice
                </li>
                <li>
                  <span className="fw-bold ">Interdigitačná zóna</span> - tvoria
                  ju akoby kontaktné valce, ktoré sú ďalej tvorené vrcholmi
                  buniek pigmentového epitelu sietnice, ktoré obklopujú časť
                  vonkajších segmentov čapíkov
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
          <figure>
            <img
              className="img-fluid"
              src="./images/layers_new.png"
              alt="OCT layers"
              style={{
                borderRadius: "10px",
                boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
          </figure>
          <figcaption
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              /*margin: "30px 0 30px 40px",*/
              lineHeight: "25px",
              color: "#919191",
            }}
          >
            Obr. 1: Prierez normálnej makuly.
          </figcaption>
        </section>

        <section
          id="databases"
          className="pt-5 mx-auto col-sm-12 col-md-8 px-2"
          style={{
            /*padding: "0 150px 0 150px",*/
            /*width: "60%",*/
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "43px",
            }}
          >
            Použité dáta a ich spracovanie
          </h2>
          <p
            style={{
              fontSize: "15px",
              /*margin: "30px 0 30px 40px",*/
              lineHeight: "25px",
              color: "#919191",
            }}
          >
            Komunikáciou s autormi podobných prác ako je tá naša a
            organizáciami, ktoré disponovali potrebnými dátami, sme získali
            prístup ku šiestim dátovým sadám. Z nich sme si vybrali práve jednu
            a to{" "}
            <a href="https://people.duke.edu/~sf59/Chiu_BOE_2014_dataset.htm">
              Shanghai
            </a>{" "}
            . Táto dátová sada obsahuje zdravé obrazy sietnice oka, ktoré sú aj
            označené, resp. k nim bola odborne vypracovaná manuálna segmentácia
            vrstiev. Trénovanie na obrazoch chorých sietnic by mohlo znižovať
            výkon modelu na segmentáciu. Neoznačené dáta pri tzv. "supervised"
            učení nemajú veľmi využitie.
          </p>
          <p
            style={{
              fontSize: "15px",
              /*margin: "30px 0 30px 40px",*/
              lineHeight: "25px",
              color: "#919191",
            }}
          >
            Na obrázkoch nižšie vidíme, že špecialitou každého obrazu z tejto
            dátovej sady je, že obsahuje aj očný nerv v centrálnej časti makuly
            a tým pádom tam nie je prítomná fovea. Z masky tiež vidíme, že
            sietnica je segmentovaná do deviatich vrstiev.
          </p>
          <Container>
            <Row
              className="mx-auto"
              style={{
                justifyContent: "center",
                height: "100%",
                display: "flex",
              }}
            >
              <Col xs="auto" sm={8} md={8} lg xl xxl={4}>
                <Row>
                  <figure>
                    <img
                      className="img-fluid"
                      src="./images/obraz.png"
                      alt="OCT obraz"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)",
                      }}
                    />
                  </figure>
                </Row>
                <Row>
                  <figcaption
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      /*margin: "30px 0 30px 40px",*/
                      lineHeight: "25px",
                      color: "#919191",
                    }}
                  >
                    Obr. 2: Obraz OCT sietnice v dátovej sade Shanghai.
                  </figcaption>
                </Row>
              </Col>
              <Col xs="auto" sm={8} md={8} lg xl xxl={4}>
                <Row>
                  <figure>
                    <img
                      className="img-fluid"
                      src="./images/maska.png"
                      alt="OCT mask"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)",
                      }}
                    />
                  </figure>
                </Row>
                <Row>
                  <figcaption
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      /*margin: "30px 0 30px 40px",*/
                      lineHeight: "25px",
                      color: "#919191",
                    }}
                  >
                    Obr. 3: Maska sémantickej segmentácie obrazu v dátovej sade
                    Shanghai.
                  </figcaption>
                </Row>
              </Col>
            </Row>
          </Container>
          <p
            className="pt-5"
            style={{
              fontSize: "15px",
              /*margin: "30px 0 30px 40px",*/
              lineHeight: "25px",
              color: "#919191",
            }}
          >
            Pred samotným trénovaním sme museli na túto dátovú sadu aplikovať
            sériu úprav. Medzi ne patria:
          </p>
          <ul
            style={{
              display: "inline-block",
              textAlign: "left",
              color: "#919191",
            }}
          >
            <li>
              <span className="fw-bold ">
                Odstránenie očného nervu z obrazov
              </span>{" "}
              - časť očného nervu netvorí žiadnu z vrstiev sietnice. Ako sme si
              vyššie mohli všimnúť, časť očného nervu tvorí samostatnú triedu
              (čistá biela plocha narozdiel od iných odtieňov) a teda pre dobrú
              výkonnosť modelu bolo potrebné ho odstrániť. Tento krok sme
              dosiahli vymazaním 15% časť od stredu obrazu do oboch strán čím
              sme získali dva obrazy o šírke 35% z pôvodného obrazu. Rovnaký
              postup sme vykonali aj pre masky, aby sme zachovali
              konzistentnosť.
            </li>
            <Container>
              <Row
                className="mx-auto"
                style={{
                  justifyContent: "center",
                  height: "100%",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                <Col xs="auto" sm={8} md={8} lg xl xxl={4}>
                  <Row className="pt-3">
                    <Col>
                      <figure>
                        <img
                          className="img-fluid"
                          src="./images/lava-cast.png"
                          alt="OCT obraz"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)",
                          }}
                        />
                      </figure>
                    </Col>
                    <Col>
                      <figure>
                        <img
                          className="img-fluid"
                          src="./images/prava-cast.png"
                          alt="OCT obraz"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)",
                          }}
                        />
                      </figure>
                    </Col>
                  </Row>
                  <Row>
                    <figcaption
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        /*margin: "30px 0 30px 40px",*/
                        lineHeight: "25px",
                        color: "#919191",
                      }}
                    >
                      Obr. 4: Ľavá a pravá strana obrazu po odstránení očného
                      nervu.
                    </figcaption>
                  </Row>
                </Col>
                <Col xs="auto" sm={8} md={8} lg xl xxl={4}>
                  <Row className="pt-3">
                    <Col>
                      <figure>
                        <img
                          className="img-fluid"
                          src="./images/lava-cast-maska.png"
                          alt="OCT mask"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)",
                          }}
                        />
                      </figure>
                    </Col>
                    <Col>
                      <figure>
                        <img
                          className="img-fluid"
                          src="./images/prava-cast-maska.png"
                          alt="OCT mask"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)",
                          }}
                        />
                      </figure>
                    </Col>
                  </Row>
                  <Row>
                    <figcaption
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        /*margin: "30px 0 30px 40px",*/
                        lineHeight: "25px",
                        color: "#919191",
                      }}
                    >
                      Obr. 5: Ľavá a pravá strana masky po odstránení očného
                      nervu.
                    </figcaption>
                  </Row>
                </Col>
              </Row>
            </Container>
            <li className="pt-5">
              <span className="fw-bold ">
                Odstránenie odrazov z okraju obrazov
              </span>{" "}
              - po natrénovaní prvého modelu sme si všimli nepresnosti v
              niektorých maskách. Jedná sa pravdepodobne o nesprávne vytvorené
              OCT obrazy, na ktorých je odraz. Vytvorený model dôsledkom toho
              označil aj časti obrazov, v ktorých je odraz ako validnéčasti
              vrstiev sietnice, čo výrazne zhoršilo výsledky modelu. Na základe
              toho sme sa rozhodli tieto časti obrazov odstrániť. Niektoré
              obrazy s výrazným odrazom sme odstránili z dátovej sady úplne.
            </li>
            <li>
              <span className="fw-bold ">Augmentácia obrazov</span> - dátová
              sada Shanghai disponovala veľmi malým počtom obrazov a to aj po
              tom čo sme jej počet predošlím krokom zdvojnásobili. Je známe, že
              modely strojového učenia potrebujú relatívne veľké množstvo dát
              pre dobrú výkonnosť. Na tento účeľ slúži augmentácia, ktorá
              aplikuje rôzne transformácie na pôvodné obrazy s cieľom vytvoriť
              nové, zmenené verzie týchto obrazov. Práve vystavením modelu
              širšiemu rozsahu variácií vstupných údajov sa model stane
              schopnejším zvládať rôzne scenáre a podmienky. Aplikovali sme
              viacero techník avšak nie každá dávala použiteľné výsledky pre náš
              obraz. Preto sme sa rozhodli použiť techniky horizontálneho
              obrátenia, zmeny jasu a kontrastu.
            </li>
            <li>
              <span className="fw-bold ">Spracovanie masky obrazu</span> - každý
              jeden pixel obrazov masiek má priradenú unikátnu RGB hodnotu,
              ktorá predstavuje jednak jeho farbu v obraze, ale navyše to slúži
              aj ako identifikátor, do ktorej triedy segmentácie daný pixel
              patrí. Ako sme už vyššie spomenuli, masky v tejto dátovej sade sú
              rozdelené do 9 vrstiev. Pixely patriace do jednej vrstvy / triedy
              budú mať rovnakú farbu. Celkovo bude teda 9 rôznych farieb + 1
              farba reprezentujúca pozadie kam patria všetky tie pixely, ktoré
              nie sú súčasťou ani jednej z 9 vrstiev sietnice oka.
            </li>
            <li>
              <span className="fw-bold ">
                Vizualizácia masiek cez pôvodný obraz
              </span>{" "}
              - v tejto časti práce sme vytvorili vizualizátor, ktorý dokáže
              jednotlivé vrstvy masky farebne odlíšiť a zobraziť na pôvodnom
              obraze s cieľom presnejšej vizuálnej kontroly správnosti, resp.
              presnosti predpovedanej masky po vyhodnotení modelu, pretože
              nemusí úplne zodpovedať pravdivej maske. Ide teda o prenos
              informácie z jedného obrazu do druhého. Na obrázku nižšie je
              zatiaľ len zobrazenie pravdivej masky na pôvodný obraz, teda obraz
              má správne zaradenie pixelov do vrstiev. Zobrazenie predpovedanej
              masky modelom nájdete v neskoršej časti.
            </li>
          </ul>
          <Container className="pt-3 col-xs-8 col-sm-8 col-md-8 col-lg-7 col-xl-6 col-xxl-4">
            <figure>
              <img
                className="img-fluid"
                src="./images/vizualizacia_fovea.png"
                alt="Aplikovanie vizualizátora"
                style={{
                  borderRadius: "10px",
                  boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.3)",
                }}
              />
            </figure>
            <figcaption
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              Obr. 6: Vizualizácia vrstiev na pôvodný obraz s nervom.
            </figcaption>
          </Container>
        </section>
        <section
          id="codeImplementation"
          className="pt-5 mx-auto col-sm-12 col-md-8 px-2"
          style={{
            /*padding: "0 150px 0 150px",*/
            /*width: "60%",*/
            color: "#fff",
          }}
        >
          <Container>
            <h2
              style={{
                fontSize: "43px",
              }}
            >
              Implementácia
            </h2>
            <div
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              <h4 style={{ fontWeight: "bolder" }}>Model</h4>
            </div>
            <p
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              Výber modelu siete sme realizovali na základe úspešnosti výsledkov
              riešení od iných autorov a rozhodli sme sa pre model siete{" "}
              <strong>U-net</strong>. U-net je architektúra na sémantickú
              segmentáciu. Skladá sa z kontrakčnej cesty a rozširujúcej cesty.
              Kontrakčná cesta sa riadi typickou architektúrou konvolučnej
              siete. Pozostáva z opakovaného použitia dvoch konvolúcií 3x3, po
              ktorých nasleduje rektifikovaná lineárna jednotka (ReLU) a
              operácia 2x2 max pooling s krokom 2 na zníženie vzorkovania. Za
              každým čo znížime vzorkovanie zdvojnásobíme počet kanálov funkcie.
            </p>
            <p
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              Každý krok v rozširujúcej ceste pozostáva z prevzorkovania mapy
              príznakov, po ktorom nasleduje konvolúcia 2x2, ktorá znižuje počet
              kanálov príznakov na polovicu, spojenie so zodpovedajúcou orezanou
              mapou príznakov z kontrakčnej cesty a dve konvolúcie 3x3, po
              ktorých nasleduje ReLU. V poslednej vrstve sa použije konvolúcia
              1x1 na mapovanie každého 64-komponentného vektora príznakov na
              požadovaný počet tried. Celkovo má sieť 23 konvolučných vrstiev.
            </p>
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
            <div
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              <h4 style={{ fontWeight: "bolder" }}>Metriky</h4>
            </div>
            <p
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              Okrem vizuálneho vyhodnotenia, aké sme spomenuli vyššie, je
              potrebné vyhodnotenie presnej numerickej hodnoty. Tie získame
              pomocou metrík. Celkovo sme využili 5 metrík, ktoré sú však
              rozšírením základnej pixelovej presnosti a Diceovho koeficientu.
            </p>
            <ul
              style={{
                display: "inline-block",
                textAlign: "left",
                color: "#919191",
              }}
            >
              <li>
                <span className="fw-bold ">Pixelová presnosť</span> - hodnotiaca
                metrika používaná na meranie celkovej presnosti segmentačného
                algoritmu. Je definovaná ako pomer počtu správne klasifikovaných
                pixelov k celkovému počtu pixelov na obrázku. Presnosť pixelov
                môže byť však citlivá na nerovnováhu tried (prípad, kedy má
                jedna trieda podstatne viac pixelov ako druhá). Pre naše obrazy
                vzhľadom nato, že sú všetky tvorené z menšej časti vrstvami
                sietnice a väčšej časti pozadím, môže to viesť k neobjektívnemu
                vyhodnoteniu výkonu modelu. Preto sme sa rozhodli aplikovať
                pixelovú presnosť len na samotných vrstvách bez pozadia.
                Výsledná presnosť nám potom vyšla 0.766 oproti pôvodnej metrike
                aplikovanej na celý obraz, kde nám presnosť vyšla 0.956.
              </li>
              <li>
                <span className="fw-bold ">Diceov koeficient</span> - diceov
                koeficient meria podobnosť medzi skutočnou segmentáciou a
                predpovedanou segmentáciou. Ide o populárnu metriku pre
                segmentáciu obrazov, pretože je citlivá na malé zmeny v
                segmentácii a nie je ovplyvnená nerovnováhou tried. Vo svojej
                podstate je to však binárna metrika, čo znamená, že porovnáva
                obrazy, ktorých pixely patria do jednej z dvoch tried.
                Segmentácia vrstiev makuly však pozostáva zo zaradenia do 10
                tried, resp. 9 vrstiev a pozadia. V takomto prípade počítame
                Diceov koeficient pre každú vrstvu zvlášť, pričom oblasť záujmu
                bude práve tá jedna vrstva a všetky ostatné pixely budú brané
                ako pozadie. Výsledný Diceov koeficient bude následne
                aritmetický priemer z hodnôt pre jednotlivé vrstvy. Tu však
                nastáva spomínaný problém s nevyváženosťou tried, kde by boli
                výsledky vychýlené v prospech triedy, ktorá má vyšší Diceov
                koeficient. Preto sme navyše zaviedli aj tzv. vážený priemerný
                Diceov koeficient, ktorý pri výpočte berie do úvahy aj celkový
                počet pixelov priradený jednotlivým vrstvám. Avšak, vzhľadom na
                to, že sa táto upravená metrika v literatúre a ani iných prácach
                nepoužíva, výkonnosť vyhodnocujeme cez aritmetický priemer.
              </li>
            </ul>
          </Container>
        </section>
        <section
          id="results"
          className="pt-5 mx-auto col-sm-12 col-md-8 px-2"
          style={{
            /*padding: "0 150px 0 150px",*/
            /*width: "60%",*/
            color: "#fff",
          }}
        >
          <Container>
            <h2
              style={{
                fontSize: "43px",
              }}
            >
              Výsledky
            </h2>
            <p
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              Pre účely tejto práce sme vytvorili a natrénovali spolu 8 modelov.
              Všetky tieto modely mali rovnakú U-Net architektúru. Drobným rozdielom
              medzi jednotlivými modelmi bol počet epoch, na ktoré sme trénovanie 
              nastavili. Najhlavnejším rozdielom boli dátové sady, na ktorých boli 
              modely trénované. 
            </p>

            <div
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              <h4 style={{ fontWeight: "bolder" }}>Najhorší model</h4>
            </div>

            <div
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              <h4 style={{ fontWeight: "bolder" }}>Najlepší model</h4>
            </div>


            <div
              style={{
                fontSize: "15px",
                /*margin: "30px 0 30px 40px",*/
                lineHeight: "25px",
                color: "#919191",
              }}
            >
              <h4 style={{ fontWeight: "bolder" }}>
                Porovnanie úspešnosti modelov
              </h4>
              <MyTable />
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
