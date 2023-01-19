import React from "react";
import { Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Heading from "./StyledHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="sectionProject" id="contact" style={{ marginTop: "20px" }}>
      <Heading>
        <h2>Get In Touch</h2>
      </Heading>
      <Container className="contactContainer">
        <p style={{ fontFamily: "cursive" }}>
          It would be wonderful to speak with you. Please feel free to email..
        </p>
        <Row>
          <a href="mailto:veysel.boybay@outlook.com?subject=Say Hello!">
            <Button variant="outline-success" size="lg">
              <FontAwesomeIcon icon={faEnvelope} /> Say Hello!
            </Button>{" "}
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
