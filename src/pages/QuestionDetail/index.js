import { Box, Container } from "@mui/material";
import React from "react";
import CardFilter from "../../components/CardFilter";
import QuestionDetailCard from "../../components/QuestionDetailCard";
import { useSelector } from "react-redux";
import EmptyCard from "../../components/EmptyCard";
import { useParams } from "react-router-dom";

export default function QuestionDetail() {
  const loggeduser = useSelector((state) => state.loggedUser.value);
  const users = useSelector((state) => state.users.value);
  const questions = useSelector((state) => state.questions.value).map((el) => {
    return {
      ...el,
      userData: users.filter((us) => el.author === us.id)[0],
      Answered:
        el.optionOne.votes.includes(loggeduser.id) ||
        el.optionTwo.votes.includes(loggeduser.id),
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
