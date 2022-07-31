import { Card } from "react-bootstrap";

export default function Recentposts2() {
  return (
    <>
      <Card id="blogdetailcard">
        <Card.Header id="blogdetailsheader">Recent Posts</Card.Header>
        <Card.Body id="addressbody">
          <Card.Text>
            <a href="/blog1" class="post"><span class="posthead">Maintaining a Beautiful Home with Kids</span><br/>27 July, 2022</a>
            <hr/>
            <a href="/blog2" class="post"><span class="posthead">3 Ways to Properly Store Paint</span> <br/>20 July, 2022</a>
            <hr/>
            <a href="/blog3" class="post"><span class="posthead">House Renovating</span> <br/>11 June, 2022</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
