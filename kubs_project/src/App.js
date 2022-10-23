import React from "react";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("accessToken");

  if(!token) {
    return <LoginPage />
  }

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapPage/>}></Route>
          <Route path="/map" element={<MapPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;