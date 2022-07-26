import Topnav from "./Topnav";
import Container from "react-bootstrap/esm/Container";
import "./Contact.css";
import { Row, Col } from "react-bootstrap";
import Contactform from "./Contactform";
import Address from "./Address";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Container fluid>
        <Row>
          <Topnav />
        </Row>
        <Row>
          <div class="contactbg">
            <h1 class="title">Contact Us</h1>
          </div>
        </Row>
        <Row>
          <Container>
            <Row id="middle">
              <Col md={1}></Col>
              <Col md={6} xs={12}>
                <Contactform />
              </Col>
              <Col md={1}></Col>
              <Col md={3} xs={12} id="cards" className="mt-3">
                <Address />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}
