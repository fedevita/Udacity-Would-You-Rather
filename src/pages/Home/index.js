import { Box, Container } from "@mui/material";
import React from "react";
import CardFilter from "../../components/CardFilter";
import QuestionCard from "../../components/QuestionCard";

export default function Home() {
  const cardnumber = [...Array(10).keys()];
  return (
    <React.Fragment>
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
          <CardFilter />
          {cardnumber.map((x) => (
            <QuestionCard key={x}></QuestionCard>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
