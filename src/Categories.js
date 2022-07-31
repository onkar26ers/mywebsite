import { Card } from "react-bootstrap";

export default function Categories() {
  return (
    <>
      <Card id="blogdetailcard">
        <Card.Header id="blogdetailsheader">Categories</Card.Header>
        <Card.Body id="addressbody">
          <Card.Text>
            <a href="#category1" id="blogdetaila">Room Wallpapers <br/><br/></a>
            <a href="#category2" id="blogdetaila">Wall Painting <br/><br/></a>
            <a href="#category3" id="blogdetaila">Outdoor Design <br/><br/></a>
            <a href="#category4" id="blogdetaila">Interior Designing <br/><br/></a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
