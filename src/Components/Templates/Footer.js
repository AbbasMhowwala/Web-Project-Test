import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import wlogo from "../Assets/Images/wlogo.png";
import Copyrigt from "./Copyright";
const Footer = () => {
  return (
    <div className="bw-footer">
      <Container>
        <Row>
          <Col xl={3} lg={3} md={6} sm={6} xs={12}>
            <div className="bw-footer-info">
              <Image
                className="img-fluid mb-3"
                src={wlogo}
                alt="Logo Footer"
              ></Image>
              <p className="footer-info">
                Belgium WebNet in the field of the Diamond industry with an
                experience of over 25 years. We revolutionized the industry with
                a disruptive online business model.
                <Link to="/about">Read More</Link>
              </p>
            </div>
          </Col>
          <Col xl={2} lg={2} md={3} sm={4} xs={12}>
            <div className="bw-list">
              <h3>Infomation</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={2} lg={2} md={3} sm={4} xs={12}>
            <div className="bw-list">
              <h3>Infomation</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={2} lg={2} md={3} sm={4} xs={12}>
            <div className="bw-list">
              <h3>Infomation</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={2} lg={2} md={3} sm={4} xs={12}>
            <div className="bw-list">
              <h3>Infomation</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>        
      </Container>
      <Copyrigt />
    </div>
  );
};

export default Footer;
