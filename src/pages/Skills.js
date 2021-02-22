import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faServer, faTable, faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far);

function Skills() {
    return (
        <div>
            <Container>
                <h1>Soft Skills</h1>

                <Row className="justify-content-center">
                    <Col md="10">
                        <Row className="justify-content-center">
                            <Col md="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["far", "handshake"]} /></h1>
                                    Collaborative Problem Solving
                                </Card>
                            </Col>
                            <Col md="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["far", "lightbulb"]} /></h1>
                                    Creative Thinking
                                </Card>
                            </Col>
                            <Col md="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["far", "map"]} /></h1>
                                    Project Management
                                </Card>
                            </Col>
                            <Col md="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["far", "calendar-check"]} /></h1>
                                    Event Planning
                                </Card>
                            </Col>
                            <Col md="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={faHandHoldingUsd} /></h1>
                                    Budgeting
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <h1>Technical Skills</h1>

                <Row className="justify-content-center">
                    <Col md="10">
                        <Row className="justify-content-center">
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><i className="icon-mongodb"></i></h1>
                                    MongoDB
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={faServer} /></h1>
                                    Express.js
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["fab", "react"]} /></h1>
                                    React.js
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["fab", "node"]} /></h1>
                                    Node.js
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><i className="icon-jquery"></i></h1>
                                    jQuery
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><i className="icon-mysql"></i></h1>
                                    MySQL
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={faTable} /></h1>
                                    Sequelize
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={faDatabase} /></h1>
                                    Mongoose
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["fab", "js-square"]} /></h1>
                                    JavaScript
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["fab", "html5"]} /></h1>
                                    HTML5
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["fab", "css3"]} /></h1>
                                    CSS3
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["fab", "bootstrap"]} /></h1>
                                    Bootstrap
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["fab", "java"]} /></h1>
                                    Java
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={["fab", "github"]} /></h1>
                                    GitHub
                                </Card>
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <Card className="text-center p-3 mb-3">
                                    <h1><FontAwesomeIcon icon={faTerminal} /></h1>
                                    Command Line
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Skills;
