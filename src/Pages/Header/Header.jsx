import React from "react";
import TopNav from "../Navbar/TopNav.jsx";
import { Badge, Button, Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
function Header() {
  return (
    <div className="hdr-top">
      <div>
        <TopNav />
      </div>
      <div className="container">
        <Row>
          <div className="dsply-hdr-br">
            <Row>
              <Col md={9}>
                <p className="header-bdy-texture">
                  Fast And Automatic <br /> Anime and Fantasy <br />
                  Writing
                </p>
              </Col>
              <Col md={3}>
                <Row>
                  <Col md={12} className="d-flex justify-content-end">
                    {" "}
                    <div>
                      <Badge className=" hdr-bdge-min px-3 ">
                        <span className="d-flex align-items-center">
                          <Badge className="hdr-bdge-comp bg-info">
                          <FaCheck className="read-more-cons"/>
                          </Badge>
                          <p className="texture-hdr ps-2 pt-3">
                            Dvelop Publications
                          </p>
                        </span>
                      </Badge>
                    </div>
                  </Col>
                  <Col md={12} className="d-flex justify-content-end">
                    {" "}
                    <div>
                      <Badge className=" hdr-bdge-min px-3 mt-4">
                        <span className="d-flex align-items-center">
                          <Badge className="hdr-bdge-comp bg-info">
                          <FaCheck className="read-more-cons"/>

                          </Badge>
                          <p className="texture-hdr ps-2 pt-3">
                            Perfect for Fan fiction
                          </p>
                        </span>
                      </Badge>{" "}
                    </div>
                  </Col>
                  <Col md={12} className="d-flex justify-content-end">
                    {" "}
                    <div>
                      <Badge className="hdr-bdge-min px-3 mt-4">
                        <span className="d-flex align-items-center">
                          <Badge className="hdr-bdge-comp bg-info">
                          <FaCheck className="read-more-cons"/>
                          </Badge>
                          <p className="texture-hdr ps-2 pt-3">
                            Write, Review and Fix Text
                          </p>
                        </span>
                      </Badge>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Col className="hdr-btn-tg">
            <p className="texture-header-bdy pt-2 pb-2">
              Texts written artificial intelligence{" "}
              <pre>immediate, easy and with amazing results</pre>{" "}
            </p>
            <div className="pb-5 mb-5">
              <Button className="btn-trial px-5 p-3 me-4">FREE TRIAL</Button>{" "}
              <Button className="btn-sign-up px-5 p-3">
                SIGN UP WITH GOOGLE
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
