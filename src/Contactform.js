import { Button, Form, Row, Col } from "react-bootstrap";
export default function Contactform() {
  return (
    <>
      <Form>
        <Row>
          <span class="title1">CONTACT US</span>
          <br />
          <span class="title2">Feel Free to Write</span>
          <hr />
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control
                type="text"
                placeholder="Your name"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Email Address" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Control type="tel" placeholder="Phone number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Control type="tel" placeholder="Subject" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Write a message"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="dark"
              type="submit"
              href=""
              size="lg"
              className="mb-3"
            >
              Send a Message
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
