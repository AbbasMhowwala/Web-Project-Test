import { TextField } from "@mui/material";
import React, { useState } from "react";
import {
  Offcanvas,
  Button,
  Image,
  Row,
  Nav,
  Container,
  Modal,
  Col,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import "../Assets/Css/Header.css";
import logo from "../Assets/Images/logo.png";
const Menu = () => {
  const options = [
    {
      name: "start",
    },
    {
      name: "top",
    },
    {
      name: "bottom",
    },
    {
      name: "end",
    },
  ];
  const [show, setShow] = useState(false);
  const [placement1, setPlacement1] = useState("start");
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setPlacement1(e);
  };
  const [showmodal, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);
  return (
    <div className="demo-menu">
      <BrowserView>
        <Container>
          <Navbar className="primary-nav align-items-center d-block">
            <ul className="navbar-ul d-flex flex-row align-items-center">
              <li className="logo-menu">
                <div className="logo">
                  <Link to="/">
                    <Image src={logo} alt="Logo" fluid></Image>
                  </Link>
                </div>
              </li>
              <li className="menu links-menu">
                <Link to="/">Home</Link>
              </li>
              <li className="menu links-menu">
                <Link to="/about">About Us</Link>
              </li>
              <li className="menu links-menu">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="menu links-menu">
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="menu links-menu">
                <Button
                  variant="primary"
                  className="login-btn"
                  onClick={handleModalShow}
                >
                  Login/SignUp
                </Button>
              </li>
            </ul>
          </Navbar>
        </Container>
      </BrowserView>
      <MobileView>
        <Navbar className="mobile-menu">
          <div className="logo logo1">
            <Nav.Link to="/">
              <Image src={logo} alt="Logo" fluid></Image>
            </Nav.Link>
          </div>
          {options?.map((e) => (
            <Button variant="primary" onClick={() => handleShow(e.name)}>
              {e.name}
            </Button>
          ))}
          <Offcanvas show={show} placement={placement1} onHide={handleClose}>
            <Offcanvas.Body>
              <ul className="navbar-mobile">
                <li className="menu links-menu">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu links-menu">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="menu links-menu">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="menu links-menu">
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
      </MobileView>
      <Modal
        show={showmodal}
        onHide={handleModalClose}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="login-modal"
      >
        <Modal.Header closeButton>         
        </Modal.Header>
        <Modal.Title className="text-center d-block login-title">Login</Modal.Title>
        <Modal.Body>
        <div className="body-login">
        <Row>
          <TextField
            id="outlined-basic"
            label="Email*"
            variant="outlined"
            className="w-100 mb-3"
          />
          </Row>
          <Row>
            <Col>
              <Link to="/" className="forgot-password">Forgot Password?</Link>
            </Col>
          </Row>
          <Row>
          <TextField
            id="outlined-basic"
            label="Password*"
            variant="outlined"
            className="w-100 mb-3"
          />
          </Row>
          <Row>
          <Button variant="contained" color="primary" className="explore-btn d-block w-100 text-white text-uppercase font-bold">Sign In</Button>
          </Row>
          <Row>
            <Col>
            <p className="register mt-5 text-center">Don't have an account? <Link to="/register" className="text-black" onClick={()=>{ setModalShow(false)}}> Sign Up </Link></p>
            </Col>
          </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Menu;
