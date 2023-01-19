import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "./StyledHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ProjectDescription from "./ProjectDescription";
import styled from "styled-components";

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
        {/* --------------------------------------DIVIDER------------------------------------------------ */}
        <ProjectHeading>React Based Projects</ProjectHeading>
        <Row>
          <Col md={6}>
            <ProjectDescription
              name={"Recipe Application"}
              description={`I’ve used React and Spoonacular API to create a recipe application where users can see
                popular or vegetarian recipes for their next meal. Also, they can search for recipes and
                find delicious meals.`}
              repoLink={"https://github.com/veyselboybay/react-recipe-app"}
            />
          </Col>
          <Col md={6}>
            <ProjectDescription
              name={"Patient Control System"}
              description={`I've created a full stack application using React, NodeJS, GraphQL API and MongoDB.
                Users can register and log in to the system as well as display and add/edit their data either as a nurse or patient.`}
              repoLink={"https://github.com/veyselboybay/patient-nurse-app"}
            />
          </Col>
        </Row>
        {/* --------------------------------------DIVIDER------------------------------------------------ */}
        <ProjectHeading>NodeJs - ExpressJs Projects</ProjectHeading>
        <Row>
          <Col md={6}>
            <ProjectDescription
              name={"JWT Authentication Project"}
              description={`Created a JWT Authentication using Expressjs. Also, I’ve used @hapi/joi to validate the
                data and bcryptjs to crypt the password before saving it to MongoDB.`}
              repoLink={"https://github.com/veyselboybay/JWT_Auth_ExpressJs"}
            />
          </Col>
          <Col md={6}>
            <ProjectDescription
              name={"RestApi ExpressJS Project"}
              description={`I've created a restful API with ExpressJS. HTTP methods are tested using POSTMAN and
                the data is saved to the MongoDB Atlas cloud database.`}
              repoLink={"https://github.com/veyselboybay/RestApi_Mongo_Express"}
            />
          </Col>
        </Row>
        {/* --------------------------------------DIVIDER------------------------------------------------ */}
        <ProjectHeading>Flutter/Dart Projects</ProjectHeading>
        <Row>
          <Col md={6}>
            <ProjectDescription
              name={"Meal App"}
              description={`This is a meal mobile application and it's created using Flutter/Dart language. In this application, users can display meals and see its ingredients and how-to-cook instructions.`}
              repoLink={"https://github.com/veyselboybay/FlutterMealApp"}
            />
          </Col>
          <Col md={6}>
            <ProjectDescription
              name={"ToDo App"}
              description={`I've created a ToDo list mobile application using Flutter/Dart language. Users can create a todo list, add and delete items from their list.`}
              repoLink={"https://github.com/veyselboybay/ToDoAppFlutter"}
            />
          </Col>
        </Row>
        {/* --------------------------------------DIVIDER------------------------------------------------ */}
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
