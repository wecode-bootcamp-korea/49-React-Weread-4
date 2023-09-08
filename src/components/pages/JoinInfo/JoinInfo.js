import React, { useState } from "react";
import "./JoinInfo.scss";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { email, password, passwordCheck } = inputs;

  // const [className, setClassName] = useState("loginButton");
  // const [abled, setAbled] = useState(false);

  const onChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.className]: event.target.value,
    });
  };

  const navigate = useNavigate();

  // const handleJoin = () => {
  //   fetch("http://localhost:8000/", {
  //     method: "POST",
  //     headers: [["Content-Type", "application/json"]],
  //     body: JSON.stringify({
  //       // name: "soyeun",
  //       email: email,
  //       password: password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("연결");
  //     });
  // };

  const SelectsBirthYear = () => {
    const years = [];
    for (let i = 2023; i >= 1920; i--) {
      years.push(<option key={i}>{i}년</option>);
    }
    return (
      <select className="birthYear" id="birthSelect" defaultValue="2000년">
        {years}
      </select>
    );
  };

  const SelectsBirtMonth = () => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(<option key={i}>{i}월</option>);
    }
    return (
      <select className="birthMonth" defaultValue="1월">
        {months}
      </select>
    );
  };

  const SelectsBirtDay = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(<option key={i}>{i}일</option>);
    }
    return (
      <select className="birthDay" defaultValue="1일">
        {days}
      </select>
    );
  };

  return (
    <div className="main">
      <div className="joinInfo">
        <header>
          <div className="backDiv">
            <img
              className="backArrow"
              src="/images/Back_arrow.jpg"
              alt="뒤로가기"
              onClick={() => navigate(-1)}
            ></img>
            <span className="back">뒤로</span>
          </div>
        </header>
        <section>
          <h1>회원가입</h1>
          <div className="text">
            <p className="text1">기본 정보</p>
            <p className="text2">필수 사항</p>
          </div>
          <div className="list">
            <input
              className="email"
              value={email}
              type="email"
              placeholder="이메일"
              onChange={onChange}
            ></input>
            <input
              className="password"
              value={password}
              type="password"
              placeholder="비밀번호"
              onChange={onChange}
            ></input>
            <input
              className="passwordCheck"
              value={passwordCheck}
              type="password"
              placeholder="비밀번호 확인"
              onChange={onChange}
            ></input>
          </div>
          <div className="nick">
            <label htmlFor="nickName">
              닉네임과 프로필 이미지
              <span className="notEssential">선택 사항</span>
            </label>
            <input id="nickName" type="text" placeholder="닉네임"></input>
          </div>
          <div className="phone">
            <label htmlFor="phoneNumber">
              전화번호<span className="notEssential">선택 사항</span>
            </label>
            <div className="selectInput">
              <select defaultValue="010">
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="019">019</option>
              </select>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="휴대폰 번호를 입력하세요."
              ></input>
            </div>
          </div>
          <div className="birth">
            <label htmlFor="birthSelect">
              생일<span className="notEssential">선택 사항</span>
            </label>
            <div className="selectBox">
              <div className="yearWrap">
                <SelectsBirthYear />
              </div>
              <div className="monthWrap">
                <SelectsBirtMonth />
              </div>
              <div className="dayWrap">
                <SelectsBirtDay />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <button
            className="joinButton"
            // disabled={abled}
            type="button"
            // onClick={handleJoin}
          >
            회원 가입
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Main;
