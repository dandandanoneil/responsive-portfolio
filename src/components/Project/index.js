import React from "react";
import { Link } from "react-router-dom";
import Col from "../Col";

function Project(props) {
  return (
    <Col size="md-6">
      <Link to={props.project.gitHubLink} target="blank">
        <img 
        src={props.project.image}
        alt={props.project.title} 
        className="img-fluid border border-primary"/>
      </Link>
      <h5>{props.project.title}</h5>
      <div>
        <Link to={props.project.gitHubLink} target="blank">
          GitHub Repo
        </Link>
        {" | "}
        <Link to={props.project.deployedLink} target="blank">
          Deployed Web App
        </Link>
        <div><i>{props.project.demoCredentials}</i></div>
        <div><i>{props.project.collaborators}</i></div>
        <h6>{props.project.technologies}</h6>
        <p>{props.project.description}</p>
      </div>
    </Col>
  );
}

export default Project;
