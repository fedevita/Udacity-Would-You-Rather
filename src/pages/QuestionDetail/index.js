import { Box, Container } from "@mui/material";
import React from "react";
import CardFilter from "../../components/CardFilter";
import QuestionDetailCard from "../../components/QuestionDetailCard";
import { useSelector } from "react-redux";
import EmptyCard from "../../components/EmptyCard";
import { useParams } from "react-router-dom";

export default function QuestionDetail() {
  const questions = useSelector((state) => state.questions.value).map((el) => {
    return {
      ...el,
      Answered:
        el.optionOne.votes.length + el.optionTwo.votes.length === 0
          ? false
          : true,
    };
  });

  const { id } = useParams();

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
          {questions
            .filter((el) => el.id === id)
            .map((question) => (
              <QuestionDetailCard
                key={question.id}
                questionData={question}
              ></QuestionDetailCard>
            ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
