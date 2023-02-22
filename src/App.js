import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemon" element={<PokemonInfo />}></Route>
      </Routes>
      <ul></ul>
    </div>
  );
}

export default App;
