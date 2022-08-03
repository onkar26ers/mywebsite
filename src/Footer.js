import { Container, Row, Col } from "react-bootstrap";
import logo from "./images/logo.png";
import { FaTwitterSquare, FaFacebookSquare, FaPinterestSquare, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"
import {BsMailbox2} from "react-icons/bs"

export default function Footer() {
  return (
    <>
      <Container>
        <Row fluid id="top">
          <Col md={1}></Col>
            <Col xs={6} md className="mb-3">
              <img
                src={logo}
                alt="Logo"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              &nbsp;<span class="name">Kings-Designing</span>
              <br /><br/>
              We work with a passion of taking <br />
              challenges and creating new ones <br />
              in advertising sector.
              <br />
              <br />
              <a href="https://www.instagram.com/liquid.indonesia/" target="_blank" class="socials" rel="noreferrer">< RiInstagramFill/></a>
              <a href="https://www.facebook.com/Liquid.Ind/" target="_blank" class="socials" rel="noreferrer"><FaFacebookSquare/></a>
              <a href="https://twitter.com/INTERlORS?lang=en" target="_blank" class="socials" rel="noreferrer"><FaTwitterSquare/></a>
              <a href="https://www.pinterest.com/liquidindonesia/" target="_blank" class="socials" rel="noreferrer"><FaPinterestSquare/></a>
            </Col>
            <Col xs={6} md className="mb-3">
            <span class="name">Explore</span>
            <hr class="footerhr"/>
              &#xfe65;<a href="/about" id="footera">About</a> <br />
              &#xfe65;<a href="/contact" id="footera">Contact</a>
              <br /> &#xfe65;<a href="/about/teamdetails" id="footera">Our Team</a>
              <br /> &#xfe65;Our Services
              <br /> &#xfe65;Latest Projects
              <br />
              &#xfe65;Pricing and Plans
            </Col>
            <Col xs={6} md className="mb-3">
            <span class="name">Services</span>
              <hr class="footerhr"/>
              &#xfe65;Room Wallpapers
              <br />
              &#xfe65;Wall Painting
              <br />
              &#xfe65;Wall Sheets
              <br />
              &#xfe65;Outdoor Design
              <br />
              &#xfe65;PVC Panels
              <br />
              &#xfe65;Interior Designing
            </Col>
            <Col xs={6} md className="mb-3">
            <span class="name">Contact</span>
              <hr  class="footerhr"/>
              <FaPhoneSquareAlt/>&nbsp; Call anytime
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(+91) 7845129850
              <br />
              <br />
              <BsMailbox2/>&nbsp; Send email
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kings.designing@gmail.com
              <br />
              <br />
              <FaMapMarkerAlt/>&nbsp; Visit Office
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Port Antoniettafort,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Czech Republic
            </Col>
            <Col md={1}></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <div class="footer">© Copyright 2022 by Kings Designing</div>
        </Row>
      </Container>
    </>
  );
}
