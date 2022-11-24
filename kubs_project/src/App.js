/* eslint-disable */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
import ApplyPage from "./pages/ApplyPage";

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
          <Route path="/" element={<ApplyPage/>}/>
          <Route path="/Apply" element={<ApplyPage/>}/>
        </Routes>
      </BrowserRouter>
       


    </div>
  );
};

export default App;