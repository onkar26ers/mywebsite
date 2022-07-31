import Topnav from "./Topnav";
import { Container, Row, Col } from "react-bootstrap/esm/";
import Footer from "./Footer";
import Breadcrumbteam from "./Breadcrumbteam";
import Teammember2 from "./Teammember2";

export default function Teamdetails2() {
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
            <Col id="membermid"><Teammember2/></Col>
            <Col md="1"></Col>    
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}
