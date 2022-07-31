import Card from "react-bootstrap/Card";
import blog2 from "./blog-2.jpg";

export default function Blogcard2() {
  return (
    <>
      <Card id="blogcard">
      <Card.Link href="/blog2">
        <Card.Img variant="top" src={blog2} />
        </Card.Link>
        <Card.Body id="blogbody">
          <Card.Title>
            <a href="/blog2" id="blogref">
            3 Ways to Properly Store Paint
            </a>
          </Card.Title>
          <Card.Text>
            Its rare that you will finish a paint project and find you have 
            used exactly the amount of paint you needed for the job. Leftover 
            paint ...
            <br />
            <hr />
            <span className="text-muted">
              &nbsp; &#xb7; 20 July 2022&nbsp; &#xb7; 5 Comment(s)
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
