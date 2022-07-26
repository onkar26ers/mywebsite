import Card from "react-bootstrap/Card";
import blog4 from "./blog-4.jpg";

export default function Blogcard4() {
  return (
    <>
      <Card id="blogcard">
        <Card.Img variant="top" src={blog4} />
        <Card.Body id="blogbody">
          <Card.Title>
            <a href="#home" id="blogref">
            Top Wall Colours for 2022
            </a>
          </Card.Title>
          <Card.Text>
          The future is bright, and the wall colours are changing! 
          The first thing about revamping ysome flashy colours. Choosing ...
            <br />
            <hr />
            <span className="text-muted">
              &nbsp; &#xb7; 11 June 2022&nbsp; &#xb7; 0 Comment(s)
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
