import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
  Form,
} from "react-bootstrap";
import { useState } from "react";
import logo from "./logo.png";
import { BsSearch, BsGlobe } from "react-icons/bs";

export default function Topnav() {
  const [showbar, setShowbar] = useState(false);
  function showSearch() {
    setShowbar(true);
  }

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
            />
            &nbsp; Kings-Designing
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="/about">About</Nav.Link> */}
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/about/teamdetails">
                  Team Details
                </NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Room Wallpapers</NavDropdown.Item>
                <NavDropdown.Item href="">Wall Painting</NavDropdown.Item>
                <NavDropdown.Item href="">Wall Sheets</NavDropdown.Item>
                <NavDropdown.Item href="">Outdoor Design</NavDropdown.Item>
                <NavDropdown.Item href="">PVC Panels</NavDropdown.Item>
                <NavDropdown.Item href="">Interior Design</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Services Carousel</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Form.Control type="text" placeholder="Search" id="searchbar" />
              <Button id="search"><BsSearch/></Button>
              <Nav.Link onClick={handleShow}>
                <span id="navmenu">Menu</span>
              </Nav.Link>
              <Button href="/contact" variant="outline-dark" id="appoint">
                Book Appointment
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end" id="off">
        <Offcanvas.Header closeButton  id="offheader">
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Container id="offfont">
            <Row className="mt-3">
              <Col md={2}></Col>
              <Col><Button id="language">Account</Button></Col>
            </Row>
            <Row className="mt-3">
            <Col md={2}></Col>
              <Col><Button id="language">Currency</Button></Col>
            </Row>
            <Row className="mt-3">
            <Col md={2}></Col>
              <Col><Button id="language">Privacy Policy</Button></Col>
            </Row>
            <Row className="mt-3">
            <Col md={2}></Col>
              <Col><Button id="language">Support / Help</Button></Col>
            </Row>
            <Row id="lastoff">
            <Col md={2}></Col>
              <Col><Button id="language"><BsGlobe id="globe"/>UK English</Button></Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
