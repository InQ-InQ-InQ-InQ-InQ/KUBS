import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './util/PrivateRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import MyinfoPage from './pages/MyinfoPage';

function App() {
  const token = sessionStorage.getItem('authorized');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute authenticated={token} component={<LoginPage />} />} />
          <Route path="/register" element={<PrivateRoute authenticated={token} component={<RegisterPage />} />} />
          <Route path="/main" element={<PrivateRoute authenticated={token} component={<MainPage />} />} />
          <Route path="/mypage" element={<MyinfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
