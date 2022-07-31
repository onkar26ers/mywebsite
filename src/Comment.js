import { Card, Button, Modal, Form } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { React, useState } from "react";

export default function Comment() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card id="blogdetailcard">
        <Card.Header id="blogdetailsheader">
          Comments{" "}
          <Button onClick={handleShow} id="commentbut">
            <GoPlus />
          </Button>
        </Card.Header>
        <Card.Body id="addressbody">
          <Card.Text>
            <span class="posthead">Khrystle Parsely</span>
            <br />
            Excellent Blog !
            <hr />
            <span class="posthead">Kwan Brick</span> <br />
            Very Insightful :&#x29;
            <hr />
            <span class="posthead">Luca Tim</span> <br />
            Waste of my 10 minutes +_+
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add a Comment</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="dark" onClick={handleClose}>
        Send
      </Button>
    </Modal.Footer>
  </Modal>
    </>
  );
}
