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
import { useDispatch } from "react-redux";
import { getUsers } from "./features/users";
import { getQuestions } from "./features/questions";

const pages = [
  { id: "Home", name: "Home" },
  { id: "NewQuestion", name: "New Question" },
  { id: "LeaderBoard", name: "Leader Board" },
];
function App() {
  const dispatch = useDispatch();
  dispatch(getUsers());
  dispatch(getQuestions());
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
            <Route path="NewQuestion" element={<NewQuestion />}></Route>
            <Route
              path="LeaderBoard"
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
