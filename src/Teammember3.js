import { useState } from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import member3 from "./images/member3c.jpg";
export default function Teammember3() {
  const [progressNow1, setProgressNow1] = useState(0);
  const [progressNow2, setProgressNow2] = useState(0);
  const [progressNow3, setProgressNow3] = useState(0);

  // const progressInterval = setInterval(()=>{
  setInterval(() => {
    if (document.documentElement.scrollTop > 800) {
      // const updateProgress1 = setInterval(() => {
      setInterval(() => {
        if (progressNow1 <= 95) {
          setProgressNow1(95);
        } else {
          setProgressNow1((s) => s + 1);
        }
        if (progressNow2 <= 80) {
          setProgressNow2(80);
        } else {
          setProgressNow2((s) => s + 1);
        }
        if (progressNow3 <= 99) {
          setProgressNow3(99);
        } else {
          setProgressNow3((s) => s + 1);
        }
      }, 250);
    }
  });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Row className="mt-3">
              <Col>
                <span class="title8" id="sebastian">Sebastian Pham</span>
                <br />
                <span class="title7">CEO</span>
              </Col>
            </Row>
            <Row>
            <Col>
                <a href="https://www.instagram.com/kellywearstler/" target="_blank" rel="noreferrer" class="social1">
                  <RiInstagramFill />
                </a>
                <a href="https://www.facebook.com/Kelly.Wearstler.Inc/" target="_blank" class="social1" rel="noreferrer">
                  <FaFacebookSquare />
                </a>
                <a href="https://twitter.com/kellywearstler?lang=en" target="_blank" class="social1" rel="noreferrer">
                  <FaTwitterSquare />
                </a>
                <a href="https://www.pinterest.com/kellywearstler/" target="_blank" class="social1" rel="noreferrer">
                  <FaPinterestSquare />
                </a>
              </Col>
            </Row>
            <Row id="teamdetailstitle">
              <Col>
                "Whatever the mind can conceive and believe, the mind can
                achieve."
              </Col>
            </Row>
            <Row>
              <Col id="teamdetailsbody">
                Soft-spoken yet meticulous, Sebastian has come to be known for
                his masterfully layered interior compositions and singular
                approach to space, aesthetics, techniques and style.
              </Col>
            </Row>
            <Row id="teamdetailsbody">
              <Col>
                Today, the firm's curriculum vitae is diverse in scope and scale, comprising
                luxury residential interior projects, hotel design,
                architectural consulting, and commercial concepts domestically
                and abroad.
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col md={5} xs={12} id="aboutcenter" className="mt-3">
            <Image src={member3} alt="" width={500}></Image>
          </Col>  
          <Row>
            <Col id="membermid2">
              <hr />
            </Col>
          </Row>
        </Row>
        <Row id="membermid3">
          <Col md={5} xs={12}>
            <Row id="title8">
              <Col>Personal Experience</Col>
            </Row>
            <Row id="teamdetailsbody2">
              <Col>
                After 10 years at Kings Designing and 1000 projects, Sebastian has
                acquired a lot of experience.
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col className="mt-3">
            <Row>
              <Col id="teamprogressname">
                Wallpapering <span id="barspace13">95%</span>
                <br />
                <ProgressBar id="teamprogress" now={progressNow1} />
              </Col>
            </Row>
            <Row>
              <Col id="teamprogressname">
                Painting<span id="barspace23">80%</span>
                <br />
                <ProgressBar id="teamprogress" now={progressNow2} />
              </Col>
            </Row>
            <Row>
              <Col id="teamprogressname">
                Designing<span id="barspace33">99%</span>
                <br />
                <ProgressBar id="teamprogress" now={progressNow3} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
