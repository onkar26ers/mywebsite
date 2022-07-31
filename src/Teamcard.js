import Card from "react-bootstrap/Card";
import member1 from './member1.jpg'

export default function Teamcard() {
  return (
    <>
      <Card id="aboutcard">
        <Card.Link href="/about/owen"><Card.Img variant="top" src={member1}></Card.Img></Card.Link>
        {/* <Card.Img variant="top" src={member1}></Card.Img> */}
        <Card.Body id="blogbody">
          <Card.Title id="teamright">
            <a href="/about/owen" id="aboutref">
            Owen Reece
            </a>
          </Card.Title>
          <Card.Footer>
            Designer
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
