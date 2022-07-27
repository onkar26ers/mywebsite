import { Container, Row, Col, Image } from "react-bootstrap";
import { FaEarlybirds } from "react-icons/fa";
import {
  GiSplashyStream,
  GiPawPrint,
  GiIndianPalace,
} from "react-icons/gi";

export default function Abouttrusted() {
  return (
    <>
      <Container>
        <Row id="aboutmid2">
          {/* <Col md={1}></Col> */}
          <Col id="aboutbrand1">
            Trusted by More than 3000 Most Popular Brands
          </Col>
          <Col id="aboutbrand2">
            <GiIndianPalace />
          </Col>
          <Col id="aboutbrand2">
            <GiPawPrint />
          </Col>
          <Col id="aboutbrand2">
            <FaEarlybirds />
          </Col>
          <Col id="aboutbrand2">
            <GiSplashyStream />
          </Col>
          {/* <Col md={1}></Col> */}
        </Row>
      </Container>
    </>
  );
}
