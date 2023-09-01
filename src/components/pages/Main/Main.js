import React from "react";
import "./Main.scss";
import { Link } from "react-router-dom";

const Year = () => {
  const YearList = [];
  for (let i = 1900; i < 2024; i++) {
    YearList.push(<option key={i}>{i}년</option>);
  }
  return <select className="birthdayYear">{YearList}</select>;
};

const Month = () => {
  const MonthList = [];
  for (let i = 1; i < 13; i++) {
    MonthList.push(<option key={i}>{i}월</option>);
  }
  return <select className="birthdayMonth">{MonthList}</select>;
};

const Date = () => {
  const DateList = [];
  for (let i = 1; i < 32; i++) {
    DateList.push(<option key={i}>{i}일</option>);
  }
  return <select className="birthdayDate">{DateList}</select>;
};

const Main = () => {
  const Back = () => {
    return (
      <Link className="back" to={"/"}>
        〈 뒤로
      </Link>
    );
  };

  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <Back />
        </div>

        <div className="body">
          <strong>회원가입</strong>
          <div className="bodyBasic">
            <div className="bodyBasicHeader">
              <div>기본정보</div>
              <div>필수 사항</div>
            </div>
            <input placeholder="이메일"></input>
            <input placeholder="비밀번호"></input>
            <input placeholder="비밀번호 확인"></input>
          </div>
          <div className="bodyBasicProfile">
            <div className="bodyBasicProfileHeader">
              <div>닉네임과 프로필 이미지</div>
              <div>선택 사항</div>
            </div>

            <input placeholder="닉네임"></input>
          </div>
          <div className="bodyBasicPhone">
            <div className="bodyBasicPhoneHeader">
              <div>전화번호</div>
              <div>선택 사항</div>
            </div>
            <div className="bodyBasicPhoneNumber">
              <select>
                <option>010</option>
                <option>011</option>
                <option>016</option>
              </select>
              <input placeholder="휴대폰 번호를 입력해 주세요"></input>
            </div>
          </div>
          <div className="birthday">
            <div className="birthdayHeader">
              <div>생일</div>
              <div>선택 사항</div>
            </div>

            <div className="birthdaySelect">
              <Year />
              <Month />
              <Date />
            </div>
          </div>
        </div>

        <div className="joinMembership">
          <button>회원 가입</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
