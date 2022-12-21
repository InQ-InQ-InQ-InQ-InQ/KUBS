/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApplyPage from "./pages/ApplyPage";
import MainPage from "./pages/MainPage";
import CompletePage from "./pages/CompletePage";

const App = () => {
  const token = localStorage.getItem('authorized');

  return (
    <div>
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