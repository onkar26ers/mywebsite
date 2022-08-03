import { Container, Row, Col, Image, Carousel, Button, ButtonGroup } from "react-bootstrap";
import gallery1 from "./images/gallery1.jpg";
import gallery2 from "./images/gallery2.jpg";
import gallery3 from "./images/gallery3.jpg";
import gallery4 from "./images/gallery4.jpg";
import gallery5 from "./images/gallery5.jpg";
import gallery6 from "./images/gallery6.jpg";
import gallery7 from "./images/gallery7.jpg";
import gallery8 from "./images/gallery8.jpg";
import gallery9 from "./images/gallery9.jpg";
import gallery10 from "./images/gallery10.jpg";
import gallery11 from "./images/gallery11.jpg";
import gallery12 from "./images/gallery12.jpg";
import gallery13 from "./images/gallery13.jpg";
import gallery14 from "./images/gallery14.jpg";
import gallery15 from "./images/gallery15.jpg";
import gallery16 from "./images/gallery16.jpg";
import { useState } from "react";

export default function Gallery() {
  
    const[value, setValue] = useState(0);
    const[value2, setValue2] = useState(true);
    const[value3, setValue3] = useState(false);
    function page1(){
        setValue(1)
        setValue2(false)
        setValue3(true)

    }
    function page2(){
        setValue(0)
        setValue2(true)
        setValue3(false)
    }
  
    return (
    <>
      <Container fluid>
        <Row id="gallerymid1" className="justify-content-md-center">
          SUCCESSFUL PROJECTS
        </Row>
        <Row id="gallerymid2" className="justify-content-md-center">
          Gallery
        </Row>
      </Container>
      <Row id="gallerymid4"></Row>
      <Container fluid className="gx-0">
      <Carousel  indicators={false} activeIndex={value} interval={null} controls={false}>
        <Carousel.Item>
          <Row>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery1} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery2} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery3} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery4} fluid id="gallerymid3"></Image>
            </Col>
          </Row>
          <Row>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery5} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery6} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery7} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery8} fluid id="gallerymid3"></Image>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery9} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery10} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery11} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery12} fluid id="gallerymid3"></Image>
            </Col>
          </Row>
          <Row>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery13} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery14} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery15} fluid id="gallerymid3"></Image>
            </Col>
            <Col md={3} className={"gx-0"}>
              <Image src={gallery16} fluid id="gallerymid3"></Image>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      </Container>
      <Row  id="gallerymid4"></Row>
      




      <Container>
        <Row className="mt-3 justify-content-md-center">
            <ButtonGroup id="gallerybut">
            <Button id="gallerybut2" variant="outline-dark" active={value2} onClick={page2}>1</Button>
            <Button id="gallerybut2" variant="outline-secondary" active={value3} onClick={page1}>2</Button>
            </ButtonGroup>    
        </Row>
      </Container>
      
      
    </>
  );
}
