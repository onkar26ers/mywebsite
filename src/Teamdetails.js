import Topnav from "./Topnav";
import { Container, Row, Col } from "react-bootstrap/esm/";
import Footer from "./Footer";
import Teammember from "./Teammember";
import Breadcrumbteam from "./Breadcrumbteam";

export default function Teamdetails() {
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
            <Col id="membermid"><Teammember/></Col>
            <Col md="1"></Col>    
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}
