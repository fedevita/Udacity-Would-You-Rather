import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import SignInPage from "./pages/SignInPage";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import NewQuestion from "./pages/NewQuestion";
import LeaderBoard from "./pages/LeaderBoard";
const pages = [
  { id: "home", name: "Home" },
  { id: "NewQuestion", name: "New Question" },
  { id: "LeaderBoard", name: "Leader Board" },
];
function App() {
  const islogged = true;
  return (
    <>
      {islogged && <Header pages={pages} />}
      <Routes>
        {islogged && (
          <Route path="" element={<Main />}>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="NewQuestion" element={<NewQuestion />}></Route>
            <Route
              path="LeaderBoard"
              element={<LeaderBoard></LeaderBoard>}
            ></Route>
            <Route path="Profile" element={<Box>Profile</Box>}></Route>
          </Route>
        )}
        {!islogged && <Route path="" element={<SignInPage />} />}
      </Routes>
    </>
  );
}

export default App;
