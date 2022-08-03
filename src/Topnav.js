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
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import React from "react";
import { useState } from "react";
import logo from "./images/logo.png";
import { BsSearch, BsGlobe } from "react-icons/bs";


export default function Topnav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
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
              <Button id="search">
                <BsSearch />
              </Button>
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
        <Offcanvas.Header closeButton id="offheader"></Offcanvas.Header>
        <Offcanvas.Body>
          <Container id="offfont">
            {/* <Row className="mt-3">
              <Col md={2}></Col>
              <Col><Button id="language">Account</Button></Col>
            </Row> */}
            <Row className="mt-3">
              <Col md={2}></Col>
              <Col>
                <Button id="language" onClick={() => setModalShow1(true)}>
                  Currency
                </Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={2}></Col>
              <Col>
                <Button id="language" href="/privacy-policy">
                  Privacy Policy
                </Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={2}></Col>
              <Col>
                <Button id="language" href="/contact">
                  {/* Support / Help */}
                </Button>
              </Col>
            </Row>
            <Row id="lastoff">
              <Col md={2}></Col>
              <Col>
                <Button id="language"  onClick={() => setModalShow2(true)}>
                  <BsGlobe id="globe" />
                  Language
                </Button>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <CurrencyModal show={modalShow1} onHide={() => setModalShow1(false)} /> */}
    <Modal show={modalShow1} onHide={() => setModalShow1(false)} centered id="currencymodal1" scrollable>
      <ModalHeader closeButton id="headermodal">
        Choose a currency
      </ModalHeader>
      <ModalBody id="currencymodal">
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Australian dollar</span>
          <span class="mutedcurrency">AUD - $</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Brazilian real</span>
          <span class="mutedcurrency">BRL - R$</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Bulgarian lev</span>
          <span class="mutedcurrency">BGN - лв.</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Canadian dollar</span>
          <span class="mutedcurrency">CAD - $</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Chilean peso</span>
          <span class="mutedcurrency">CLP - $</span>
        </Button>


        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Chinese yuan</span>
          <span class="mutedcurrency">CNY - ￥</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Colombian peso</span>
          <span class="mutedcurrency">COP - $</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Costa Rican colon</span>
          <span class="mutedcurrency">CRC - ₡</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Croatian kuna</span>
          <span class="mutedcurrency">HRK - kn</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Czech koruna</span>
          <span class="mutedcurrency">CZK - Kč</span>
        </Button>


        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Danish krone</span>
          <span class="mutedcurrency">DKK - kr</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Emirati dirham</span>
          <span class="mutedcurrency">AED - ﺩ.ﺇ</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Euro</span>
          <span class="mutedcurrency">EUR - €</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Hong Kong dollar</span>
          <span class="mutedcurrency">HKD - $</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Hungarian forint</span>
          <span class="mutedcurrency">HUF - Ft</span>
        </Button>


        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Indian rupee</span>
          <span class="mutedcurrency">INR - ₹</span>
        </Button>
       
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Japanese yen</span>
          <span class="mutedcurrency">JPY - ¥</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Malaysian ringgit</span>
          <span class="mutedcurrency">MYR - RM</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Mexican peso</span>
          <span class="mutedcurrency">MXN - $</span>
        </Button>


        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Moroccan dirham</span>
          <span class="mutedcurrency">MAD</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">New Taiwan dollar</span>
          <span class="mutedcurrency">TWD - $</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">New Zealand dollar</span>
          <span class="mutedcurrency">NZD - $</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Norwegian krone</span>
          <span class="mutedcurrency">NOK - kr</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Peruvian sol</span>
          <span class="mutedcurrency">PEN - S/</span>
        </Button>


        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Philippine peso</span>
          <span class="mutedcurrency">PHP - ₱</span>
        </Button>
       
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Pound sterling</span>
          <span class="mutedcurrency">GBP - £</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Romanian leu</span>
          <span class="mutedcurrency">RON - lei</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Saudi Arabian riyal</span>
          <span class="mutedcurrency">SAR - SR</span>
        </Button>


        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Singapore dollar</span>
          <span class="mutedcurrency">SGD - $</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">South African rand</span>
          <span class="mutedcurrency">ZAR - R</span>
        </Button>
        
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Swedish krona</span>
          <span class="mutedcurrency">SEK - kr</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Swiss franc</span>
          <span class="mutedcurrency">CHF</span>
        </Button>



        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Thai baht</span>
          <span class="mutedcurrency">THB - ฿</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">Turkish lira</span>
          <span class="mutedcurrency">TRY - ₺</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow1(false)}>
          <span class="butcurrency">United States dollar</span>
          <span class="mutedcurrency">USD - $</span>
        </Button>
        

      </ModalBody>
    </Modal>
    <Modal show={modalShow2} onHide={() => setModalShow2(false)} centered id="langmodal1">
      <ModalHeader closeButton id="headermodal">
        Choose a currency
      </ModalHeader>
      <ModalBody id="langmodal">
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Azərbaycan dili</span>
          <span class="mutedcurrency">Azərbaycan</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Deutsch</span>
          <span class="mutedcurrency">Deutschland</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">English</span>
          <span class="mutedcurrency">India</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">English</span>
          <span class="mutedcurrency">Canada</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Español</span>
          <span class="mutedcurrency">Latinoamérica</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Français</span>
          <span class="mutedcurrency">Canada</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Français</span>
          <span class="mutedcurrency">France</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">हिन्दी</span>
          <span class="mutedcurrency">भारत</span>
        </Button>


        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Italiano</span>
          <span class="mutedcurrency">Italia</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Melayu</span>
          <span class="mutedcurrency">Malaysia</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Português</span>
          <span class="mutedcurrency">Brasil</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Tagalog</span>
          <span class="mutedcurrency">Pilipinas</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Tiếng Việt</span>
          <span class="mutedcurrency">Việt Nam</span>
        </Button>


        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Türkçe</span>
          <span class="mutedcurrency">Türkiye</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">Русский</span>
          <span class="mutedcurrency">Россия</span>
        </Button>
        <Button variant="outline-dark" id="currencybut" onClick={() => setModalShow2(false)}>
          <span class="butcurrency">日本語</span>
          <span class="mutedcurrency">日本</span>
        </Button>
        
       


        
       
        
        
        

      </ModalBody>
    </Modal>
    </div>
  );
}
