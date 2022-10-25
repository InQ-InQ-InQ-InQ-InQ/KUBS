import React from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MapPage from "./pages/MapPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  // const token = localStorage.getItem("accessToken");

  // if(!token) {
  //   return <LoginPage />
  // }

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/map" element={<MapPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;