import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";

function App() {
  const islogged = true;
  return (
    <Routes>
      {islogged && <Route exact path="/" element={<Home />} />}
      {!islogged && <Route exact path="/" element={<SignInPage />} />}
    </Routes>
  );
}

export default App;
