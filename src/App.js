import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import SignInPage from "./pages/SignInPage";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import NewQuestion from "./pages/NewQuestion";
import LeaderBoard from "./pages/LeaderBoard";
import { useSelector } from "react-redux";
import QuestionDetail from "./pages/QuestionDetail";

const pages = [
  { id: "Home", name: "Home" },
  { id: "add", name: "New Question" },
  { id: "leaderboard", name: "Leader Board" },
];
function App(props) {
  const loggedUser = useSelector((state) => state.loggedUser.value);
  const islogged = loggedUser ? true : false;
  return (
    <>
      {islogged && <Header pages={pages} />}
      <Routes>
        {islogged && (
          <Route path="*" element={<Main />}>
            <Route path="" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home></Home>}></Route>
            <Route path="questions/:id" element={<QuestionDetail />} />
            <Route path="add" element={<NewQuestion />}></Route>
            <Route
              path="leaderboard"
              element={<LeaderBoard></LeaderBoard>}
            ></Route>
            <Route path="Profile" element={<Box>Profile</Box>}></Route>
          </Route>
        )}
        {!islogged && (
          <Route path="" element={<SignInPage />}>
            <Route path="*" element={<Navigate to="" />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
