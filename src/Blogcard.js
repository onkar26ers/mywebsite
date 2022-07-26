import Card from "react-bootstrap/Card";
import blog1 from "./blog-1.jpg";

export default function Blogcard() {
  return (
    <>
      <Card id="blogcard">
        <Card.Img variant="top" src={blog1} />
        <Card.Body id="blogbody">
          <Card.Title>
            <a href="#home" id="blogref">
              Maintaining a Beautiful Home with Kids
            </a>
          </Card.Title>
          <Card.Text>
            So if your vision of having that dream family home has been dashed
            to shreds by toy-strewn surfaces and ...
            <br />
            <hr />
            <span className="text-muted">
              &nbsp; &#xb7; 27 July 2022&nbsp; &#xb7; 10 Comment(s)
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
