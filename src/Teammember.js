import { useState } from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import member4 from "./member4.jpg";
export default function Teammember() {

  const [progressNow1, setProgressNow1] = useState(0)
  const [progressNow2, setProgressNow2] = useState(0)
  const [progressNow3, setProgressNow3] = useState(0)

  const progressInterval = setInterval(()=>{
    if(document.documentElement.scrollTop > 800){
      const updateProgress1 = setInterval(() => {
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

  

  // if(document.documentElement.scrollTop > 900){
  //   const updateProgress2 = setInterval(() => {
  //     if (progressNow2 <= 60 ){
  //      setProgressNow1(60)
  //     }else{
  //       setProgressNow2(s => s+1)
  //     }
  //    }, 50)
  // }


  // const updateProgress2 = setInterval(() => {
  //   if (progressNow2 <= 60 ){
  //    setProgressNow2(60)
  //   }else{
  //     setProgressNow2(s => s+1)
  //   }
  //  }, 50)
  //  const updateProgress3 = setInterval(() => {
  //   if (progressNow3 <= 95 ){
  //    setProgressNow3(95)
  //   }else{
  //     setProgressNow3(s => s+1)
  //   }
  //  }, 50)

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
                <span class="title8">James Holden</span>
                <br />
                <span class="title7">Chairman</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="#instagram" class="social1">
                  <RiInstagramFill />
                </a>
                <a href="#instagram" class="social1">
                  <FaFacebookSquare />
                </a>
                <a href="#instagram" class="social1">
                  <FaTwitterSquare />
                </a>
                <a href="#instagram" class="social1">
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
        </Row>
        <Row id="membermid3">
          <Col md={5} xs={12}>
            <Row id="title8">
              <Col>Personal Experience</Col>
            </Row>
            <Row id="teamdetailsbody2">
              <Col>
                After 5 years at Kings Designing and 150 projects, James has
                acquired a lot of experience.
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col className="mt-3">
            <Row>
              <Col id="teamprogressname">
                Wallpapering <span id="barspace1">88%</span>
                <br />
                <ProgressBar id="teamprogress" now={progressNow1} />
              </Col>
            </Row>
            <Row>
              <Col  id="teamprogressname">Painting<span id="barspace2">60%</span>
              <br/>
              <ProgressBar  id="teamprogress" now={progressNow2} />
              </Col>
            </Row>
            <Row>
              <Col  id="teamprogressname">Designing<span id="barspace3">95%</span>
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
