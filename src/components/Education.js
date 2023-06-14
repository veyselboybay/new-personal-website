import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <Container className="aboutcontainer">
        <h2 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faGraduationCap} /> Education
        </h2>
        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <div
              style={{
                // width: "60vw",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <span style={{ float: "left", paddingLeft: "40px" }}>
                <FontAwesomeIcon icon={faSchool} />{" "}
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                  }}
                >
                  Software Engineering Technology
                </span>
                <br />
                Advanced Diploma <br />
                <span style={{ textAlign: "left" }}>
                  Centennial College, ON, Canada
                </span>
              </span>
              <span
                style={{
                  float: "right",
                  paddingRight: "40px",
                  fontWeight: "bold",
                }}
              >
                Grad. Apr 2023 
              </span>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <div
              style={{
                // width: "60vw",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <span style={{ float: "left", paddingLeft: "40px" }}>
                <FontAwesomeIcon icon={faSchool} />{" "}
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                  }}
                >
                  International Relations
                </span>{" "}
                <br />
                Bachelor's Degree
                <br />
                <span style={{ textAlign: "left" }}>
                  Ege University, Izmir, Turkey
                </span>
              </span>
              <span
                style={{
                  float: "right",
                  paddingRight: "40px",
                  fontWeight: "bold",
                }}
              >
                Grad. June 2017
              </span>
            </div>
          </Col>
        </Row>
        
      </Container>
  )
}

export default Education