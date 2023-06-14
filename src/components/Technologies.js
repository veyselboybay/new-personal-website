import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faJava,
  faPython,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
  faAndroid,
  faJenkins,
  faDev,
  faAws,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";

const Technologies = () => {
  return (
    <Container className="aboutcontainer">
        <h2 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faCode} /> Technologies
        </h2>
        <Row
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="me-auto"
        >
          <Col md={6}>
            <SkillsHead>General Programming Languages:</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faJava} /> JAVA, C#,{" "}
            <FontAwesomeIcon icon={faPython} /> PYTHON
          </Col>
          <Col md={6}>
            <SkillsHead>Front-End Web Development</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faHtml5} /> HTML5,{" "}
            <FontAwesomeIcon icon={faCss3} /> CSS3,{" "}
            <FontAwesomeIcon icon={faJs} /> JAVASCRIPT,{" "}
            <FontAwesomeIcon icon={faReact} /> REACTJS,{" "}
            <FontAwesomeIcon icon={faAngular} /> Angular
          </Col>
        </Row>
        <Row
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="me-auto"
        >
          <Col md={6}>
            <SkillsHead>Back-End Web Development</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faNodeJs} /> NODEJS, EXPRESSJS,{" "}
            <FontAwesomeIcon icon={faJava} /> JAVA SPRING FRAMEWORK
          </Col>
          <Col md={6}>
            <SkillsHead>Mobile Application Development</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faAndroid} /> ANDROID STUDIO, FLUTTER/DART
          </Col>
        </Row>
        <Row
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="me-auto"
        >
          <Col md={6}>
            <SkillsHead>Database</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faCode} /> SQL, MONGODB
          </Col>
          <Col md={6}>
            <SkillsHead>DevOps</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faJenkins} /> Jenkins,{" "}
            <FontAwesomeIcon icon={faDev} /> Azure DevOps
          </Col>
        </Row>
        <Row
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="me-auto"
        >
          <Col md={6}>
            <SkillsHead>Cloud Computing</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faAws} /> AWS
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
  )
}

const SkillsHead = styled.div`
  //   display: inline;
  padding-top: 20px;
  color: #fe7e6d;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

export default Technologies