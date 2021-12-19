import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import { Box } from "@mui/material";
import Header from "./components/Header";

function App() {
  const islogged = true;
  return (
    <>
      {islogged && <Header />}
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
