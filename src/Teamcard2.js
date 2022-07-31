import Card from "react-bootstrap/Card";
import member6a from './member6a.jpg'

export default function Teamcard2() {
  return (
    <>
      <Card id="aboutcard">
        <Card.Link href="/about/amelia"><Card.Img variant="top" src={member6a} /></Card.Link>
        {/* <Card.Img variant="top" src={member6a} /> */}
        <Card.Body id="blogbody">
          <Card.Title id="teamright">
            <a href="/about/teamdetails" id="aboutref">
            Amelia Bale
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
