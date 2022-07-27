import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useState } from "react";
import logo from "./logo.png";

export default function Topnav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="light" expand="lg" sc>
        <Container fluid>
          <Navbar.Brand href="/">
          <img
              src={logo}
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />&nbsp;
            Kings-Designing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#about">Projects</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                  Room Wallpapers
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Wall Painting
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Wall Sheets
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Outdoor Design
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  PVC Panels
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Interior Design
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Services Carousel
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#about">Account</Nav.Link>
              <Nav.Link href="#about">Cart</Nav.Link>
              <Nav.Link onClick={handleShow}>Menu</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Language<br></br>
          Search<br></br>
          Host an experience<br></br>
          Help<br></br>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
