import Card from "react-bootstrap/Card";
import {Container, Row, Col} from "react-bootstrap"
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Address() {
  return (
    <Card id="addresscard">
      <Card.Body id="addressbody">
        <Card.Text>
        <br/>
          <span class="title3">Call anytime</span>
          <br />
          <span class="title4">(+91) 7845129850</span>
          <br />
          <br />
          <span class="title3">Send email</span>
          <br />
          <span class="title4">kings.designing@gmail.com</span>
          <br />
          <br />
          <span class="title3">Visit Office</span>
          <br />
          <span class="title4">
            592 Hershel Hill Apt. 465
            <br />
            Port Antoniettafort, Czech Republic
          </span>
          <hr />
          <Container>
            <Row>
              <Col> <a href="https://www.instagram.com/liquid.indonesia/" target="_blank" class="social" rel="noreferrer">
            <RiInstagramFill />
          </a></Col>
              <Col> <a href="https://www.facebook.com/Liquid.Ind/" target="_blank" class="social" rel="noreferrer">
            <FaFacebookSquare />
          </a></Col>
              <Col><a href="https://twitter.com/INTERlORS?lang=en" target="_blank" class="social" rel="noreferrer">
            <FaTwitterSquare />
          </a></Col>
              <Col><a href="https://www.pinterest.com/liquidindonesia/" target="_blank" class="social" rel="noreferrer">
            <FaPinterestSquare />
          </a></Col>
            </Row>
          </Container>
          <br/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
