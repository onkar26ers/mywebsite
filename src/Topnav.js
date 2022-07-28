import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
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
              {/* <Nav.Link href="/about">About</Nav.Link> */}
              <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/teamdetails">
                  Team Details
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="">
                  Room Wallpapers
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  Wall Painting
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  Wall Sheets
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  Outdoor Design
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  PVC Panels
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  Interior Design
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">
                  Services Carousel
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              
              <Nav.Link onClick={handleShow}><span style={{margin:"10px"}}>Menu</span></Nav.Link>
              <Button href="/contact" variant="outline-dark">Book Appointment</Button>
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
