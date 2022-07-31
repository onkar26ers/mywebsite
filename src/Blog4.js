import Topnav from "./Topnav";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Image,
  Button,
} from "react-bootstrap";
import Footer from "./Footer";
import Categories from "./Categories";
import Tags from "./Tags";
import { FaUserEdit, FaClock } from "react-icons/fa";
import blog4 from "./blog-4.jpg";
import Comment from "./Comment";
import Recentposts2 from "./Recentposts2";

export default function Blog4() {
  return (
    <>
      <Container fluid>
        <Row>
          <Topnav />
        </Row>
        <Row>
          <Col>
            <hr class="crumbhr" />
            <Breadcrumb>
              <Breadcrumb.Item href="/" id="">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
              <Breadcrumb.Item active>
                Top Wall Colours for 2022
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <div class="blogbg">
            <h1 class="title">Blog</h1>
          </div>
        </Row>
        <Row id="blogdetailsmid1"></Row>
        <Row>
          <Col md={1}></Col>
          <Col md={7}>
            <Container>
              <Row className="mt-3">
                <Image src={blog4}></Image>
              </Row>
              <Row className="mt-3">
                <Col>
                  <span id="blogdetailtitle">
                  Top Wall Colours for 2022
                  </span>
                  <br />
                  <span id="blogdetailtime">
                    <FaUserEdit /> Natasha Sanchez / <FaClock /> 11 July 2022
                  </span>
                  <br />
                  <br />
                  <span id="blogdetailstext">
                    So if your vision of having that dream family home has been
                    dashed to shreds by toy-strewn surfaces and stained sofas,
                    take courage: there is hope yet. It may not be easy and it
                    might require some mental shifts and practical
                    readjustments, though if you don't want to given up your
                    beautiful home or your children, read on.
                    <br />
                    <br />
                    1. Redefine 'perfect' First up, remember that a perfect
                    family home is not just about appearances. It's also about
                    creating a retreat where kids feel comfortable and secure at
                    home, where they can be themselves, learn, play and have
                    fun.
                    <br />
                    <br />
                    2. Define adults', kids' and shared zones Most homes are
                    already 'zoned'. On a large scale, this is done in the
                    rather obvious form of rooms: your bedroom is an adults'
                    zone, kids' rooms are clearly the zone of a younger
                    generation and living areas, the kitchen and bathroom are
                    normally shared zones.
                    <br />
                    <br /><br/>
                    Have you found a way to have a perfect home and children
                    too? Spill your secrets in the Comments below, save your
                    favourite images and share this story with other parents who
                    are in a tug-of-war against toys and equipment.
                    <br/><br/><br/><br/><br/>
                  </span>
                  <hr />
                  <Row>
                    <Col><span id="blogdetailstag">Tags </span>
                  <Button variant="light" id="blogdetailsbut" href="#tag1">
                    Designing
                  </Button>
                  <Button variant="light" id="blogdetailsbut" href="#tag1">
                  Wallpaper
                  </Button> </Col>
                    <Col><span id="blogdetailstag">Category </span>
                  <Button variant="light" id="blogdetailsbut" href="#tag1">
                  Interior Design
                  </Button>
                  <Button variant="light" id="blogdetailsbut" href="#tag1">
                  Painting
                  </Button></Col>
                  </Row>    
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={3} xs={12} id="blogcards">
            <Container>
              <Row className="mt-3">
                <Categories />
              </Row>
              <Row className="mt-3">
                <Tags />
              </Row>
              <Row className="mt-3">
                <Recentposts2 />
              </Row>
              <Row className="mt-3">
                <Comment />
              </Row>
            </Container>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row id="blogdetailsmid2"></Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}
