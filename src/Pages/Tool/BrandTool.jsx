import React from "react";
import { Badge, Card, Col, Dropdown, Row, SplitButton } from "react-bootstrap";
import IMAGES from "../../Assets/images";
import { BiCopy } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";

function BrandTool() {
  return (
    <div className="container">
      <Row>
        <Col md={12} className="d-flex justify-content-center">
          {/* <div className="text-center tool-hdr-main-div">
            <h2 className="hdr-tag-tool">
              <span className="spn-tol-tg">The best tool for</span>
            </h2>
          </div> */}
          <header className="header-min-div w-50">
            <div class="header__center h1">The best tool for </div>
          </header>
        </Col>
        <Col md={12} className="">
          <Row>
            <Col
              md={7}
              sm={12}
              xs={12}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <Row>
                  <Col className="brand-img-all">
                    {" "}
                    <div className="me-4">
                      <img
                        src={IMAGES.REDDITLOG}
                        alt=""
                        className="brand-logo"
                      />
                    </div>
                  </Col>
                  <Col className="brand-img-all">
                    {" "}
                    <div className="me-4">
                      <img
                        src={IMAGES.WRITEAS}
                        alt=""
                        className="brand-logo pt-2"
                      />
                    </div>{" "}
                  </Col>
                  <Col className="brand-img-all">
                    {" "}
                    <div className="me-4">
                      <img
                        src={IMAGES.QURAIMG}
                        alt=""
                        className="brand-logo pt-2"
                      />
                    </div>{" "}
                  </Col>
                  <Col className="brand-img-all">
                    {" "}
                    <div className="">
                      <img
                        src={IMAGES.GOSTIMG}
                        alt=""
                        className="brand-logo-ghost"
                      />
                    </div>{" "}
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              md={5}
              sm={12}
              xs={12}
              className="d-flex justify-content- pt-2"
            >
              <Row>
                <Col className="brand-img-all">
                  {" "}
                  <div>
                    <img src={IMAGES.ASKFM} alt="" className="brand-logo" />
                  </div>{" "}
                </Col>
                <Col className="brand-img-all">
                  <div>
                    <img src={IMAGES.PLANET} alt="" className="brand-logo" />
                  </div>{" "}
                </Col>
                <Col className="brand-img-all">
                  {" "}
                  <div>
                    <img src={IMAGES.WIKIHOW} alt="" className="brand-logo" />
                  </div>
                </Col>
              </Row>{" "}
            </Col>
          </Row>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Row className="test-brand-icn-- mt-5">
            <Col md={6} className=" align-items-center">
              <Row>
                <Col className="brand-img-all">
                  {" "}
                  <div>
                    <img src={IMAGES.STACKEXCH} alt="" className="brand-logo" />
                  </div>
                </Col>
                <Col className="brand-img-all">
                  {" "}
                  <div>
                    <img src={IMAGES.ANSWERS} alt="" className="brand-logo2" />
                  </div>{" "}
                </Col>
                <Col className="brand-img-all">
                  <div>
                    <img
                      src={IMAGES.MYANILIST}
                      alt=""
                      className="brand-logo2"
                    />
                  </div>{" "}
                </Col>
              </Row>
            </Col>
            <Col md={6} className=" align-items-center">
              <Row>
                <Col className="brand-img-all">
                  <div>
                    <img
                      src={IMAGES.STACKOVER}
                      alt=""
                      className="brand-logo2"
                    />
                  </div>{" "}
                </Col>
                <Col className="brand-img-all">
                  {" "}
                  <div>
                    <img
                      src={IMAGES.MEDIUMIMG}
                      alt=""
                      className="brand-logo2"
                    />
                  </div>{" "}
                </Col>
                <Col className="brand-img-all">
                  <div>
                    <img src={IMAGES.ASKIMG} alt="" className="brand-logo2" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={12} className="d-flex justify-content-center">
          <div className="center-hdr-anymore">
            And many more
          </div>
        </Col>
        <Col md={12}>
          {" "}
          <Row className="mb-5">
            <Col
              className="anime-texture-min-cl"
              lg={6}
              md={12}
              sm={12}
              xs={12}
            >
              <div className="anime-textyre-min-dv d-grid justify-content-start">
                <p className="anime-texture-quality">
                  Anime Text in ablink <br />
                  Automatic and <br />
                  Immediate
                </p>
                <p className="qtily-para-cnt">
                  The Technology of our Al assure a great writing,
                  <p>without waiting creative block, instant</p>
                  <p className="para-tex">content only</p>
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <div className="search-lenght">
                <div className="crd-link-min d-none d-lg-block">
                  <Row>
                    <Col md={8}>
                      <div className="d-flex">
                        <span className="me-3 shadow m-1 rounded-3">
                          {["All"].map((variant) => (
                            <SplitButton
                              key={variant}
                              id={`dropdown-split-variants-${variant}`}
                              variant={variant.toLowerCase()}
                              title={variant}
                              size="md"
                            >
                              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                              <Dropdown.Item eventKey="2">
                                Another action
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="3" active>
                                Active Item
                              </Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item eventKey="4">
                                Separated link
                              </Dropdown.Item>
                            </SplitButton>
                          ))}
                        </span>
                        <span>
                          <div class="custom-search">
                            <input
                              type="text"
                              class="custom-search-input rounded-3"
                              placeholder="Enter what you need"
                              size="sm"
                            />
                            <span>
                              <button
                                class="m-1 custom-search-botton"
                                type="submit"
                                size="sm"
                              >
                                <span className="p-1">Subscribe</span>
                              </button>
                            </span>
                          </div>
                        </span>
                      </div>
                    </Col>

                    <Card className="ablink-crd">
                      {" "}
                      <div className="crd-icon-min d-flex align-items-center justify-content-end">
                        <Badge className="hdr-bdge-comp ">
                          <TiArrowForward />
                        </Badge>
                        <Badge className="hdr-bdge-comp ">
                          <BiCopy />
                        </Badge>
                      </div>
                    </Card>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default BrandTool;
