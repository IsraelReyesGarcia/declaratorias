import { useRef, useState, useEffect } from "react";
import "./App.css";
import { useInterval } from "react-use";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Plot from './pages/Plot';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plots" element={<Plot />} />
    </Routes>
  );
}

export default App;
