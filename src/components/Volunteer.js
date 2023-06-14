import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";

const Volunteer = () => {
  return (
    <Container className="aboutcontainer">
        <h2 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faHandshakeAngle} /> Volunteer Activities
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
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span
                    style={{
                      paddingLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Fund Raiser
                  </span>
                  <br />
                  <span style={{ paddingLeft: "25px" }}>UNICEF - TURKEY</span>
                </span>
                <span
                  style={{
                    float: "right",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Oct 2016 - Jan 2017
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
                    We attempted to approach individuals to inform them about
                    UNICEF's initiatives and investments regarding where the
                    donations are spent and what sort of projects are done and
                    are being built in order to raise awareness of and encourage
                    individuals to develop the rights of every child. We
                    encourage them to assist UNICEF in reaching more kids by
                    participating in this initiative.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
  )
}

export default Volunteer