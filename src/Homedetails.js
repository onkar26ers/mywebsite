import { Container, Row, Col, Image } from "react-bootstrap";
import { BsBookmarkStarFill } from "react-icons/bs";
import homemid from "./homemid.jpg";

export default function Homedetails() {
  return (
    <>
      <Container>
        <Row>
          <Col md={5} xs={12}>
            <Row>
              <Col>
                <span class="title1">OUR INTRODUCTION</span>
                <br />
                <span class="title5">
                  Welcome to Kings Designing Best Interior Designer
                </span>
                <hr />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <span class="checkstext1">
                  Kings Designing is an exclusive partner of Rockwell Group , a
                  global leader, award winning, cross-disciplinary architecture
                  and design practice based in New York City. Our team can help you create out of
                  the box designs in your projects.
                  <br /><br/>
                  With global offices to support a far-reaching vision, Kings
                  Designing is an interdisciplinary firm that emphasizes innovation
                  and thought leadership in every project.
                </span>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <span class="checks">
                  <br />
                  <BsBookmarkStarFill />
                  &nbsp;&nbsp;&nbsp;Honest and Ethical Services in All Aspects
                  <br />
                  <BsBookmarkStarFill />
                  &nbsp;&nbsp;&nbsp;Thorough Service Ensuring 100% Customer
                  Satisfaction
                  <br />
                  <BsBookmarkStarFill />
                  &nbsp;&nbsp;&nbsp;World-Class Quality Range with European
                  Certification
                </span>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col md={6} xs={12} id="aboutcenter" className="mt-3">
            <Image src={homemid} id="homemidimage" roundedCircle alt=""></Image>
          </Col>
        </Row>
        <Row id="homehr">
          <Col>
            <hr />
          </Col>
        </Row>
      </Container>
    </>
  );
}
