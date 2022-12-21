import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ApplyPage from './pages/ApplyPage';
import MainPage from './pages/MainPage';
import CompletePage from './pages/CompletePage';

function App() {
  const token = localStorage.getItem('authorized');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute authenticated={token} component={<LoginPage />} />} />
          <Route path="/register" element={<PrivateRoute authenticated={token} component={<RegisterPage />} />}></Route>
          <Route path="/main" element={<PrivateRoute authenticated={token} component={<MainPage />} />} />
          <Route path="/apply" element={<PrivateRoute authenticated={token} component={<ApplyPage />} />} />
          <Route path="/complete" element={<PrivateRoute authenticated={token} component={<CompletePage />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
