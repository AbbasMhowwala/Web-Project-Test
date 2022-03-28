import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Helmet from "react-helmet";
const About = () => {
  return (
    <div className="bw-about">
    <Helmet>
        <meta charSet="utf-8" />
        <title>
          About Us - Belgium Webnet- Making these Extraordinary Diamonds
          Attainable
        </title>
        <meta
          name="description"
          content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide."
        />
      </Helmet>
      <div className="about-introduce">
      <div className="bw-prod-list-banner mb-3">
        <Image src="https://cdn.shopify.com/s/files/1/0474/3168/0162/files/breacrumb.jpg?v=1598951813"></Image>
      </div>
        <Container>
          <Row>
            <Col lg={6} className="intro_image">
              <Image
                className="w-100"
                src=" //cdn.shopify.com/s/files/1/0474/3168/0162/files/people1.jpg?v=1598951812 "
              />
            </Col>
            <Col lg={6} className="intro_detail d-flex align-items-center">
              <div className="info-intro">
                <p className="des_intro">Photographer</p>
                <h3 className="title_intro">Justin Lisiakir</h3>
                <p className="content_intro">
                  We believe in a world where you have total freedom to be you,
                  without judgement. To experiment. To express yourself. To be
                  brave and grab life as the extraordinary adventure it is. So
                  we make sure everyone has an equal chance to discover all the
                  amazing things they’re capable of – no matter who they are,
                  where they’re from or what looks they like to boss. We exist
                  to give you the confidence to be whoever you want to be.
                </p>
              </div>
            </Col>
            <Col lg={6} className="intro_detail d-flex align-items-center">
              <div className="info-intro">
                <p className="des_intro">Web Designer</p>
                <h3 className="title_intro">Angelika Hess</h3>
                <p className="content_intro">
                  Our audience (AKA you) is wonderfully unique. And we do
                  everything we can to help you find your fit, offering our
                  Ciloe Brands in more than 30 sizes – and we're committed to
                  providing all sizes at the same price – so you can be
                  confident we’ve got the perfect thing for you. We’re also
                  proud to partner with GLAAD, one of the biggest voices in
                  LGBTQ activism, on a gender-neutral collection to unite in
                  accelerating acceptance.
                </p>
              </div>
            </Col>
            <Col lg={6} className="intro_image">
              <Image
                className="w-100"
                src=" //cdn.shopify.com/s/files/1/0474/3168/0162/files/people3.jpg?v=1598951812 "
              />
            </Col>
            <div className="col-md-6 intro_image">
              <Image
                className="w-100"
                src=" //cdn.shopify.com/s/files/1/0474/3168/0162/files/people2.jpg?v=1598951812 "
              />
            </div>
            <Col lg={6} className="intro_detail d-flex align-items-center">
              <div className="info-intro">
                <p className="des_intro">Sales agent</p>
                <h3 className="title_intro">Alex Barnder</h3>
                <p className="content_intro">
                  We believe in a world where you have total freedom to be you,
                  without judgement. To experiment. To express yourself. To be
                  brave and grab life as the extraordinary adventure it is. So
                  we make sure everyone has an equal chance to discover all the
                  amazing things they’re capable of – no matter who they are,
                  where they’re from or what looks they like to boss. We exist
                  to give you the confidence to be whoever you want to be.
                </p>
              </div>
            </Col>
            <Col lg={6} className="intro_detail d-flex align-items-center">
              <div className="info-intro">
                <p className="des_intro">Marketing Staff</p>
                <h3 className="title_intro">Angelika Hessas</h3>
                <p className="content_intro">
                  We believe in a world where you have total freedom to be you,
                  without judgement. To experiment. To express yourself. To be
                  brave and grab life as the extraordinary adventure it is. So
                  we make sure everyone has an equal chance to discover all the
                  amazing things they’re capable of – no matter who they are,
                  where they’re from or what looks they like to boss. We exist
                  to give you the confidence to be whoever you want to be.
                </p>
              </div>
            </Col>
            <Col lg={6} className="intro_image">
              <Image
                className="w-100"
                src=" //cdn.shopify.com/s/files/1/0474/3168/0162/files/people4.jpg?v=1598951812 "
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
