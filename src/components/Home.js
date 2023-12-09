import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import PersonalPic from "../assets/images/whiteJacket1.jpg";
import PersonalPic from "../assets/images/linkedinppp.png";
import logo from "../assets/images/logo1.JPG";
import pythonLogo from "../assets/images/python-logo.png";
import expressjs from "../assets/images/expressjs.png";
import graphql from "../assets/images/graphql.png";
import mongodb from "../assets/images/mongodb.png";
import nodejs from "../assets/images/nodejs.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import sql from "../assets/images/sql.png";
import csharp from "../assets/images/csharp.png";
import java from "../assets/images/java.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faAddressCard,
  faDiagramProject,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

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
              <h6 style={{ textAlign: "center" }}> --- Full Stack Software Developer ---</h6>
              <p style={{paddingTop:'20px'}}>
                I excel in crafting innovative web applications by leveraging my expertise in React for front-end development and Node/Express or Django/FastAPI for robust back-end solutions. Committed to delivering high-quality, user-centric software experiences through technical proficiency and a passion for innovation.
              </p>
              <Row>
                <Col style={{textAlign:'center', paddingTop:'10vh'}}>
                  {/* <FontAwesomeIcon icon={faReact} />{" "}
                  <FontAwesomeIcon icon={faNodeJs} />{" "}
                  <FontAwesomeIcon icon={faPython} />{" "} */}
                  <img src={react} width="30vw" alt="react" /> -
                  <img src={redux} width="30vw" alt="redux"/> - 
                  <img src={nodejs} width="30vw" alt="nodejs"/> - 
                  <img src={expressjs} width="30vw" alt="expressjs"/> - 
                  <img src={mongodb} width="30vw" alt="mongodb"/> - 
                  <img src={sql} width="30vw" alt="sql"/> <br />
                  <img src={pythonLogo} width="30vw" alt="python-logo"/> - 
                  <img src={graphql} width="30vw" alt="graphql"/> - 
                  <img src={java} width="30vw" alt="java"/> - 
                  <img src={csharp} width="30vw" alt="csharp"/> 
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
