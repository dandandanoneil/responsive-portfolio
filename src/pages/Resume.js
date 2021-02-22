import React from "react";
// import { Document, Page } from 'react-pdf';

import PageTitle from "../components/PageTitle";

import resume from "../images/resume.pdf"
import resume1 from "../images/resume-pg-1.png";
import resume2 from "../images/resume-pg-2.png";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <div>
      <Container>
        <PageTitle>Resume</PageTitle>

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
        <Image
          fluid
          src={resume1}
          alt={"Resume Page 1"} 
          style={{ maxWidth: "800px", width: "100%" }}
        />
        <Image
          fluid
          src={resume2}
          alt={"Resume Page 2"} 
          style={{ maxWidth: "800px", width: "100%" }}
        />


      </Container>
    </div>
  );
}

export default About;
