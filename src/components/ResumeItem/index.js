import React from "react";

import { Container, HeaderCard, HeaderTitle, HeaderValues } from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <Container>
      <HeaderCard>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </HeaderCard>
      <HeaderValues>{value}</HeaderValues>
    </Container>
  );
};

export default ResumeItem;
