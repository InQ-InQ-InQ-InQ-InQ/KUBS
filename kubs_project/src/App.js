import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const App = () => {

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;