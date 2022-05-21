import { Link, Typography } from "@mui/material";
import React from "react";

import { Container, FooterTxt } from "./styles";
function Copyright() {
  return (
    <Typography variant="body2" color="text.primary">
      {"Copyright © "}
      <Link color="inherit" href="https://dew-ill.vercel.app/">
        DeW-ill Portfolio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Container>
      <FooterTxt>
        {" "}
        <Copyright />
      </FooterTxt>
    </Container>
  );
}
