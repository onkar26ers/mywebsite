import Topnav from "./Topnav";
import { Container, Row, Col } from "react-bootstrap/esm/";
import Footer from "./Footer";
import Breadcrumbteam from "./Breadcrumbteam";
import Teammember3 from "./Teammember3";

export default function Teamdetails3() {
  return (
    <>
      <Container fluid>
        <Row>
          <Topnav />
        </Row>
        <Row>
          <Col>
          <Breadcrumbteam/>
          </Col>
        </Row>
        <Row>
          <div class="teamdetail">
            <h1 class="titleabout">Team Details</h1>
          </div>
        </Row>
        <Row>
            <Col md={1}></Col>
            <Col id="membermid"><Teammember3/></Col>
            <Col md="1"></Col>    
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}
