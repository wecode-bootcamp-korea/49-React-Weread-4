import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;

  const handleUserInfo = (event) => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const isInputValid = email.includes("@") && password.length >= 5;

  // const handleLogin = () => {
  //   fetch("http://localhost:8000/", {
  //     method: "POST",
  //     headers: [["Content-Type", "application/json"]],
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("로그인 확인하기");
  //     });
  // };

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
        <form className="inputContainer">
          <input
            className="email"
            type="email"
            placeholder="이메일"
            name="email"
            onChange={handleUserInfo}
          ></input>
          <input
            className="password"
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={handleUserInfo}
          ></input>
          <button
            className="loginButton "
            disabled={!isInputValid}
            type="button"
            // onClick={handleLogin}
          >
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
        </form>
      </div>
    </div>
  );
};

export default Login;
