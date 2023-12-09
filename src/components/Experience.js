import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faBriefcase,
  faDisplay
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <Container className="aboutcontainer">
        <h2 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faUserTie} /> Experience
        </h2>
        <Container style={{ paddingTop: "20px" }}>
          <Row>
            <Col>
              <div
                style={{
                  // width: "60vw",
                  // marginRight: "auto",
                  // marginLeft: "auto",
                  textAlign: "left",
                }}
              >
                <span style={{ paddingLeft: "40px", float: "left" }}>
                  <FontAwesomeIcon icon={faDisplay} />
                  <span
                    style={{
                      paddingLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Creator - Hobby Project
                  </span>
                  <br />
                  <span style={{ paddingLeft: "25px" }}>
                    <a href="https://exshareclient.onrender.com/" style={{textDecoration:'none'}} target="_blank">ExShare</a>
                  </span>
                </span>
                <span
                  style={{
                    float: "right",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  May 2023 - present
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  // width: "60vw",
                  marginRight: "auto",
                  marginLeft: "auto",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <ul>
                  <li>
                    <a href="https://exshareclient.onrender.com/" style={{textDecoration:'none'}} target="_blank">ExShare</a> is an online platform for students to engage each other by creating blogs and sharing posts. The aim is to keep students on one platform for better engagement and productivity.
                  </li>
                  <li>
                    Built with React, React Router, Redux Toolkit, Jwt, Node.js/Express.js, MongoDB
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Container style={{ paddingTop: "20px" }}>
          <Row>
            <Col>
              <div
                style={{
                  // width: "60vw",
                  // marginRight: "auto",
                  // marginLeft: "auto",
                  textAlign: "left",
                }}
              >
                <span style={{ paddingLeft: "40px", float: "left" }}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span
                    style={{
                      paddingLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Software Developer Co-op
                  </span>
                  <br />
                  <span style={{ paddingLeft: "25px" }}>
                    Ontario Land Tribunal, Toronto, ON
                  </span>
                </span>
                <span
                  style={{
                    float: "right",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  May 2021 - Apr 2022
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  // width: "60vw",
                  marginRight: "auto",
                  marginLeft: "auto",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <ul>
                  <li>
                    Designed, developed, and enhanced OLT's website with interactive web pages using HTML, CSS, and JavaScript to enhance user engagement.
                  </li>
                  <li>
                    Ensured flawless cross-browser compatibility and responsiveness through rigorous manual testing.
                  </li>
                  <li>
                    Excelled in project coordination, actively participating in daily scrums to support cross-functional teams.
                  </li>
                  <li>
                    Transformed digital documents into user-friendly web pages,
                  </li>
                  <li>
                    Played a key role in documenting the software for technical and non-technical users.
                  </li>
                  <li>
                    Rapidly adapted to various tools like Miro, MS Teams, and development software
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        
      </Container>
  )
}

export default Experience