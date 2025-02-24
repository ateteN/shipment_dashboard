import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Import Router components
import Home from "./pages/home/Home";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";


function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" :"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
