import React from "react";
import Container from "react-bootstrap/Container";
import Heading from "./StyledHeading";
import Technologies from "./Technologies";
import Education from "./Education";
import Experience from "./Experience";
import Volunteer from "./Volunteer";

function About() {
  return (
    <div className="sectionAbout" id="about">
      <Heading>
        <h2>About Me</h2>
      </Heading>
      <Experience />
      <Education />
    </div>
  );
}


export default About;
