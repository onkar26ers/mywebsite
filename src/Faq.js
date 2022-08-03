import { React } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
} from "react-bootstrap";
export default function Faq() {
  return (
    <>
      <Container fluid>
        <Row id="faqmid1" className="justify-content-md-center">
          GET YOUR ANSWER HERE
        </Row>
        <Row id="faqmid2" className="justify-content-md-center">
          FAQs
        </Row>
      </Container>
      <Accordion>
        <Container>
          <Row>
            <Col>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How do designer charge for their services?
                </Accordion.Header>
                <Accordion.Body>
                  <span className="text-muted">
                    Based on the size and nature of the project, we provide
                    estimate for the work.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Some designers charge percentage fees. How does this work?
                </Accordion.Header>
                <Accordion.Body>
                  <span className="text-muted">
                    In terms of turnkey project, the designer used to charge on
                    percentage basis. But only for designing, the designer can
                    provide flat fees. There could be several scenarios where it
                    may vary case to case.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            <Col>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Should I hire designer for consultation?
                </Accordion.Header>
                <Accordion.Body>
                  <span className="text-muted">
                    {" "}
                    For consultation, the client needs to send details floorplan
                    or area and their basic requirement. Based on that, company
                    executive will contact you to discuss further.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How can an architect save your money on your home design
                </Accordion.Header>
                <Accordion.Body>
                  <span className="text-muted">
                    Here are few points where architect can save your money.<br/>1.
                    Architects design with your budget in mind. <br/>2. Architects
                    optimise the building's performance <br/>3. Architects know what
                    builders want. <br/>4. Architects know when builders are lying.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Col>
          </Row>
        </Container>
      </Accordion>
      <Row id="faqmid3"></Row>
    </>
  );
}
