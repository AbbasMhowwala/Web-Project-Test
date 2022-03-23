import React from "react";
import { Container, Image, Row } from "react-bootstrap";
// import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import slide1 from "../Assets/Images/slide1.jpg";
import slide2 from "../Assets/Images/slide2.jpg";
import slide3 from "../Assets/Images/slide3.jpg";
import Carousel from 'react-bootstrap/Carousel'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="hero-slider">
      <div className="hero-img">
        <Container fluid className="p-0">
          <Row className="m-auto w-100">
            {/* <AwesomeSlider bullets={false} className="slider-bw p-0">
              <div data-src={slide1} />
              <div data-src={slide2} />
              <div data-src={slide3} />
            </AwesomeSlider> */}
            <Carousel fade className="p-0" interval={1500} slide={true} touch={true} keyboard={true}>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1 className="slider-title">Engagement Rings</h1>
                  <p>
                  Discover our unique Engagement Rings collection
                  </p>
                  <Button variant="contained" color="primary" className="slider-btn"><Link to="/about">Shop Engagement Rings</Link></Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h1 className="slider-title">Perfect Symbol of Love</h1>
                  <p>
                  Explore the latest Wedding collection
                  </p>
                  <Button variant="contained" color="primary" className="slider-btn"><Link to="/about">Shop Wedding Bands</Link></Button>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={slide3 }
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h1 className="slider-title">Fine Jewelry</h1>
                  <p>
                  Explore the latest Fine Jewelry
                  </p>
                  <Button variant="contained" color="primary" className="slider-btn"><Link to="/about">Shop Fine Jewelry</Link></Button>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Slider;
