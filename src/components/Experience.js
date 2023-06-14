import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faBriefcase,
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
                    Developed and maintained code for company website primarily
                    using HTML, CSS and JavaScript
                  </li>
                  <li>
                    Manually tested site in browsers and mobile devices to
                    ensure cross-browser compatibility and responsiveness
                  </li>
                  <li>
                    Created fillable documents for customers' use so that they
                    can fill out the forms and save and download them
                  </li>
                  <li>
                    Worked on the newly generated CRM and helped the team
                    migrate the data from the old system to the new system,
                  </li>
                  <li>
                    Completed given tasks successfully in an allotted timeframe
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
                    Data Operations Specialist
                  </span>
                  <br />
                  <span style={{ paddingLeft: "25px" }}>
                    RedMill Solutions, Izmir, Turkey
                  </span>
                </span>
                <span
                  style={{
                    float: "right",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Feb 2018 - Nov 2018
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
                    I was in touch with media agencies to get our clients’
                    advertisement data
                  </li>
                  <li>
                    Worked on the advertisement data for cleaning, organizing,
                    and preparing for further analysis
                  </li>
                  <li>
                    Mainly used company software to visualize uploaded data for
                    last touch-ups
                  </li>
                  <li>
                    Collaborated with the cross-border teams in London (UK) and
                    Guangzhou (China)
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