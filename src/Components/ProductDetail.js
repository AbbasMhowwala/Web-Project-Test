import React from "react";
import "./Assets/Css/Shop.css";
import productimg from "../Components/Assets/Images/product/product.webp";
import productimg2 from "../Components/Assets/Images/product/product2.jpg";
import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Helmet from "react-helmet";
import { Box } from "@mui/system";
import SliderImage from "react-zoom-slider";
const ProductDetail = () => {
  const slidesImages = [
    {
      id: 1,
      image: productimg,
    },
    {
      id: 2,
      image: productimg2,
    },
    {
      id: 3,
      image: productimg,
    },
    {
      id: 4,
      image: productimg,
    },
  ];
  const materials = [
    "14k White Gold",
    "18k White Gold",
    "14k Yellow Gold",
    "18k Yellow Gold",
    "14k Rose Gold",
    "18k Rose Gold",
    "Platinum",
  ];
  const size = ["3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div className="bw-product-detail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Product List - Belgium Webnet- Making these Extraordinary Diamonds
          Attainable
        </title>
        <meta
          name="description"
          content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide."
        />
      </Helmet>
      <Container className="content-page-detail custom-fluid my-5">
        <Row className="align-items-center">
          <Col lg={5} md={7} sm={12} xs={12}>
            <SliderImage
              data={slidesImages}
              showDescription={true}
              direction="right"
            />
          </Col>
          <Col lg={4} md={5} sm={12} xs={12}>
            <div className="detail-info">
              <div className="pr-relative">
                <h2 className="dproduct-title mb-3">
                  14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set Engagement
                  Ring
                </h2>
                <small className="mb-3 d-block">
                  <b>SKU: 84111</b>
                </small>
                <div className="dproduct-price mb-5">
                  <ins className="enj-product-price engoj_price_main text-decoration-none">
                    <b>$285.00 USD</b>
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
                <div className="select my-3">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Material
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="material-select"
                      >
                        {materials.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ minWidth: 120 }} className="my-3">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Ring Size
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="material-select"
                      >
                        {size.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="btn-addwhlist">
                  <Button
                    variant="contained"
                    className="box-shadow inline-block maxus-product__wishlist wish text-center"
                  >
                    Wishlist
                  </Button>
                  <Button
                    variant="contained"
                    className="box-shadow inline-block maxus-product__wishlist wish text-center mx-3"
                  >
                    Add To Cart
                  </Button>
                </div>
                <ul className="product-meta-info">
                  <li>
                    <div className="item-product-meta-info product-category-info">
                      <label>Categories :</label>
                      <a to="/">Engagement Ring, </a>
                      <a to="/">Solitaire </a>
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
