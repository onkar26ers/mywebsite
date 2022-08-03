import { Container, Row, Col, Image } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import aboutrow1 from './images/aboutrow1.jpg'

export default function Aboutdetails() {
  return (
    <>
      <Container>
        <Row>
          <Col md={5} xs={12}>
            <Row>
              <Col>
                <span class="title1">GET TO KNOW US</span>
                <br />
                <span class="title5">We Make Difference in Your Homes</span>
                <hr />
              </Col>
            </Row>
            <Row className="mt-3">
              <span class="abouttext">
                We have 30+ years of experiences for give you
                better quality results.
              </span>
            </Row>
            <Row className="mt-3">
              <Col>
                <span class="checkstext1">
                The company has come a long way since its small beginnings in
                1991.With our team of 300 people, we give our best to make you feel at home, literally.
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <br />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <span class="checks">
                  <FiCheckCircle />
                  &nbsp;Quality Material
                  <br />
                </span>
              </Col>
              <Col>
                <span class="checks">
                  <FiCheckCircle />
                  &nbsp;Better Price
                  <br />
                </span>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <span class="checkstext">
                  Our projects provide the best
                  <br />
                  material to offer
                </span>
              </Col>
              <Col>
                <span class="checkstext">
                  Our offers are placed at a very reasonable market price
                </span>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col md={6} xs={12} id="aboutcenter" className="mt-3">
            <Image src={aboutrow1} id="aboutimage" alt="" roundedCircle></Image>
          </Col>
        </Row>
        <Row id="abouthr">
            <Col>
            <hr/>
            </Col>
        </Row>
      </Container>
    </>
  );
}
