import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import rings from "../Assets/Images/rings.png";
import bracelet from "../Assets/Images/bracelet.png";
import necklace from "../Assets/Images/necklace.png";
import earring from "../Assets/Images/earring.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Collection = () => {
  return (
    <div className="bw-collection">
      <Container className="custom-container">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} className="mb-5">
            <h1 className="main-heading text-center">Explore Our Collection</h1>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6}>
            <div className="explore-cat">
              <div className="img-box">
                <Image src={rings} alt="Rings"></Image>
              </div>
              <div className="explore-content text-center m-3">
                  <h3 className="cat-heading mb-3">Rings</h3>
                  <Button variant="contained" color="primary" className="explore-btn d-block w-100"><Link to="/">Shop Rings</Link></Button>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6}>
            <div className="explore-cat">
              <div className="img-box">
                <Image src={bracelet} alt="Bracelet"></Image>
              </div>
              <div className="explore-content text-center m-3">
                  <h3 className="cat-heading mb-3">Bracelets</h3>
                  <Button variant="contained" color="primary" className="explore-btn d-block w-100"><Link to="/">Shop Bracelet</Link></Button>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6}>
            <div className="explore-cat">
              <div className="img-box">
                <Image src={necklace} alt="Necklace"></Image>
              </div>
              <div className="explore-content text-center m-3">
                  <h3 className="cat-heading mb-3">Necklaces</h3>
                  <Button variant="contained" color="primary" className="explore-btn d-block w-100"><Link to="/">Shop Necklace</Link></Button>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6}>
            <div className="explore-cat">
              <div className="img-box">
                <Image src={earring} alt="Earring"></Image>
              </div>
              <div className="explore-content text-center m-3">
                  <h3 className="cat-heading mb-3">Earrings</h3>
                  <Button variant="contained" color="primary" className="explore-btn d-block w-100"><Link to="/">Shop Earring</Link></Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Collection;
