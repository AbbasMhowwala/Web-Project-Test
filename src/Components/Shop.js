import React, { useState } from "react";
import { Accordion, Col, Container, Image, Modal, Row } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import productimg from "../Components/Assets/Images/product/product.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Helmet from "react-helmet";
import WindowIcon from "@mui/icons-material/Window";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const Shop = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [grid, setGrid] = useState(1);
  const handleGridView = () => {
    setGrid(1);
  };
  const handleListView = () => {
    setGrid(0);
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    prevArrow: <ArrowCircleLeftIcon />,
    nextArrow: <ArrowCircleRightIcon />,
  };
  return (
    <div className="bw-shop">
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
      <div className="bw-prod-list-banner mb-3">
        <Image src="https://malaknew.belgiumwebnet.com/webapi/assets/images/categorybanner/wedding-bands.webp"></Image>
      </div>
      <Container>
        <Row>
          <Col lg={8} className="m-auto text-center p-5">
            <h1>ENGAGEMENT RINGS</h1>
            <p>
              Engagement rings are the ultimate expression of love, which is why
              their design requires a personal touch. It’s easy to design the
              engagement ring of your dreams, down to the last detail. Choose
              lovingly handcrafted engagement settings in a range of popular
              styles. Browse loose diamonds for the perfect center stone to
              complete your engagement setting. Then, sit back and admire your
              beautiful creation!
            </p>
          </Col>
        </Row>
        <Row className="m-3">
          <Col md={3} className="mt-3">
            <h1 className="mb-3">Filter</h1>
            <div className="stick-fliter">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Gemstone</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Shape</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Metal Color</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={12} className="text-center">
                <div className="d-inline-block">
                  <span className="mx-3">View</span>
                  <span onClick={handleGridView}>
                    <WindowIcon />
                  </span>
                  <span className="mx-3">|</span>
                  <span onClick={handleListView}>
                    <FormatListNumberedRtlIcon />
                  </span>
                </div>
              </Col>
            </Row>
            <div id="product-views">
              {grid ? (
                <div id="grid-view">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    className="mt-3 grid-view"
                  >
                    <Grid item xs={4} onClick={handleShow}>
                      <Card>
                        <CardActionArea>
                          <Slider {...settings}>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                          </Slider>

                          <CardContent className="border-top">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="p"
                              className="product-title"
                            >
                              14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set
                              Engagement Ring
                            </Typography>
                            <Typography
                              variant="body2"
                              component="small"
                              className="product-price"
                              color="text.black"
                            >
                              $ 493
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card>
                        <CardActionArea>
                          <Slider {...settings}>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                          </Slider>

                          <CardContent className="border-top">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="p"
                              className="product-title"
                            >
                              14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set
                              Engagement Ring
                            </Typography>
                            <Typography
                              variant="body2"
                              component="small"
                              className="product-price"
                              color="text.black"
                            >
                              $ 493
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card>
                        <CardActionArea>
                          <Slider {...settings}>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                          </Slider>

                          <CardContent className="border-top">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="p"
                              className="product-title"
                            >
                              14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set
                              Engagement Ring
                            </Typography>
                            <Typography
                              variant="body2"
                              component="small"
                              className="product-price"
                              color="text.black"
                            >
                              $ 493
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card>
                        <CardActionArea>
                          <Slider {...settings}>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                            <div>
                              <CardMedia
                                component="img"
                                image={productimg}
                                alt="Product Image"
                                className="product-img"
                              />
                            </div>
                          </Slider>

                          <CardContent className="border-top">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="p"
                              className="product-title"
                            >
                              14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set
                              Engagement Ring
                            </Typography>
                            <Typography
                              variant="body2"
                              component="small"
                              className="product-price"
                              color="text.black"
                            >
                              $ 493
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <div id="list-view">
                  <Row className="m-3 d-flex align-items-center border-top">
                    <Col md={4}>
                      <Slider {...settings}>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                      </Slider>
                    </Col>
                    <Col md={8}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="p"
                        className="product-title"
                      >
                        14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set
                        Engagement Ring
                      </Typography>
                      <Typography
                        variant="body2"
                        component="small"
                        className="product-price"
                        color="text.black"
                      >
                        $ 493
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="m-3 d-flex align-items-center border-top">
                    <Col md={4}>
                      <Slider {...settings}>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                      </Slider>
                    </Col>
                    <Col md={8}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="p"
                        className="product-title"
                      >
                        14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set
                        Engagement Ring
                      </Typography>
                      <Typography
                        variant="body2"
                        component="small"
                        className="product-price"
                        color="text.black"
                      >
                        $ 493
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="m-3 d-flex align-items-center border-top">
                    <Col md={4}>
                      <Slider {...settings}>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                      </Slider>
                    </Col>
                    <Col md={8}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="p"
                        className="product-title"
                      >
                        14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set
                        Engagement Ring
                      </Typography>
                      <Typography
                        variant="body2"
                        component="small"
                        className="product-price"
                        color="text.black"
                      >
                        $ 493
                      </Typography>
                    </Col>
                  </Row>
                  <Row className="m-3 d-flex align-items-center border-top">
                    <Col md={4}>
                      <Slider {...settings}>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                        <div>
                          <CardMedia
                            component="img"
                            image={productimg}
                            alt="Product Image"
                            className="product-img"
                          />
                        </div>
                      </Slider>
                    </Col>
                    <Col md={8}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="p"
                        className="product-title"
                      >
                        14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set
                        Engagement Ring
                      </Typography>
                      <Typography
                        variant="body2"
                        component="small"
                        className="product-price"
                        color="text.black"
                      >
                        $ 493
                      </Typography>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} centered dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title className="invisible">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Image src={productimg} alt="Product Quick View Images" className="quick-img"></Image>
            </Col>
            <Col md={6}>
              <div className="quickview-content">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className="product-title"
                >
                  14K White 6x6 MM Square 1/8 CTW Diamond Semi-Set Engagement
                  Ring
                </Typography>
                <Typography
                  variant="body2"
                  component="small"
                  className="product-price"
                  color="text.black"
                >
                  $ 493
                </Typography>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Shop;
