import Card from "react-bootstrap/Card";
import blog6 from "./blog-6.jpg";

export default function Blogcard6() {
  return (
    <>
      <Card id="blogcard">
        <Card.Img variant="top" src={blog6} />
        <Card.Body id="blogbody">
          <Card.Title>
            <a href="#home" id="blogref">
              How To Find Best Furniture
            </a>
          </Card.Title>
          <Card.Text>
          Whether looking for a key statement piece or to outfit 
          your entire home, you want to buy furniture from a retailer
           with a ...
            <br />
            <hr />
            <span className="text-muted">
              &nbsp; &#xb7; 1 June 2022&nbsp; &#xb7; 2 Comment(s)
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
