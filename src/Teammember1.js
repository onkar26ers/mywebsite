import { useState } from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import member1 from "./images/member1b.jpg";
export default function Teammember1() {
  const [progressNow1, setProgressNow1] = useState(0);
  const [progressNow2, setProgressNow2] = useState(0);
  const [progressNow3, setProgressNow3] = useState(0);

  //   const progressInterval = setInterval(()=>{
  setInterval(() => {
    if (document.documentElement.scrollTop > 800) {
      //   const updateProgress1 = setInterval(() => {
      setInterval(() => {
        if (progressNow1 <= 99) {
          setProgressNow1(99);
        } else {
          setProgressNow1((s) => s + 1);
        }
        if (progressNow2 <= 99) {
          setProgressNow2(99);
        } else {
          setProgressNow2((s) => s + 1);
        }
        if (progressNow3 <= 95) {
          setProgressNow3(95);
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
                <span class="title8">Owen Reece</span>
                <br />
                <span class="title7">Designer</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <a
                  href="https://www.instagram.com/kellywearstler/"
                  target="_blank"
                  rel="noreferrer"
                  class="social1"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://www.facebook.com/Kelly.Wearstler.Inc/"
                  target="_blank"
                  class="social1"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://twitter.com/kellywearstler?lang=en"
                  target="_blank"
                  class="social1"
                  rel="noreferrer"
                >
                  <FaTwitterSquare />
                </a>
                <a
                  href="https://www.pinterest.com/kellywearstler/"
                  target="_blank"
                  class="social1"
                  rel="noreferrer"
                >
                  <FaPinterestSquare />
                </a>
              </Col>
            </Row>
            <Row id="teamdetailstitle">
              <Col>"Genius is 1% inspiration, and 99% perspiration."</Col>
            </Row>
            <Row>
              <Col id="teamdetailsbody">
                Owen Reece, is an American designer creating multi-faceted,
                experiential residential, hospitality, commercial and retail
                environments as well as lifestyle product designs.
              </Col>
            </Row>
            <Row id="teamdetailsbody">
              <Col>
                Reece received his academic training in interior, architectural
                and graphic design and is the author of five design
                books.Reece is the first interior designer to teach a
                MasterClass.
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col md={5} xs={12} id="aboutcenter" className="mt-3">
            <Image src={member1} alt="" width={500}></Image>
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
                After 3 years at Kings Designing and 550 projects, Owen has
                acquired a lot of experience.
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col className="mt-3">
            <Row>
              <Col id="teamprogressname">
                Wallpapering <span id="barspace11">99%</span>
                <br />
                <ProgressBar id="teamprogress" now={progressNow1} />
              </Col>
            </Row>
            <Row>
              <Col id="teamprogressname">
                Painting<span id="barspace21">99%</span>
                <br />
                <ProgressBar id="teamprogress" now={progressNow2} />
              </Col>
            </Row>
            <Row>
              <Col id="teamprogressname">
                Designing<span id="barspace31">95%</span>
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
