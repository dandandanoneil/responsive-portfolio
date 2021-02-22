import React from "react";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";

import Container from "react-bootstrap/Container";

function NotFound() {
  const location = useLocation();

  return (
    <div>
      <Container>
          <PageTitle className="text-center"><code>{location.pathname}</code> not found</PageTitle>
      </Container>
    </div>
  );
}

export default NotFound;
