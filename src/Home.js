import { Container, Row, Col } from "react-bootstrap/esm/";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Homecarousel from "./Homecarousel";
import Topnav from "./Topnav";
import Homedetails from "./Homedetails";
import Faq from "./Faq";

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Topnav />
        </Row>
      </Container>
      <Homecarousel />
      <Container fluid>
        <Row id="aboutmid1">
          <Col md={1}></Col>
          <Col>
            <Homedetails />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <Row id="homegallery"></Row>
      <Gallery />
      <Container>
        <Row id="homehr">
          <Col>
            <hr />
          </Col>
        </Row>
      </Container>
      <Row id="homegallery"></Row>
      <Container fluid>
        <Row>
          <Col>
            <Faq />
          </Col>
        </Row>
      </Container>
      <Row>
        <Footer />
      </Row>
    </>
  );
}
