import { Container, Row, Col } from "react-bootstrap/esm/";
import Topnav from "./Topnav";
import Footer from "./Footer";
import Pages from "./Pages";

export default function Blog() {
  return (
    <>
      <Container fluid>
        <Row>
          <Topnav />
        </Row>
        <Row>
          <div class="blogbg">
            <h1 class="title">Blog</h1>
          </div>
        </Row>
        <Row id="buttonpages">
            <Col md={5}></Col>
            <Col id="pagesbuttongroup"><Pages/></Col>
            <Col md={5}></Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}
