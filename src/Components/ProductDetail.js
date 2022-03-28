import React from "react";
import "./Assets/Css/Shop.css";
import productimg from "../Components/Assets/Images/product/product.webp";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import { Button } from "@mui/material";

const ProductDetail = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
  };
  return (
    <div className="bw-product-detail">
      <Container className="content-page-detail custom-fluid my-5" fluid>
        <Row className="align-items-center">
          <Col lg={5} md={7} sm={12} xs={12}>
            <Row>
              <Col lg={4} className="d-flex justify-content-center flex-column">
                <Image src={productimg} alt="Product Thumb" className="product-thumb"></Image>
                <Image src={productimg} alt="Product Thumb" className="product-thumb"></Image>
                <Image src={productimg} alt="Product Thumb" className="product-thumb"></Image>
                <Image src={productimg} alt="Product Thumb" className="product-thumb"></Image>
              </Col>
              <Col lg={8}>
                <Slider {...settings}>
                  <div>
                    <Image src={productimg} className="product-main" alt="Product Main"></Image>
                  </div>
                  <div>
                    <Image src={productimg} className="product-main" alt="Product Main"></Image>
                  </div>
                  <div>
                    <Image src={productimg} className="product-main" alt="Product Main"></Image>
                  </div>
                </Slider>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={5} sm={12} xs={12}>
            <div className="detail-info">
              <div className="pr-relative">
                <h2 className="dproduct-title mb-5">14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set Engagement Ring</h2>
                <div className="dproduct-price mb-5">
                  <del className="enj-product-price-compare me-3">$290.00 USD</del>
                  <ins className="enj-product-price engoj_price_main">
                    $285.00 USD
                  </ins>
                </div>
                <div className="pd_summary">
                  <p className="mt-3 mb-0">
                    Calf-length dress in airy, textured cotton fabric with a
                    printed pattern Sed hendrerit. Cras risus ipsum, faucibus
                    ut, ullamcorper id, varius estibulum ante ipsum primis in
                    faucibus Product Details Inspired by traditional
                    blockprinting techniques in India, our own in-house design
                    is the vibrant pattern that every closet needs. That's
                    why...
                  </p>
                </div>
                <div className="btn-addwhlist">
                <Button variant="contained" className="box-shadow inline-block maxus-product__wishlist wish text-center">Wishlist</Button>
                <Button variant="contained" className="box-shadow inline-block maxus-product__wishlist wish text-center mx-5">Add To Cart</Button>
                </div>
                <ul className="product-meta-info">
                  <li>
                    <div className="item-product-meta-info product-category-info">
                      <label>Categories :</label>
                      <a href="/collections/frontpage">Home page, </a>
                      <a href="/collections/new">New </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12} xs={12}>
            <Row>
              <div className="col-lg-12 col-md-4">
                <div className="content_box ">
                  <div className="content_text">
                    <h3 className="title">Why Choose Us ?</h3>
                    <div className="text">
                      Official Herschel stockist Australian warranty assistance
                      &amp; support Australian shipping &amp; returns.Customer
                      first experience environmentally focused
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-4">
                <div className="content_box ">
                  <div className="content_text">
                    <h3 className="title">Returns</h3>
                    <div className="text">
                      Return this product within 100 days if you change your
                      mind. Get a refund/replacement &amp; free return shipping
                      if it arrives damaged or not as described
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-4">
                <div className="content_box">
                  <div className="content_text">
                    <h3 className="title">Shipping</h3>
                    <div className="text">
                      Free if stated near price. $9.95 Australia wide (up to 10
                      items). $18.95 for Express Post (generally 1 business
                      day).
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
