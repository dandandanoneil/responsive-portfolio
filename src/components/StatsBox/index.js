import React from "react";

import headshot from "../../images/dan-oneil-headshot.jpg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function StatsBox() {
  return (
    <Row>
      <Col lg="3" md="4" xs="6" className="mb-3">
        <Image fluid rounded src={headshot} alt="Dan O'Neil headshot" />
      </Col>

      <Col lg="6" md="8" xs="6" className="mb-3">
        <Card bg="primary" className="p-1">
          <Table borderless size="sm" variant="dark ">
            <tbody>
              <tr><th>NAME:</th><td>Dan O'Neil</td></tr>
              <tr><th>PRONOUNS:</th><td>he/him/his <small>(<a href="https://www.mypronouns.org/he-him" target="blank" className="text-light">what's this?</a>)</small></td></tr>
              <tr><th>HOMETOWN:</th><td>Chagrin Falls, OH </td></tr>
              <tr><th>LOCATION:</th><td>Philadelphia, PA </td></tr>
              <tr><th>EDUCATION:</th><td>Certificate, Full Stack Web Development, <i>University of Pennsylvania</i><br/>BFA Theatre, <i>The University of the Arts</i></td></tr>
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
}

export default StatsBox;