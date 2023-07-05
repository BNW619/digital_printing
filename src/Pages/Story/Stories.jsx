import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Stories() {
  return (
    <div className="stories">
      <div className="container mt-5 pt-5">
        <Row className="pt-5">
          <Col md={6}>
            <h1 className="header-quality">
              Fantast Stories and Anime Post Specialized Al
            </h1>
          </Col>
          <Col md={6}>
            <div>
              <p className="quality-hdr pt-3">
                Our artificial intelligence can complate, start,continue or make
                from scratch a good anime and fantasty story, a reddit post or
                an answer to conversations.
              </p>
            </div>
          </Col>
          <Row className="mt-5 mb-4 story-min-cmpo">
            <Col md={3}>
              <h1 className="story-hdr-tg">20+</h1>
              <p>
                Al and Machine <p>Learning Patterns</p>
              </p>
            </Col>
            <Col md={3}>
              <h1 className="story-hdr-tg">76+</h1>
              <p>
                Al and Machine <p>Learning Patterns</p>
              </p>
            </Col>
            <Col md={3}>
              <h1 className="story-hdr-tg">96%</h1>
              <p>
                Al and Machine <p>Learning Patterns</p>
              </p>
            </Col>
            <Col md={3}>
              <h1 className="story-hdr-tg">67+</h1>
              <p>Al and Machine <br /> Learning Patterns</p>
            </Col>
          </Row>
          <div >
            <Card className="fiction p-5 container">
               <Row>
            <Col md={6}>
              <h1 className="header-quality">
                Within reach of any anime fan easy to use and effective
              </h1>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <p>
                Our Al enhance the quality of your fan fiction or your post, it
                can create an interesting backstory or it can even advise you on
                how to continue with your text or conversation.
              </p>
            </Col>
          </Row>
            </Card>
         
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Stories;
