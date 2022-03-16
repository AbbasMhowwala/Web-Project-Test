import React from "react";
import { Container, Row } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import slide1 from "../Assets/Images/slide1.jpg";
import slide2 from "../Assets/Images/slide2.jpg";
import slide3 from "../Assets/Images/slide3.jpg";
const Slider = () => {
  return (
    <div className="hero-slider">
      <div className="hero-img">
        <Container fluid className="p-0">
          <Row className="m-auto w-100">
            <AwesomeSlider bullets={false} className="slider-bw p-0">
              <div data-src={slide1} />
              <div data-src={slide2} />
              <div data-src={slide3} />
            </AwesomeSlider>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Slider;
