// App.js
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import PlayPage from "./PlayPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
