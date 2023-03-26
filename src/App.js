import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ul></ul>
    </div>
  );
}

export default App;
