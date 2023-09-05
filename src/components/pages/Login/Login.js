import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.scss";

const Login = () => {
  const Membership = () => {
    return (
      <Link className="membership" to={"/main"}>
        회원가입
      </Link>
    );
  };
  const [userInfo, setUserInfo] = useState({ email: "", pw: "" });
  const { email, pw } = userInfo;
  const isCheckValidation = email.includes("@") && pw.length >= 5;

  const hadleUserUserInfo = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
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
              name="email"
              onChange={hadleUserUserInfo}
            ></input>
            <input
              className="loginPassword"
              placeholder="비밀번호"
              type="password"
              name="pw"
              onChange={hadleUserUserInfo}
            ></input>
            <input
              className="loginButton"
              type="button"
              value="로그인"
              disabled={isCheckValidation}
              style={{
                backgroundColor: `${isCheckValidation ? "#2d71f7" : "gray"}`,
              }}
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
