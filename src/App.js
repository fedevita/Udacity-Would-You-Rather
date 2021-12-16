import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/ciao" element={<div>ciao</div>} />
    </Routes>
  );
}

export default App;
