import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Bio() {
  return (
    <Row>
      <Col lg="9" className="pull-left">
        <p>I’ve always been drawn to crossword puzzles and logic games - I was introduced to coding in high school, and fell in love!</p>
        <p>As a full-stack web developer, I am a strong communicator: able to keep an eye on both big picture ideas and project minutiae simultaneously. Before enrolling in UPenn’s Coding Boot Camp, I worked in the arts as a director and creative producer for over a decade, and am ready to bring practical skills like project management, collaborative problem solving & creative thinking to a career as a web developer. As a coder, I excel at working through and developing algorithms, making clean, intuitive user interfaces, and dreaming up and implementing features to improve the user experience. Ideally, I’m seeking a job where I can see a strong connection between my work and the end user experience, and where I can learn from and collaborate with more experienced developers.</p>
        <p>When I’m not behind a computer screen, you can find me at a drag show, singing with friends around a piano, or showing someone <a href="https://www.instagram.com/p/BxyP0m3Dbcr/?utm_source=ig_web_copy_link" target="blank">pictures of my nieces</a>.</p>
      </Col>
    </Row>
  );
}

export default Bio;