// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import PlayPage from "./PlayPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
