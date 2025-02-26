import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";
import Shipments from "./pages/shipments/Shipments";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="shipments" element={<Shipments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;