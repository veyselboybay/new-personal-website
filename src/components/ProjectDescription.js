import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function ProjectDescription({ name, description, repoLink, apiLink }) {
  return (
    <div className="projectDescription">
      <h5 style={{ display: "inline-block", borderBottom: "1px solid blue" }}>
        {name}
      </h5>      
      {description}
      {apiLink && <>
        <p style={{ display: "flex" }}>
          <Button
            style={{ marginLeft: "20px" }}
          size="sm"
          variant="outline-success"
          href={repoLink}
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} /> See Client Repo
          </Button>
          <Button
          style={{ marginLeft: "auto", marginRight: "30px" }}
          size="sm"
          variant="outline-success"
          href={apiLink}
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} /> See API Repo
        </Button>
      </p>
      </>}
      {!apiLink && <p style={{ display: "flex" }}>
        <Button
          style={{ marginLeft: "auto", marginRight: "30px" }}
          size="sm"
          variant="outline-success"
          href={repoLink}
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} /> See Repository
        </Button>
      </p>}
    </div>
  );
}

export default ProjectDescription;
