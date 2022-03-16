import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import InfoIcon from "@mui/icons-material/Info";
import { Helmet } from "react-helmet";

const Register = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="register-page m-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Register | Belgium Webnet | Making these Extraordinary Diamonds
          Attainable
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="page-title">Register an Account </h1>
            <hr />
          </Col>
          <Col lg={4}>
            <Alert show={show} variant="success">
              <Alert.Heading>
                <InfoIcon color="success" className="me-2" />
                Enter your information to register an account.
              </Alert.Heading>
            </Alert>
          </Col>
          <Col lg={8}>
            <div className="register-bw">
              <Row>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="First Name *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="text"
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Last Name *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="text"
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="email"
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Phone *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="number"
                  />
                </Col>
                <Col lg={12}>
                  <TextField
                    id="outlined-basic"
                    label="Company *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="text"
                  />
                </Col>
                <Col lg={12}>
                  <TextField
                    id="outlined-basic"
                    label="Address Line 1 *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="text"
                  />
                </Col>
                <Col lg={12}>
                  <TextField
                    id="outlined-basic"
                    label="Address Line 2 *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="text"
                  />
                </Col>
                <Col lg={12}>
                  <TextField
                    id="outlined-basic"
                    label="Country *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="text"
                  />
                </Col>
                <Col lg={12}>
                  <TextField
                    id="outlined-basic"
                    label="City *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="text"
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Select State/Province *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="text"
                  />
                </Col>
                <Col lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Postal Code *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="number"
                  />
                </Col>
                <Col lg={12}>
                  <TextField
                    id="outlined-basic"
                    label="Desired Password  *"
                    variant="outlined"
                    className="w-100 mb-3"
                    type="password"
                  />
                </Col>
                <Col lg={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="shop-diamond-btn m-auto text-center d-block mt-3"
                    size="large"
                  >
                  Register
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
