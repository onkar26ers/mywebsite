import { Container, Row, Col, Image } from "react-bootstrap";
import Teamcard from "./Teamcard";
import Teamcard2 from "./Teamcard2";
import Teamcard3 from "./Teamcard3";

export default function Aboutteam() {
  return (
    <>
      <Container>
        <Row id="aboutmid3">
          <Col>
            <span class="title1">TEAM MEMBERS</span>
            <br />
            <span class="title5">Meet the Expert Team</span>
            <hr />
          </Col>
        </Row>
        <Row className="mt-3" >
          <Col md={1}></Col>
          <Col md xs={12}  className="mt-3">
            <Teamcard />
          </Col>
          <Col md xs={12}  className="mt-3">
            <Teamcard2 />
          </Col>
          <Col md xs={12}  className="mt-3">
            <Teamcard3/>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
}
