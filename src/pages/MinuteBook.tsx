import { Col, Row } from "react-bootstrap";
import { MyModal } from "../components/MyModal";
import Records from "../data/zapisnica.json";
import Records2 from "../data/zapisnica2.json";

export function MinuteBook() {
  /*
    const description = (
    <p>
      <ul>
        <li>
          Zoznámenie sa p. vedúcej projektu s členmi tímu, krátke predstavenie
          sa
        </li>
        <li>
          Úvod do predmetu, objasnenie, že výstupom predmetu bude práca podobná
          bakalárskej práci, pričom rozsah sa rozdelí medzi členov tímu (cca 7-8
          strán na člena). Počas TP1 bude cieľom zamerať sa na teoretickú časť
          práce.
        </li>
        <li>Teoretický úvod do problematiky OCT</li>
        <li>
          Vysvetlenie zadania projektu - cieľom je segmentovať jednotlivé vrstvy
          retiny z obrazov, ktoré sú výstupom OCT vyšetrenia.
        </li>
        <li>
          Rozdelenie úloh do ďalšieho stretnutia (12. 10. o 13:00):
          <ul>
            <li>
              3 členovia si viac naštudujú, ako možno získať relevantné obrazy
              na analýzy (datasety, …). (Gálik, Jenčík, Kopecký)
            </li>
            <li>
              2 členovia zistia viac o známych postupoch segmentácie informácii
              z obrazov, či už v oblasti blízkej projektu alebo inej.
              (Galčíková, Malíšek)
            </li>
            <li>
              Založenie komunikačného kanálu na platforme FB Messenger.
              (Galčíková)
            </li>
            <li>
              Založenie skupiny na platforme Trello pre efektívny manažment a
              sledovanie progresu práce. (Gálik)
            </li>
            <li>Určenie lídra (vedúceho) spomedzi členov tímu.</li>
            <li>Spísanie zápisnice z prvého stretnutia. (Malíšek)</li>
          </ul>
        </li>
      </ul>
    </p>
  )
  */
  return (
    <>
      <div
        className=" text-center py-5 pt-8"
        style={{
          width: "100%",
          height: "110vh",
          margin: 0,
          background: "#dcdde9",
          color: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            background: "#928ea5",
            padding: "20px",
            borderTop: "1px rgb(66 64 74) solid",
            borderBottom: "1px rgb(66 64 74) solid",
          }}
        >
          ZÁPISNICA
        </h1>
        <br />
        <div className="container" style={{ background: "#dcdde9" }}>
          <Row className="my-3 mx-auto justify-content-center align-items-center">
            <Col xs={3}>
              <hr />
            </Col>
            <Col xs={2} className="text-center">
              <span className="content">Zimný semester</span>
            </Col>
            <Col xs={3}>
              <hr />
            </Col>
          </Row>
          <Row xs={2} md={2} lg={3} className="g-3 mx-3">
            {Records.map((record, index) => {
              return (
                <>
                  <Col key={index}>
                    <MyModal
                      date={record.date}
                      participation={record.participation}
                      desc={record.description}
                    />
                  </Col>
                  <br />
                </>
              );
            })}
          </Row>
          <Row className="my-3 mx-auto justify-content-center align-items-center">
            <Col xs={3}>
              <hr />
            </Col>
            <Col xs={2} className="text-center">
              <span className="content">Letný semester</span>
            </Col>
            <Col xs={3}>
              <hr />
            </Col>
          </Row>
          <Row xs={2} md={2} lg={3} className="g-3 mx-3">
            {Records2.map((record, index) => {
              return (
                <>
                  <Col key={index}>
                    <MyModal
                      date={record.date}
                      participation={record.participation}
                      desc={record.description}
                    />
                  </Col>
                  <br />
                </>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
