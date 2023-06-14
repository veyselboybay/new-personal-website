import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Heading from "./StyledHeading";
import ProjectDescription from "./ProjectDescription";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Projects() {
  return (
    <div
      className="sectionProject"
      id="portfolio"
      style={{ marginTop: "20px" }}
    >
      <Heading>
        <h2>Projects</h2>
      </Heading>

      <Container className="projectsContainer">
        <Row>
          <Col md={6}>
            <ProjectDescription
              name={"Condo Management"}
              description={<p style={{ color: "grey" }}>I've programmed and developed a <span  style={{textDecoration:'underline'}}>Full Stack application</span> to be used in condo buildings where users can signup/signin, post to newsfeed or register their car to parking system. Technologies I've used while developing it are  <span style={{textDecoration:'underline'}}> React, React-Router, Redux-Toolkit, Node/Express.js and MongoDB.</span></p>}
              repoLink={"https://github.com/veyselboybay/condo-mng-client"} apiLink={"https://github.com/veyselboybay/condo-mng-API"}
            />
          </Col>
          <Col md={6}>
            <ProjectDescription
              name={"Library API"}
              description={<p  style={{ color: "grey" }}>I've developed a <span  style={{textDecoration:'underline'}}>REST API</span> that to be used in the front end. Library api provides end-points for sign-up, sign-in, adding books to users' libraries. Technologies I've used while developing it are  <span style={{textDecoration:'underline'}}>  Node/Express.js, JsonWebToken, Joi and MongoDB.</span></p>}
              repoLink={"https://github.com/veyselboybay/LibraryRestApi"}
            />
          </Col>
        </Row>
        <hr/>
        {/* --------------------------------------DIVIDER------------------------------------------------ */}
        <Row>
          <Col md={6}>
            <ProjectDescription
              name={"Recipe Application"}
              description={<p style={{ color: "grey" }}>I’ve used <span style={{textDecoration:'underline'}}>React and Spoonacular API</span> to create a recipe application where users can see
                popular or vegetarian recipes for their next meal. Also, they can search for recipes and
                find delicious meals.</p>}
              repoLink={"https://github.com/veyselboybay/react-recipe-app"}
            />
          </Col>
          <Col md={6}>
            <ProjectDescription
              name={"Patient Control System"}
              description={<p  style={{ color: "grey" }}>I've created a full stack application using <span style={{textDecoration:'underline'}}> React, NodeJS, GraphQL API and MongoDB.</span>
                Users can register and log in to the system as well as display and add/edit their data either as a nurse or patient.</p>}
              repoLink={"https://github.com/veyselboybay/patient-nurse-app"}
            />
          </Col>
        </Row>
        {/* --------------------------------------DIVIDER------------------------------------------------ */}
        <Row style={{width:'50%', marginRight:'auto',marginLeft:'auto'}}>
          <Button
          style={{ marginLeft: "auto", marginRight: "30px" }}
          size="sm"
          variant="outline-primary"
          href="https://github.com/veyselboybay"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} /> Check out all my work
        </Button>
        </Row>
        
      </Container>
    </div>
  );
}

const ProjectHeading = styled.div`
  display: inline-block;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px 20px;
  font-weight: 500;
  background-color: #eff8ec;
  color: #eb6440;
  border-radius: 10%;
`;
export default Projects;
