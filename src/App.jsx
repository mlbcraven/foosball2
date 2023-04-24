import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./screens/home";
import Games from "./screens/games";
import History from "./screens/history";
import CurrentMatch from "./screens/currentmatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/history" element={<History />} />
          <Route path="/currentmatch" element={<CurrentMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
