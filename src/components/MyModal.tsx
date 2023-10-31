import { useState } from "react";
//import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function MyModal(props: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var desc_place = '';
  for(var i = 0; i < props.desc.length; i++){
    desc_place += '' + props.desc[i] + '. ';
  }
  

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="my-2">
        {props.date}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Zápisnica zo dňa {props.date}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <hgroup>
            <h3>Účasť: </h3>
          </hgroup>
          <div className="entry-content">
            <ul>
                <li>MUDr. Veronika Kurilová, PhD., - {props.participation[0]}</li>
                <li>Bc. Veronika Galčíková - {props.participation[1]}</li>
                <li>Bc. Marek Gálik - {props.participation[2]}</li>
                <li>Bc. Tomáš Jenčík - {props.participation[3]}</li>
                <li>Bc. Peter Kopecký - {props.participation[4]}</li>
                <li>Bc. Miroslav Malíšek - {props.participation[5]}</li>
            </ul>
          </div>
          <br />
          <hgroup>
            <h3>Obsah stretnutia:</h3>
          </hgroup>
          <div className="entry-content">
            <ul>
              {desc_place}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
