import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TestPage from './pages/TestPage';
import ApplyPage from "./pages/ApplyPage";
import MainPage from "./pages/MainPage";
import CompletePage from "./pages/CompletePage";

const App = () => {
  const token = localStorage.getItem('authorized');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute authenticated={token} component={<LoginPage />} />} />
          <Route path="/register" element={<PrivateRoute authenticated={token} component={<RegisterPage />} />}></Route>
          <Route path="/main" element={<TestPage />} />
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/apply" element={<ApplyPage/>}/>
          <Route path="/complete" element={<CompletePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;