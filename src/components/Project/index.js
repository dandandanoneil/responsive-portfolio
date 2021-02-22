import React from "react";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Project(props) {
  return (
    <Col md="6">
      <a href={props.project.gitHubLink} target="blank">
        <Image
          fluid
          src={props.project.image}
          alt={props.project.title} 
          className="border border-primary"/>
      </a>
      <h5>{props.project.title}</h5>
      <div>
        <a href={props.project.gitHubLink} target="blank">
          GitHub Repo
        </a>
        {" | "}
        <a href={props.project.deployedLink} target="blank">
          Deployed Web App
        </a>
        <div><i>{props.project.demoCredentials}</i></div>
        <div><i>{props.project.collaborators}</i></div>
        <h6>{props.project.technologies}</h6>
        <p>{props.project.description}</p>
      </div>
    </Col>
  );
}

export default Project;
