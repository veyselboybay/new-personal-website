import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PersonalPic from "../assets/images/whiteJacket1.jpg";
import logo from "../assets/images/logo1.JPG";
import resume from "../assets/docs/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faAddressCard,
  faDiagramProject,
  faAddressBook,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
function Home() {
  return (
    <div>
      <div className="section" id="home">
        <Navbar bg="light" expand="lg">
          <Container>
            {/* <Navbar.Brand href="#home" className="logo"> */}
            <img src={logo} alt="logo" className="logo" />
            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <FontAwesomeIcon icon={faHouseUser} /> Home
                </Nav.Link>
                <Nav.Link href="#about">
                  <FontAwesomeIcon icon={faAddressCard} /> About
                </Nav.Link>
                <Nav.Link href="#portfolio">
                  <FontAwesomeIcon icon={faDiagramProject} /> Projects
                </Nav.Link>
                <Nav.Link href="#contact">
                  <FontAwesomeIcon icon={faAddressBook} /> Contact
                </Nav.Link>
              </Nav>
              <Nav style={{ marginRight: "20px" }}>
                <Nav.Link
                  href="https://www.linkedin.com/in/veyselboybay"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />{" "}
                  <span className="socialLogo">LinkedIn</span>
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/veyselboybay"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />{" "}
                  <span className="socialLogo">GitHub</span>
                </Nav.Link>
                <Nav.Link
                  href="https://www.hackerrank.com/veysel5084"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faHackerrank} />{" "}
                  <span className="socialLogo">HackerRank</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container id="homecontainer">
          <Row className="me-auto">
            <Col md={6} style={{ textAlign: "center", height: "100%" }}>
              <img
                src={PersonalPic}
                alt="pic"
                id="personalPic"
                style={{ height: "100%" }}
              />
            </Col>
            <Col md={6} style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "center" }}>Veysel Boybay</h3>
              <p style={{ fontFamily: "cursive" }}>
                I am a dedicated and ambitious software developer with a passion
                for tackling complex technical challenges and a never-ending
                desire to learn. Possessing strong analytical skills and a
                proven track record of effectively collaborating with
                cross-functional teams to solve problems and drive results are
                my assets.
              </p>
              <a href={resume} target="_blank">
                <Button variant="outline-success">View Resume</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
