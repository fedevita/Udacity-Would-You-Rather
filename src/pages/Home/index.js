import { Box, Container } from "@mui/material";
import React from "react";
import CardFilter from "../../components/CardFilter";
import QuestionCard from "../../components/QuestionCard";
import { useSelector } from "react-redux";
import EmptyCard from "../../components/EmptyCard";

export default function Home() {
  const loggeduser = useSelector((state) => state.loggedUser.value);
  const users = useSelector((state) => state.users.value);
  const questions = useSelector((state) => state.questions.value).map((el) => {
    return {
      ...el,
      userData: users.filter((us) => el.author === us.id)[0],
      loggedUserData: loggeduser,
      Answered:
        el.optionOne.votes.includes(loggeduser.id) ||
        el.optionTwo.votes.includes(loggeduser.id),
    };
  });
  const filteredQuestions = (value) => {
    let answeredQuesitons = [];
    let unAnsweredQuesitons = [];
    if (state.Answered === true) {
      answeredQuesitons = value.filter((v) => v.Answered === true);
    }
    if (state.UnAnswered === true) {
      unAnsweredQuesitons = value.filter((v) => v.Answered === false);
    }
    return [...answeredQuesitons, ...unAnsweredQuesitons];
  };
  const [state, setState] = React.useState({
    Answered: true,
    UnAnswered: true,
  });
  const handleAnswered = (event) => {
    setState({
      UnAnswered: state.UnAnswered,
      Answered: event.target.checked,
    });
  };
  const handleUnAnswered = (event) => {
    setState({
      Answered: state.Answered,
      UnAnswered: event.target.checked,
    });
  };
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
          <CardFilter
            state={state}
            handleUnAnswered={handleUnAnswered}
            handleAnswered={handleAnswered}
          />
          {filteredQuestions(questions).length === 0 && (
            <EmptyCard text={"There are no elements!"} />
          )}
          {filteredQuestions(questions).map((question) => (
            <QuestionCard
              key={question.id}
              questionData={question}
            ></QuestionCard>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
