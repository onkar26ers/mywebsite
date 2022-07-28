import { Container, Row, Col } from "react-bootstrap/esm/";
import Topnav from "./Topnav";
import Footer from "./Footer";
import Pages from "./Pages";
import Blogcard from "./Blogcard";
import Blogcard2 from "./BlogCard2";
import Blogcard4 from "./Blogcard4";
import Blogcard3 from "./Blogcard3";
import Blogcard5 from "./Blogcard5";
import Blogcard6 from "./Blogcard6";
import Breadcrumbblog from "./Breadcrumbblog";

export default function Blog() {
  return (
    <>
      <Container fluid>
        <Row>
          <Topnav />
        </Row>
        <Row>
          <Col>
          <Breadcrumbblog/>
          </Col>
        </Row>
        <Row>
          <div class="blogbg">
            <h1 class="title">Blog</h1>
          </div>
        </Row>
        <Row id="blogmiddle">
            <Container>
                <Row>
                <Col md={1}></Col>
                    <Col  md xs={12}><Blogcard/></Col>
                    <Col  md xs={12}><Blogcard2/></Col>
                    <Col  md xs={12}><Blogcard3/></Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </Row>
        <Row id="blogmiddle2">
        {/* <Col md={1}></Col>
            <Col md={3} xs={12} className="mt-3">
            <Blogcard/>
            </Col>
            <Col md={3} xs={12} className="mt-3">
            <Blogcard/>
            </Col>
            <Col md={3} xs={12} className="mt-3">
            <Blogcard/>
            </Col>
            <Col md={1}></Col> */}
            <Container>
                <Row>
                <Col md={1}></Col>
                    <Col  md xs={12}><Blogcard4/></Col>
                    <Col  md xs={12}><Blogcard5/></Col>
                    <Col  md xs={12}><Blogcard6/></Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </Row>
        <Row id="buttonpages">
            <Col md={5}></Col>
            <Col id="pagesbuttongroup"><Pages/></Col>
            <Col md={5}></Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}
