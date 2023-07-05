import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import IMAGES from "../../Assets/images";
import { FaCheck } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";

function Quality() {
  return (
    <div>
      <div className="container">
        <Row>
          <Col md={12}>
            <Row className="mt-5 ">
              <Col md={12} sm={12} xs={12} lg={6}>
                <h1 className="header-quality">
                  Quality Content <p>In just one click</p>
                </h1>
              </Col>
              <Col md={12} sm={12} xs={12} lg={6} className="d-flex align-items-center ">
                <p className="quality-hdr">
                  whether you need it urgently or just dont like to wait, our Ai
                  takes just second to deliver a complete work, no more waiting
                  in commission queue.
                </p>
              </Col>
            </Row>
          </Col>

          <Col md={12} className="mt-5 stories-card">
            <Row>
              <Col>
                {" "}
                <div>
                  <Card className="crds-qualtiy border-0 rounded-4">
                    <Card.Body className="mb-2 p-4">
                      <Badge className="bg-dark bdge-crd rounded-5 mb-3">
                        {" "}
                        <img src={IMAGES.OPENBOOK} alt="" className="pt-2" />
                      </Badge>
                      <h2 className="card-hdr--quality">Full Stories</h2>
                      <p className="quality-hdr">
                        Interesting and Complex, with a good development and
                        ending
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col>
                {" "}
                <div>
                <Card className="crds-qualtiy border-0 rounded-4">
                    <Card.Body className="mb-2 p-4">
                      <Badge className="bg-dark bdge-crd rounded-5 mb-3">
                        {" "}
                        <img src={IMAGES.OPENBOOK2} alt="" className="pt-2" />
                      </Badge>
                      <h2 className="card-hdr--quality">Full Stories</h2>
                      <p className="quality-hdr">
                        Interesting and Complex, with a good development and
                        ending
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col>
                {" "}
                <div>
                <Card className="crds-qualtiy border-0 rounded-4">
                    <Card.Body className="mb-2 p-4">
                      <Badge className="bg-dark bdge-crd rounded-5 mb-3">
                        {" "}
                        <img src={IMAGES.OPENBOOK3} alt="" className="pt-2" />
                      </Badge>
                      <h2 className="card-hdr--quality">Full Stories</h2>
                      <p className="quality-hdr">
                        Interesting and Complex, with a good development and
                        ending
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={12} >
            <Row >
              <Col md={12} sm={12} xs={12} lg={6}>
                <div className="d-flex justify-content-center">
                  <img src={IMAGES.ANIMATE} className="animate-img" alt="" />
                </div>
              </Col>
              <Col
                md={12}
                sm={12}
                xs={12}
                lg={6}
                className="d-grid justify-content-center"
              >
                <div className="d-grid justify-content-center">
                  <p className="anime-texture">
                     Anime Text in ablink
                   <br />Automatic and <br />
                    Immediate
                  </p>
                  <p className="qtily-para-cnt">
                    The Technology of our Al assure a great writing,
                    <p>without waiting creative block, instant</p>
                    <p className="para-tex">content only</p>
                  </p>
                </div>
                <div className="abline-automatic">
                  <span className="d-flex">
                    <Badge className="hdr-bdge-comp pt-1 bg-info">
                      <FaCheck className="read-more-cons"/>
                    </Badge>
                    <p className="texture-hdr-read-more ps-3">
                      Powered by BPT-3 from OpenAI
                    </p>
                  </span>
                  <span className="d-flex">
                    <Badge className="hdr-bdge-comp bg-info ">
                    <FaCheck className="read-more-cons"/>
                    </Badge>
                    <p className="texture-hdr-read-more ps-3 ">
                      Differnt genres and tones
                    </p>
                  </span>
                  <span className="d-flex">
                    <Badge className="hdr-bdge-comp pt-1 bg-info">
                    <FaCheck className="read-more-cons"/>
                    </Badge>
                    <p className="texture-hdr-read-more ps-3 ">
                      To publish on network or use them in your ccompaigns
                    </p>
                  </span>
                </div>
                <div className="qlty-more-read">
                  <span>
                    <p>
                      Read More{" "}
                      <span>
                        <CgArrowLongRight />
                      </span>
                    </p>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Quality;
