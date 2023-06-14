import React from "react";
import { Row, Button, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Heading from "./StyledHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="sectionProject" id="contact" style={{ marginTop: "20px" }}>
      <Heading>
        <h2>Get In Touch</h2>
      </Heading>
      <Container className="contactContainer">
        <p style={{ fontFamily: "monospace" }}>
          It would be wonderful to speak with you. Please feel free to contact!
        </p>
        <Row>
          <Col md={5}>
            <div>
              <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg"/> Email: veysel.boybay@outlook.com
            </div>
          </Col>
          <Col md={1}>or</Col>
          <Col md={6}>
            <a href="mailto:veysel.boybay@outlook.com?subject=RE:">
            <Button variant="outline-success" >
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </Button>{" "}
          </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
