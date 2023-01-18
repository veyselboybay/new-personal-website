import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";
function ProjectDescription({ name, description, repoLink }) {
  return (
    <div className="projectDescription">
      <h5 style={{ display: "inline-block", borderBottom: "1px solid blue" }}>
        {name}
      </h5>
      <p style={{ color: "grey" }}>{description}</p>
      <p style={{ display: "flex" }}>
        <FontAwesomeIcon icon={faStar} style={{ marginRight: "10px" }} /> See
        Full Project
        <Button
          style={{ marginLeft: "auto", marginRight: "30px" }}
          size="sm"
          variant="outline-primary"
          href={repoLink}
          target="_blank"
        >
          <FontAwesomeIcon icon={faCodeBranch} /> Go to GitHub
        </Button>
      </p>
    </div>
  );
}

export default ProjectDescription;
