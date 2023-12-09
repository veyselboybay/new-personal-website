import React from "react";
import Container from "react-bootstrap/Container";
import Heading from "./StyledHeading";
import Technologies from "./Technologies";
import Education from "./Education";
import Experience from "./Experience";
import Volunteer from "./Volunteer";
import Certifications from "./Certifications";

function About() {
  return (
    <div className="sectionAbout" id="about">
      <Heading>
        <h2>About Me</h2>
      </Heading>
      <Experience />
      <Education />
      <Certifications />
    </div>
  );
}


export default About;
