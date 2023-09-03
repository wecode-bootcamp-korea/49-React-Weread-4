import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [turnOn, setTurnOn] = useState(true);
  const [color, setColor] = useState("gray");
  const [email, setEmail] = useState("");

  const saveUserId = (e) => {
    setEmail(e.target.value);
    email.includes("@") && password.length >= 5
      ? setTurnOn(false)
      : setTurnOn(true);

    email.includes("@") && password.length >= 5
      ? setColor("#2d71f7")
      : setColor("gray");
  };

  const [password, setPassword] = useState("");
  const saveUserPassword = (e) => {
    setPassword(e.target.value);
    email.includes("@") && password.length >= 5
      ? setTurnOn(false)
      : setTurnOn(true);

    email.includes("@") && password.length >= 5
      ? setColor("#2d71f7")
      : setColor("gray");
  };

  const Membership = () => {
    return (
      <Link className="membership" to={"/main"}>
        회원가입
      </Link>
    );
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginLogo">
          <img src="/images/Logo.png" alt=""></img>
          <img src="/images/logo_wecode.png" alt=""></img>
        </div>
        <div className="loginBody">
          <form className="loginForm">
            <input
              className="loginEmail"
              placeholder="이메일"
              value={email}
              onChange={saveUserId}
            ></input>
            <input
              className="loginPassword"
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={saveUserPassword}
            ></input>
            <input
              className="loginButton"
              type="button"
              value="로그인"
              disabled={turnOn}
              style={{ backgroundColor: color }}
            ></input>
          </form>
          <div className="loginFooter">
            <Membership />
            <div>|</div>
            <div>비밀번호 찾기</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
