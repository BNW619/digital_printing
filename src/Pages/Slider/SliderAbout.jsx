import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import IMAGES from "../../Assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiStar } from "react-icons/hi";

function SliderAbout() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,

        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,

        },
      },
    ],
  };
  return (
    <div className="slider-about">
      <div className="sldr-header">
        <p className="sldr-crd">What the say about us</p>
      </div>
      <div className="slider-carousel container">
        <Slider {...settings}>
          <div>
            <Card className="p-2 card-slider-min rounded-4  " >
              <Card.Body>
                <Card.Title>
                  <Row>
                    <Col md={2}>
                      <img
                        className="rounded-5"
                        src={IMAGES.ALAN}
                        alt=""
                        style={{ width: "3vw" }}
                      />
                    </Col>
                    <Col md={10}>
                      <h4>Lauren Andrews</h4>
                      <p className="sldr-hdr-p">Unicorn Exchange</p>
                    </Col>
                  </Row>
                  <div>
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar />
                  </div>
                </Card.Title>

                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <p className="slider-crd-para">
                    A 2 Week copy project finished in 2 days <p>with jasper</p>
                  </p>{" "}
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio neque maiores nostrum deserunt, maxime molestias
                  libero. Quia quisquam officiis quasi repellat ullam, modi,
                  voluptatem, fuga labore quo similique.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="p-2 card-slider-min rounded-4">
               <Card.Body>
                <Card.Title>
                  <Row>
                    <Col md={2}>
                      <img
                        className="rounded-5"
                        src={IMAGES.ALAN}
                        alt=""
                        style={{ width: "3vw" }}
                      />
                    </Col>
                    <Col md={10}>
                      <h4>Lauren Andrews</h4>
                      <p className="sldr-hdr-p">Unicorn Exchange</p>
                    </Col>
                  </Row>
                  <div>
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar />
                  </div>
                </Card.Title>

                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <p className="slider-crd-para">
                    A 2 Week copy project finished in 2 days <p>with jasper</p>
                  </p>{" "}
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio neque maiores nostrum deserunt, maxime molestias
                  libero. Quia quisquam officiis quasi repellat ullam, modi,
                  voluptatem, fuga labore quo similique.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="p-2 card-slider-min rounded-4">
               <Card.Body>
                <Card.Title>
                  <Row>
                    <Col md={2}>
                      <img
                        className="rounded-5"
                        src={IMAGES.ALAN}
                        alt=""
                        style={{ width: "3vw" }}
                      />
                    </Col>
                    <Col md={10}>
                      <h4>Lauren Andrews</h4>
                      <p className="sldr-hdr-p">Unicorn Exchange</p>
                    </Col>
                  </Row>
                  <div>
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar />
                  </div>
                </Card.Title>

                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <p className="slider-crd-para">
                    A 2 Week copy project finished in 2 days <p>with jasper</p>
                  </p>{" "}
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio neque maiores nostrum deserunt, maxime molestias
                  libero. Quia quisquam officiis quasi repellat ullam, modi,
                  voluptatem, fuga labore quo similique.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="p-2 card-slider-min rounded-4">
               <Card.Body>
                <Card.Title>
                  <Row>
                    <Col md={2}>
                      <img
                        className="rounded-5"
                        src={IMAGES.ALAN}
                        alt=""
                        style={{ width: "3vw" }}
                      />
                    </Col>
                    <Col md={10}>
                      <h4>Lauren Andrews</h4>
                      <p className="sldr-hdr-p">Unicorn Exchange</p>
                    </Col>
                  </Row>
                  <div>
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar />
                  </div>
                </Card.Title>

                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <p className="slider-crd-para">
                    A 2 Week copy project finished in 2 days <p>with jasper</p>
                  </p>{" "}
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio neque maiores nostrum deserunt, maxime molestias
                  libero. Quia quisquam officiis quasi repellat ullam, modi,
                  voluptatem, fuga labore quo similique.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="p-2 card-slider-min rounded-4">
               <Card.Body>
                <Card.Title>
                  <Row>
                    <Col md={2}>
                      <img
                        className="rounded-5"
                        src={IMAGES.ALAN}
                        alt=""
                        style={{ width: "3vw" }}
                      />
                    </Col>
                    <Col md={10}>
                      <h4>Lauren Andrews</h4>
                      <p className="sldr-hdr-p">Unicorn Exchange</p>
                    </Col>
                  </Row>
                  <div>
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar />
                  </div>
                </Card.Title>

                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <p className="slider-crd-para">
                    A 2 Week copy project finished in 2 days <p>with jasper</p>
                  </p>{" "}
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio neque maiores nostrum deserunt, maxime molestias
                  libero. Quia quisquam officiis quasi repellat ullam, modi,
                  voluptatem, fuga labore quo similique.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="p-2 card-slider-min rounded-4">
               <Card.Body>
                <Card.Title>
                  <Row>
                    <Col md={2}>
                      <img
                        className="rounded-5"
                        src={IMAGES.ALAN}
                        alt=""
                        style={{ width: "3vw" }}
                      />
                    </Col>
                    <Col md={10}>
                      <h4>Lauren Andrews</h4>
                      <p className="sldr-hdr-p">Unicorn Exchange</p>
                    </Col>
                  </Row>
                  <div>
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar />
                  </div>
                </Card.Title>

                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <p className="slider-crd-para">
                    A 2 Week copy project finished in 2 days <p>with jasper</p>
                  </p>{" "}
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio neque maiores nostrum deserunt, maxime molestias
                  libero. Quia quisquam officiis quasi repellat ullam, modi,
                  voluptatem, fuga labore quo similique.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="p-2 card-slider-min rounded-4">
               <Card.Body>
                <Card.Title>
                  <Row>
                    <Col md={2}>
                      <img
                        className="rounded-5"
                        src={IMAGES.ALAN}
                        alt=""
                        style={{ width: "3vw" }}
                      />
                    </Col>
                    <Col md={10}>
                      <h4>Lauren Andrews</h4>
                      <p className="sldr-hdr-p">Unicorn Exchange</p>
                    </Col>
                  </Row>
                  <div>
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar />
                  </div>
                </Card.Title>

                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <p className="slider-crd-para">
                    A 2 Week copy project finished in 2 days <p>with jasper</p>
                  </p>{" "}
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio neque maiores nostrum deserunt, maxime molestias
                  libero. Quia quisquam officiis quasi repellat ullam, modi,
                  voluptatem, fuga labore quo similique.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="p-2 card-slider-min rounded-4">
               <Card.Body>
                <Card.Title>
                  <Row>
                    <Col md={2}>
                      <img
                        className="rounded-5"
                        src={IMAGES.ALAN}
                        alt=""
                        style={{ width: "3vw" }}
                      />
                    </Col>
                    <Col md={10}>
                      <h4>Lauren Andrews</h4>
                      <p className="sldr-hdr-p">Unicorn Exchange</p>
                    </Col>
                  </Row>
                  <div>
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar />
                  </div>
                </Card.Title>

                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <p className="slider-crd-para">
                    A 2 Week copy project finished in 2 days <p>with jasper</p>
                  </p>{" "}
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio neque maiores nostrum deserunt, maxime molestias
                  libero. Quia quisquam officiis quasi repellat ullam, modi,
                  voluptatem, fuga labore quo similique.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="p-2 card-slider-min rounded-4">
               <Card.Body>
                <Card.Title>
                  <Row>
                    <Col md={2}>
                      <img
                        className="rounded-5"
                        src={IMAGES.ALAN}
                        alt=""
                        style={{ width: "3vw" }}
                      />
                    </Col>
                    <Col md={10}>
                      <h4>Lauren Andrews</h4>
                      <p className="sldr-hdr-p">Unicorn Exchange</p>
                    </Col>
                  </Row>
                  <div>
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar className="sldr-icon-star" />
                    <HiStar />
                  </div>
                </Card.Title>

                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  <p className="slider-crd-para">
                    A 2 Week copy project finished in 2 days <p>with jasper</p>
                  </p>{" "}
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio neque maiores nostrum deserunt, maxime molestias
                  libero. Quia quisquam officiis quasi repellat ullam, modi,
                  voluptatem, fuga labore quo similique.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Slider>
        <div className="fiction-fact p-5  ">
          <Row>
            <Col>
              <Card className=" bg-transparent border-0"> 
                <Card.Body>
                  <h1 className="crd-hdr-title">Try it for free now!</h1>
                  <p className="crd-hdr-para">
                    Test the quality of our program and let yourself be
                    convinced by the
                    <p className="">
                      effectiveness of our Al, start now to genrate quality
                      content!
                    </p>
                  </p>
                  <div className="mb-5 account-min">
                    <Button
                      variant="outline-dark"
                      className="flot-crd px-4 py-3 me-4"
                    >
                      SIGN UP WITH GMAIL{" "}
                    </Button>{" "}
                    <Button variant="primary" className="flot-crd px-4 py-3">
                      SIGN UP WITH GOOGLE{" "}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="bg-div-tg">
       
      </div>
    </div>
  );
}

export default SliderAbout;
