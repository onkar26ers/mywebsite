import Topnav from "./Topnav";
import { Container, Row, Col } from "react-bootstrap/esm/";
import Footer from "./Footer";
import Breadcrumbteam from "./Breadcrumbteam";
import Teammember1 from "./Teammember1";

export default function Teamdetails1() {
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
            <Col id="membermid"><Teammember1/></Col>
            <Col md="1"></Col>    
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}
