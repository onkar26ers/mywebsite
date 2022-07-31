import { useState } from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import member6 from "./member6b.jpg";
export default function Teammember2() {

  const [progressNow1, setProgressNow1] = useState(0)
  const [progressNow2, setProgressNow2] = useState(0)
  const [progressNow3, setProgressNow3] = useState(0)

  // const progressInterval = setInterval(()=>{
    setInterval(()=>{
    if(document.documentElement.scrollTop > 800){
      // const updateProgress1 = setInterval(() => {
        setInterval(() => {
        if (progressNow1 <= 98 ){
         setProgressNow1(98) 
        }else{
          setProgressNow1(s => s+1)
        }
        if (progressNow2 <= 79 ){
          setProgressNow2(79)
         }else{
           setProgressNow2(s => s+1)
         }
         if (progressNow3 <= 90 ){
          setProgressNow3(90)
         }else{
           setProgressNow3(s => s+1)
         }
       }, 250)
       
    }
  })

  return (
    <>
      <Container>
        <Row>
          <Col md={5} xs={12} id="aboutcenter" className="mt-3">
            <Image src={member6} alt="" width={500}></Image>
          </Col>
          <Col md={1}></Col>
          <Col>
            <Row className="mt-3">
              <Col>
                <span class="title8" id="amelia">Amelia Bale</span>
                <br />
                <span class="title7">Designer</span>
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
              <Col>"If you cannot do great things, do small things in a great way."</Col>
            </Row>
            <Row>
              <Col id="teamdetailsbody">
                Amelia Bale is the youngest name to have appeared on both the
                internationally acclaimed Architectural Digest 100 list and
                to be recognized with an International Award.
              </Col>
            </Row>
            <Row id="teamdetailsbody">
              <Col>
                Without any formal training, she developed her unique aesthetic
                , characterized by a mix of classic luxury, old-world romance, and
                urban cool.
              </Col>
            </Row>
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
                After 6 years at Kings Designing and 500 projects, Amelia has
                acquired a lot of experience.
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col className="mt-3">
            <Row>
              <Col id="teamprogressname">
                Wallpapering <span id="barspace12">98%</span>
                <br />
                <ProgressBar id="teamprogress" now={progressNow1} />
              </Col>
            </Row>
            <Row>
              <Col  id="teamprogressname">Painting<span id="barspace22">79%</span>
              <br/>
              <ProgressBar  id="teamprogress" now={progressNow2} />
              </Col>
            </Row>
            <Row>
              <Col  id="teamprogressname">Designing<span id="barspace32">90%</span>
              <br/>
              <ProgressBar id="teamprogress" now={progressNow3}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
