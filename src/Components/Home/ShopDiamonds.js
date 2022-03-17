import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import round from "../Assets/Images/diamonds/round.png";
import princess from "../Assets/Images/diamonds/princess.png";
import cushion from "../Assets/Images/diamonds/cushion.png";
import emerald from "../Assets/Images/diamonds/emerald.png";
import oval from "../Assets/Images/diamonds/oval.png";
import radiant from "../Assets/Images/diamonds/radiant.png";
import asscher from "../Assets/Images/diamonds/asscher.png";
import marquise from "../Assets/Images/diamonds/marquise.png";
import heart from "../Assets/Images/diamonds/heart.png";
import pear from "../Assets/Images/diamonds/pear.png";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ShopDiamond = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    accessibility: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          asNavFor: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="bw-collection">
      <Container className="custom-container">
        <Row className="align-items-center">
          <Col xl={12} lg={12} md={12} sm={12} className="mb-5">
            <h1 className="main-heading text-center">Shop Diamonds By Shape</h1>
          </Col>
          <Slider {...settings} centerMode={true} className="bw-diamonds-slider">
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={round} alt="Round" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Round</h3>
                <div className="shop-content text-center m-3">                  
                  <p>Cut with the optimum light refraction and sparkle.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Round Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={princess} alt="Princess" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Princess</h3>
                <div className="shop-content text-center m-3">                  
                  <p>A contemporary cut, with optimal fire and brilliance.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Princess Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={cushion} alt="Cushion" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Cushion</h3>
                <div className="shop-content text-center m-3">                  
                  <p> With soft corners, a beautiful alternative to a round or princess cut.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Cushion Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={emerald} alt="Emerald" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Emerald</h3>
                <div className="shop-content text-center m-3">                  
                  <p>This stylish cut creates rectangular facets that beautifully accentuate the stone's clarity.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Emerald Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={oval} alt="Oval" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Oval</h3>
                <div className="shop-content text-center m-3">                  
                  <p>Optimises carat, giving the illusion of a larger stone.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Oval Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={radiant} alt="Radiant" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Radiant</h3>
                <div className="shop-content text-center m-3">                  
                  <p>The most brilliant of the rectangular cut diamonds.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Radiant Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={asscher} alt="Asscher" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Asscher</h3>
                <div className="shop-content text-center m-3">                  
                    <p>This unique shape is a square emerald, with linear facets.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Asscher Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={marquise} alt="Marquise" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Marquise</h3>
                <div className="shop-content text-center m-3">                  
                  <p>Elongate the finger of the wearer maintaining an appearance of great size and grandeur.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Marquise Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={heart} alt="Heart" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Heart</h3>
                <div className="shop-content text-center m-3">                  
                  <p>A rare cut that is a true testament of your relationship.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Heart Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="shop-diamond">
                <div className="img-box">
                  <Image src={pear} alt="Pear" className="d-inline-block shapes-img"></Image>
                </div>
                <h3 className="diamond-heading mb-3">Pear</h3>
                <div className="shop-content text-center m-3">                  
                  <p>A rare cut that is a true testament of your relationship.</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn d-block w-100"
                  >
                    <Link to="/">Shop Pear Diamonds</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Slider>
        </Row>
      </Container>
    </div>
  );
};

export default ShopDiamond;
