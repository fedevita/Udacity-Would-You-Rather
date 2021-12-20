import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import { Box } from "@mui/material";
import Header from "./components/Header";
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
          <Route path="" element={<Home />}>
            <Route path="home" element={<Box>home</Box>}></Route>
            <Route path="NewQuestion" element={<Box>NewQuestion</Box>}></Route>
            <Route path="LeaderBoard" element={<Box>LeaderBoard</Box>}></Route>
            <Route path="Profile" element={<Box>Profile</Box>}></Route>
          </Route>
        )}
        {!islogged && <Route path="" element={<SignInPage />} />}
      </Routes>
    </>
  );
}

export default App;
