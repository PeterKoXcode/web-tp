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
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item to="/about" as={NavLink}>
                Project
              </NavDropdown.Item>
              <NavDropdown.Item to="/team" as={NavLink}>
                Our Team
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/minute-book" as={NavLink}>
              Minute Book
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
            Project OCT
          </NavbarBs.Brand>
        </Container>
      </NavbarBs>
    </>
  );
}
