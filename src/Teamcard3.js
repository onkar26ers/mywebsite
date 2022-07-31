import Card from "react-bootstrap/Card";
import member3a from './member3a.jpg'

export default function Teamcard3() {
  return (
    <>
      <Card id="aboutcard">
        <Card.Link href="/about/sebastian"><Card.Img variant="top" src={member3a} /></Card.Link>
        {/* <Card.Img variant="top" src={member3a} /> */}
        <Card.Body id="blogbody">
          <Card.Title id="teamright">
            <a href="/about/teamdetails" id="aboutref">
              Sebastian Pham
            </a>
          </Card.Title>
          <Card.Footer>
            CEO
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
