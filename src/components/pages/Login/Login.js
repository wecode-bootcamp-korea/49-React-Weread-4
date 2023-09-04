import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [className, setClassName] = useState("loginButton");
  const [abled, setAbled] = useState(false);

  const saveUserEmail = (event) => {
    setEamil(event.target.value);
    email.includes("@") && password.length >= 5
      ? setClassName("loginButton")
      : setClassName("loginButtonNotAction");

    email.includes("@") && password.length >= 5
      ? setAbled(false)
      : setAbled(true);
  };

  const saveUserPassword = (event) => {
    setPassword(event.target.value);
    email.includes("@") && password.length >= 5
      ? setClassName("loginButton")
      : setClassName("loginButtonNotAction");

    email.includes("@") && password.length >= 5
      ? setAbled(false)
      : setAbled(true);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="imageContainer">
          <img
            className="wecodeLogo"
            src="/images/Logo.png"
            alt="위코드로고"
          ></img>
          <img
            className="logoText"
            src="/images/logo_wecode.png"
            alt="로고글씨"
          ></img>
        </div>
        <div className="inputContainer">
          <input
            className="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={saveUserEmail}
          ></input>
          <input
            className="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={saveUserPassword}
          ></input>
          <button className={className} disabled={abled}>
            로그인
          </button>
          <div className="loginOption">
            <div className="join">
              <Link to="/joinInfo">
                <p>회원 가입</p>
              </Link>
            </div>
            <div className="divide">|</div>
            <div className="passwordFind">
              <p>비밀번호 찾기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
