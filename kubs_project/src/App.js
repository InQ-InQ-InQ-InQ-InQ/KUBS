import React from "react";
import LoginComponent from "./Components/LoginPage/LoginComponent";
import MapComponent from "./Components/MapPage/MapComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("accessToken");

  if(!token) {
    return <LoginComponent />
  }

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapComponent/>}></Route>
          <Route path="/map" element={<MapComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;