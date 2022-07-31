import { Card, Button } from "react-bootstrap";

export default function Tags() {
  return (
    <>
      <Card id="blogdetailcard">
        <Card.Header id="blogdetailsheader">Tags</Card.Header>
        <Card.Body id="addressbody">
          <Card.Text>
            <Button variant="light" id="blogbut" href="#tag1">Decor</Button>
            <Button variant="light" id="blogbut"href="#tag2">Designing</Button>
            <Button variant="light" id="blogbut"href="#tag3">Painting</Button>
            <br/><br/>
            <Button variant="light" id="blogbut"href="#tag4">Realism</Button>
            <Button variant="light" id="blogbut"href="#tag5">Wallpaper</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
