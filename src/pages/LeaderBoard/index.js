import { Box, Container } from "@mui/material";
import React from "react";
import LeaderBoardGrid from "../../components/LeaderBoardGrid";

export default function LeaderBoard() {
  return (
    <Container disableGutters>
      <Box
        sx={{
          // bgcolor: "#cfe8fc",
          bgcolor: "grey.100",
          // height: "100vh",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <LeaderBoardGrid></LeaderBoardGrid>
      </Box>
    </Container>
  );
}
