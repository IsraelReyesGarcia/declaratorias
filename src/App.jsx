import { useRef, useState, useEffect } from "react";
import "./App.css";
import { useInterval } from "react-use";
import Maps from '../src/components/Maps';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Maps />} />
    </Routes>
  );
}

export default App;
