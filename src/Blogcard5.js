import Card from "react-bootstrap/Card";
import blog5 from "./blog-5b.jpg";

export default function Blogcard5() {
  return (
    <>
      <Card id="blogcard">
        <Card.Img variant="top" src={blog5} />
        <Card.Body id="blogbody">
          <Card.Title>
            <a href="#home" id="blogref">
              House Accessories
            </a>
          </Card.Title>
          <Card.Text>
          What would a room, or an entire home for that matter, 
          be without accessories? Can you even imagine it? We certainly 
          cant! In our eyes, ...
            <br />
            <hr />
            <span className="text-muted">
              &nbsp; &#xb7; 5 June 2022&nbsp; &#xb7; 7 Comment(s)
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
