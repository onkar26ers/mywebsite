import React from "react";
import { Container, Row, Col, Modal, Placeholder } from "react-bootstrap/esm/";
import { FaYoutube } from "react-icons/fa";
import Topnav from "./Topnav";
import Footer from "./Footer";
// import Pages from "./Pages";
import Aboutdetails from "./Aboutdetails";
import Abouttrusted from "./Abouttrusted";
import Aboutteam from "./Aboutteam";
import Abouttable from "./Abouttable";
import Breadcrumbabout from "./Breadcrumbabout";

function YouTubeModal(props) {
  return (
    <Modal {...props} centered dialogClassName="ytmodal">
      <iframe
        width="854"
        height="480"
        src="https://www.youtube.com/embed/O41Nm6l0sbY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Modal>
  );
}

export default function About() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Container fluid>
        <Row>
          <Topnav />
        </Row>
        <Row>
          <Col>
            <Breadcrumbabout />
          </Col>
        </Row>
        <Row>
          <div class="aboutbg">
            <h1 class="titleabout">About</h1>
          </div>
        </Row>
        <Row id="aboutmid1">
          <Col md={1}></Col>
          <Col>
            <Aboutdetails />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col>
            <Abouttrusted />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <div class="aboutbg2">
            <Row>
              <Col md={1}></Col>
              <Col md={6} id="ytabout">
                <YouTubeModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <Placeholder animation="glow">
                  <Placeholder><button id="ytbut" onClick={() => setModalShow(true)}>
                  <span class="yt">
                    <FaYoutube />
                  </span>
                </button></Placeholder>
                </Placeholder>
                

                <h1 class="titleabout2">Leadeing in Interior Design Market</h1>
              </Col>
              <Col md={4} id="cards" className="mt-3">
                <Abouttable />
              </Col>
              <Col md={1}></Col>
            </Row>
          </div>
        </Row>
        <Row id="aboutmid3">
          <Col md={1}></Col>
          <Col md={10}>
            <Aboutteam />
          </Col>
          <Col md={1}></Col>
        </Row>
        {/* <Row id="buttonpages">
          <Col md={5}></Col>
          <Col id="pagesbuttongroup">
            <Pages />
          </Col>
          <Col md={5}></Col>
        </Row> */}
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}
