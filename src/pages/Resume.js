import React from "react";
import Container from "../components/Container";
// import { Document, Page } from 'react-pdf';
import Row from "../components/Row";
import PageTitle from "../components/PageTitle";
import resume from "../images/resume.pdf"
import resume1 from "../images/resume-pg-1.png";
import resume2 from "../images/resume-pg-2.png";

function About() {
  return (
    <div>
      <Container>

        <Row>
          <PageTitle>Resume</PageTitle>
        </Row>

        {/* <Document file={resume}>
          <Page pageNumber={1} />
        </Document> */}
        <a
          href={resume}
          download
          target="blank"
        >
          <i>Download as a PDF</i>
        </a>
        <br/>
        <img
          src={resume1}
          alt={"Resume Page 1"} 
          className="img-fluid"
          style={{ maxWidth: "800px", width: "100%" }}
        />
        <img
          src={resume2}
          alt={"Resume Page 2"} 
          className="img-fluid"
          style={{ maxWidth: "800px", width: "100%" }}
        />


      </Container>
    </div>
  );
}

export default About;
