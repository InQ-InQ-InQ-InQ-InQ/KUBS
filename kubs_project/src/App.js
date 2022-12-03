import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TestPage from './pages/TestPage';

const App = () => {
  const token = localStorage.getItem('authorized');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute authenticated={token} component={<LoginPage />} />} />
          <Route path="/register" element={<PrivateRoute authenticated={token} component={<RegisterPage />} />}></Route>
          <Route path="/main" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
