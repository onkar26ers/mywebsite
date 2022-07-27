import Card from "react-bootstrap/Card";
import member1 from './member1.jpg'

export default function Teamcard() {
  return (
    <>
      <Card id="aboutcard">
        <Card.Img variant="top" src={member1} />
        <Card.Body id="blogbody">
          <Card.Title id="teamright">
            <a href="/about/teamdetails" id="aboutref">
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
