import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SignIn from "../SignIn";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: "50%" }}>
        <SignIn />
      </Box>
    </Container>
  );
}
