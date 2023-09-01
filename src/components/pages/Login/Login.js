import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
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
            <input className="loginEmail" placeholder="이메일"></input>
            <input
              className="loginPassword"
              placeholder="비밀번호"
              type="password"
            ></input>
            <input className="loginButton" type="button" value="로그인"></input>
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
