import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <NavbarBs className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
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
