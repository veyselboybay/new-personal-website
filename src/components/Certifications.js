import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
    faSchool,
  faCertificate
} from "@fortawesome/free-solid-svg-icons";

const Certifications = () => {
  return (
    <Container className="aboutcontainer">
        <h2 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faCertificate} /> Certificates
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
                <FontAwesomeIcon icon={faCertificate} />{" "}
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                  }}
                >
                    AWS Cloud Technical Essentials by AWS <a style={{textDecoration:'none', paddingLeft:'10px'}} href="https://coursera.org/verify/2R6WFJ2TA84B" target="_blank"> See Certificate</a>
                </span>
                <br />
              </span>
              <span
                style={{
                  float: "right",
                  paddingRight: "40px",
                  fontWeight: "bold",
                }}
              >
                2023 
              </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{paddingLeft:'40px', fontSize:'smaller'}}>
            <p style={{marginTop:'0px', paddingTop:'0px', marginTop:'10px'}}><b>Skills Gained:</b> IAM, EC2, Lambda, ECS, S3, RDS, DynamoDB</p>
          </div>
        </Col>
      </Row>
        <Row style={{ paddingTop: "0px" }}>
          <Col>
            <div
              style={{
                // width: "60vw",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <span style={{ float: "left", paddingLeft: "40px" }}>
                <FontAwesomeIcon icon={faCertificate} />{" "}
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                  }}
                >
                    Programming in Python by Meta <a style={{textDecoration:'none', paddingLeft:'10px'}} href="https://coursera.org/verify/DAMHZH5T5BUG" target="_blank"> See Certificate</a>
                </span>
                <br />
              </span>
              <span
                style={{
                  float: "right",
                  paddingRight: "40px",
                  fontWeight: "bold",
                }}
              >
                2023 
              </span>
          </div>
        </Col>
      </Row>
        <Row style={{ paddingTop: "10px" }}>
          <Col>
            <div
              style={{
                // width: "60vw",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <span style={{ float: "left", paddingLeft: "40px" }}>
                <FontAwesomeIcon icon={faCertificate} />{" "}
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                  }}
                >
                              Django Web Framework by Meta
                              {/* <a style={{ textDecoration: 'none', paddingLeft: '10px' }} href="https://coursera.org/verify/DAMHZH5T5BUG" target="_blank"> See Certificate</a> */}
                </span>
                <br />
              </span>
              <span
                style={{
                  float: "right",
                  paddingRight: "40px",
                  fontWeight: "bold",
                }}
              >
                In progress 
              </span>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <div style={{paddingLeft:'40px'}}>
            <p style={{marginTop:'0px', paddingTop:'0px', marginTop:'10px'}}><b>Skills Gained:</b> IAM, EC2, Lambda, ECS, S3, RDS, DynamoDB</p>
          </div>
        </Col>
      </Row> */}
        
      </Container>
  )
}

export default Certifications