import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();
  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authorized");
    navigate("/");
  };

  return (
    <div>
      <h1>로그인 완료</h1>
      <Button onClick={onLogout}>로그아웃</Button>
    </div>
  );
};

export default TestPage;
