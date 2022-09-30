import Home from "./pages/index";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/:section" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
