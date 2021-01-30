import React from "react";
import Container from "../components/Container";
import { Document, Page } from 'react-pdf';
import resume from "../images/resume.pdf";

function About() {
  return (
    <div>
      <Container>

        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>

      </Container>
    </div>
  );
}

export default About;
