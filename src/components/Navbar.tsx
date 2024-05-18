import {
  Container,
  Nav,
  NavDropdown,
  Navbar as NavbarBs,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <NavbarBs sticky="top" className="bg-white shadow-sm">
        <Container>
          <Nav className="me-auto h-100" style={{alignItems: "center"}}>
            <Nav.Link to="/" as={NavLink}>
            <img
              alt=""
              src="./images/house.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            </Nav.Link>
            <NavDropdown title="Prehľad" id="basic-nav-dropdown">
              <NavDropdown.Item to="/about" as={NavLink}>
                Projekt
              </NavDropdown.Item>
              <NavDropdown.Item to="/team" as={NavLink}>
                Náš tím
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/minute-book" as={NavLink}>
              Zápisnica
            </Nav.Link>
          </Nav>
          <NavbarBs.Brand href="#">
            <img
              alt=""
              src="./images/tp-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Projekt OCT
          </NavbarBs.Brand>
        </Container>
      </NavbarBs>
    </>
  );
}
