import { Container } from "react-bootstrap";

export function About() {
  return (
    <>
      <Container className="text-center">
        <h1 className="mb-5">
          Segmentácia vrstiev sietnice oka z obrazov získaných optickou
          koherentnou tomografiou (OCT)
        </h1>
        <p>
          Optická koherentná tomografia je neinvazívne zobrazovacie vyšetrenie
          oka, ktoré nasníma jednotlivé rezy snímaného tkaniva na úrovni
          mikrometrov s možnosťou vizualizácie jednotlivých vrstiev. Výsledkom
          sú rezy tkanivom s možnosťou 3D rekonštrukcie obrazu, ako pri
          počítačovej tomografii (CT), ale bez radiačnej záťaže. Úlohou tímového
          projektu je spracovanie jednotlivých nasnímaných rezov centra
          sietnice, obsahujúcich jej jednotlivé vrstvy, ich príprava a analýza
          za účelom segmentácie týchto vrstiev. 1. Vyhľadajte voľne dostupné
          databázy OCT obrazov sietnice. 2. Naštudujte si dostupné metódy
          segmentácie týchto dát. 3. Podľa dostupných metód vyhľadajte metódy
          predspracovania, ak sú potrebné a skúste niektoré implementovať. 4. Z
          naštudovaných riešení implementujte vybrané riešenie segmentácie,
          prípadne navrhnite vlastné. 5. Otestujte vytvorené riešenie.
        </p>
        <img src="./web-tp/images/layers.png" alt="OCT layers" />
      </Container>
    </>
  );
}
