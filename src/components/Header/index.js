import React from "react";
import { Container, Title } from "./styles";

function Header(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
}

export default Header;
