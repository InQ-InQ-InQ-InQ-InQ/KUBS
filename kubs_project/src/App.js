/* eslint-disable */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
import ApplyPage from "./pages/ApplyPage";
import MainPage from "./pages/MainPage";
import CompletePage from "./pages/CompletePage";


const App = () => {

  return(
    <div>
       {/*
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApplyPage/>}/>
          <Route path="/login" element={<ApplyPage/>}/>
          <Route path="/register" element={<ApplyPage/>}/>
        </Routes>
      </BrowserRouter>
      */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/apply" element={<ApplyPage/>}/>
          <Route path="/complete" element={<CompletePage/>}/>
        </Routes>
      </BrowserRouter>
       


    </div>
  );
};

export default App;