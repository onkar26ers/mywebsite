import { Card } from "react-bootstrap";

export default function Recentposts() {
  return (
    <>
      <Card id="blogdetailcard">
        <Card.Header id="blogdetailsheader">Recent Posts</Card.Header>
        <Card.Body id="addressbody">
          <Card.Text>
            <a href="/blog4" class="post"><span class="posthead">Top Wall Colours for 2022</span><br/>11 June, 2022</a>
            <hr/>
            <a href="/blog5" class="post"><span class="posthead">House Accessories</span> <br/>5 June, 2022</a>
            <hr/>
            <a href="/blog6" class="post"><span class="posthead">How to Find Best Furniture</span> <br/>1 June, 2022</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
