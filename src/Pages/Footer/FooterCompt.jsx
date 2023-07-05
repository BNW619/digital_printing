import React from "react";
import { Col, Row } from "react-bootstrap";

function FooterCompt() {
  return (
    <div className="bg-dark text-white">
      <div className="container footer " >
        <Row className="mt-5 mb-4 d-flex justify-content-center">
          <Col md={3} className="ftr-col">
            <h3 className="fotr-hdr mb-4">CLIENTS</h3>
            <p className="fotr-para">
              Login <p>Sing up</p>
            </p>
          </Col>
          <Col md={3} className="ftr-col">
            <h3 className="fotr-hdr mb-4">SOCIAL MEDIA</h3>
            <p className="fotr-para">Twitter</p>
          </Col>
          <Col md={3} className="ftr-col">
            <h3 className="fotr-hdr mb-4">LEGAL INFO</h3>
            <p className="fotr-para">
              Legal information <p>Terms & Conditions</p> <p  className="para-tex">Privacy Policy</p>
            </p>
          </Col>
          <Col md={3} className="ftr-col">
            <h3 className="fotr-hdr mb-4">SUPPORT</h3>
            <p className="fotr-para">Helpdesk</p>
          </Col>
        </Row>
      </div>
      <div className="pt-3 border-top">
        <div className="container footer-min pb-3 pt-3">
          <p>T22 All right reserrved</p>
        </div>
      </div>
        </div>
  );
}

export default FooterCompt;
