import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Copyrigt = () => {
  return (
    <div className="copyright-bg">
      <Container>
        <Row className="copyright-bottom mt-5">
          <Col lg={11} sm={12}>
            <div className="copytight">
              <p>
                Belgium Webnet © 2022 All rights reserved. Designed and
                Developed by: <Link to="/">Belgium WebNet</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Copyrigt;
