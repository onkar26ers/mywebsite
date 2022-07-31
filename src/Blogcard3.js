import {Card, Badge} from "react-bootstrap";
import {BiTrendingUp} from 'react-icons/bi';
import blog3 from "./blog-3.jpg";

export default function Blogcard3() {
  return (
    <>
      <Card id="blogcard">
      <Card.Link href="/blog3">
        <Card.Img variant="top" src={blog3} />
        </Card.Link>
        <Card.Body id="blogbody">
          <Card.Title>
            <a href="/blog3" id="blogref">
              House Renovating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Badge bg="danger">
                <BiTrendingUp/>
              </Badge>
            </a>
          </Card.Title>
          <Card.Text>
            With time we are all moving towards a better lifestyle, may it be in
            terms of our clothing or food preferences, we ...
            <br />
            <hr />
            <span className="text-muted">
              &nbsp; &#xb7; 11 June 2022&nbsp; &#xb7; 20 Comment(s)
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
