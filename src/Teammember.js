// import { useState } from "react";
// import {ProgressBar} from "react-bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import member4 from "./member4.jpg";
import member6 from "./member6b.jpg";
import member3 from "./member3c.jpg";
import member1 from "./member1b.jpg";
export default function Teammember() {
  /*
  const [progressNow1, setProgressNow1] = useState(0)
  const [progressNow2, setProgressNow2] = useState(0)
  const [progressNow3, setProgressNow3] = useState(0)

  // const progressInterval = setInterval(()=>{
    setInterval(()=>{
    if(document.documentElement.scrollTop > 800){
      // const updateProgress1 = setInterval(() => {
        setInterval(() => {
        if (progressNow1 <= 88 ){
         setProgressNow1(88) 
        }else{
          setProgressNow1(s => s+1)
        }
        if (progressNow2 <= 60 ){
          setProgressNow2(60)
         }else{
           setProgressNow2(s => s+1)
         }
         if (progressNow3 <= 95 ){
          setProgressNow3(95)
         }else{
           setProgressNow3(s => s+1)
         }
       }, 250)
       
    }
  })
  */

  return (
    <>
      <Container>
        <Row>
          <Col md={5} xs={12} id="aboutcenter" className="mt-3">
            <Image src={member4} alt="" width={500}></Image>
          </Col>
          <Col md={1}></Col>
          <Col>
            <Row className="mt-3">
              <Col>
                <span class="title8" id="james">
                  James Holden
                </span>
                <br />
                <span class="title7">Chairman</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <a
                  href="https://www.instagram.com/liquid.indonesia/"
                  target="_blank"
                  rel="noreferrer"
                  class="social1"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://www.facebook.com/Liquid.Ind/"
                  target="_blank"
                  class="social1"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://twitter.com/INTERlORS?lang=en"
                  target="_blank"
                  class="social1"
                  rel="noreferrer"
                >
                  <FaTwitterSquare />
                </a>
                <a
                  href="https://www.pinterest.com/liquidindonesia/"
                  target="_blank"
                  class="social1"
                  rel="noreferrer"
                >
                  <FaPinterestSquare />
                </a>
              </Col>
            </Row>
            <Row id="teamdetailstitle">
              <Col>"I help my clients stand out and they help me grow."</Col>
            </Row>
            <Row>
              <Col id="teamdetailsbody">
                The Chairman is responsible for the day-to-day leadership and
                management of the business, risk appetite and annual and
                long-term objectives approved by the Board.
              </Col>
            </Row>
            <Row id="teamdetailsbody">
              <Col>
                The Chairman annually brings forward to the Board both three
                year plans and annual operating plans and delivery and reports
                on progress at frequent and regular intervals.
              </Col>
            </Row>
          </Col>
          <Row>
            <Col id="membermid2">
              <hr />
            </Col>
          </Row>

          <Row>
            <Col>
              <Row className="mt-3">
                <Col>
                  <span class="title8" id="sebastian">
                    Sebastian Pham
                  </span>
                  <br />
                  <span class="title7">CEO</span>
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
                  Today, the firm's curriculum vitae is diverse in scope and
                  scale, comprising luxury residential interior projects, hotel
                  design, architectural consulting, and commercial concepts
                  domestically and abroad.
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

          <Row>
            <Col md={5} xs={12} id="aboutcenter" className="mt-3">
              <Image src={member6} alt="" width={500}></Image>
            </Col>
            <Col md={1}></Col>
            <Col>
              <Row className="mt-3">
                <Col>
                  <span class="title8" id="amelia">
                    Amelia Bale
                  </span>
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
                <Col>
                  "If you cannot do great things, do small things in a great
                  way."
                </Col>
              </Row>
              <Row>
                <Col id="teamdetailsbody">
                  Amelia Bale is the youngest name to have appeared on both the
                  internationally acclaimed Architectural Digest 100 list and to
                  be recognized with an International Award.
                </Col>
              </Row>
              <Row id="teamdetailsbody">
                <Col>
                  Without any formal training, she developed her unique
                  aesthetic , characterized by a mix of classic luxury,
                  old-world romance, and urban cool.
                </Col>
              </Row>
            </Col>
            <Row>
              <Col id="membermid2">
                <hr />
              </Col>
            </Row>
          </Row>

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
                  Reece received his academic training in interior,
                  architectural and graphic design and is the author of five
                  design books.Reece is the first interior designer to teach a
                  MasterClass.
                </Col>
              </Row>
            </Col>
            <Col md={1}></Col>
            <Col md={5} xs={12} id="aboutcenter" className="mt-3">
              <Image src={member1} alt="" width={500}></Image>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
