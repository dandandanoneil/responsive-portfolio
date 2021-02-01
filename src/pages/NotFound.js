import React from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import PageTitle from "../components/PageTitle";

function NotFound() {
  const location = useLocation();

  return (
    <div>
      <Container>

        <Row>
          <PageTitle className="text-center"><code>{location.pathname}</code> not found</PageTitle>
        </Row>

      </Container>
    </div>
  );
}

export default NotFound;
