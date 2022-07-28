import { Carousel, Button } from "react-bootstrap";
// import home3 from "./home3a.jpg";
// import home4 from "./home4a.jpg";
import home6 from "./home6e.jpg";
import home10 from "./home10a.jpg";
import home11 from "./home11.jpg";

export default function Homecarousel() {
  return (
    <>
      <Carousel fade interval={2500} indicators={false}>
      <Carousel.Item>
          <img className="d-block w-100" src={home10} alt="" />
            <Carousel.Caption>
                <h1 class="homecarouseltitle1">WELCOME TO KINGS DESIGNING</h1>
                <h2 class="homecarouseltitle2">
                  PERFECT INTERIOR DESIGNING FOR YOU
                </h2>
                <Button id="carousalbutton" href="/about">Discover more</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={home6} alt="" />
            <Carousel.Caption>
                <h1 class="homecarouseltitle1">WELCOME TO KINGS DESIGNING</h1>
                <h2 class="homecarouseltitle2">
                  PERFECT INTERIOR DESIGNING FOR YOU
                </h2>
                <Button id="carousalbutton" href="/about">Discover more</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={home11} alt="" />
            <Carousel.Caption>
                <h1 class="homecarouseltitle1">WELCOME TO KINGS DESIGNING</h1>
                <h2 class="homecarouseltitle2">
                  PERFECT INTERIOR DESIGNING FOR YOU
                </h2>
                <Button id="carousalbutton" href="/about">Discover more</Button>
            </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-block w-100" src={home3} alt="" />
            <Carousel.Caption>
                <h1 class="homecarouseltitle1">WELCOME TO KINGS DESIGNING</h1>
                <h2 class="homecarouseltitle2">
                  PERFECT INTERIOR DESIGNING FOR YOU
                </h2>
                <Button id="carousalbutton" href="/about">Discover more</Button>
            </Carousel.Caption>
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img className="d-block w-100" src={home4} alt="" />
            <Carousel.Caption>
                <h1 class="homecarouseltitle1">WELCOME TO KINGS DESIGNING</h1>
                <h2 class="homecarouseltitle2">
                  PERFECT INTERIOR DESIGNING FOR YOU
                </h2>
                <Button id="carousalbutton" href="/about">Discover more</Button>
            </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}
