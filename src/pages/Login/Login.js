import React ,{ useState } from "react";
import "./Login.scss";
import { Link, } from "react-router-dom";

const Login = () => {


  const [isTurnOn, setIsTurnOn] = useState(false);
  const [className, setClassName] = useState("btn");
  const [userPassword, setUserPassword] = useState('')
  const [userEmail, setUserEmail] = useState('');


  const saveUserId = (event)=> {
    setUserEmail(event.target.value);

    userEmail.includes('@') && userPassword.length>=5
    ? setIsTurnOn(true)
    : setIsTurnOn(false);

    userEmail.includes('@') && userPassword.length>=5
    ? setClassName('btn')
    : setClassName('btnOn');
    
  }


  const saveUserPassword = (event)=> {
    setUserPassword(event.target.value);

    userEmail.includes('@') && userPassword.length>=5
    ? setIsTurnOn(true)
    : setIsTurnOn(false);

    userEmail.includes('@') && userPassword.length>=5
    ? setClassName('btn')
    : setClassName('btnOn');

  }

  // const bgChange=()=>{
  //   setClassName("btn");

  //   return !setIsTurnOn(false)
  //   ? className("btnOn")
  //   : className("btn");

  // }

  return (
    <div className="login">
      <header>
        <img className="mainLogo" src={process.env.PUBLIC_URL + '/Logo.png'} alt="위코드의 로고" />
        <img className="textLogo" src={process.env.PUBLIC_URL + '/logo_wecode.png'} alt="위코드의 한글 로고" />
      </header>
      <section className="textBlock">
        <input type="email" id="email" placeholder="이메일"
        value={userEmail}
        onChange={saveUserId}
        />
        <input type="password" id="password" placeholder="비밀번호"
        value={userPassword}
        onChange={saveUserPassword}
        />
        <div className="btnWrap">
          <input type="button"
          className={className}
          disabled={isTurnOn} value="로그인" />
        </div>
        <ul>
          <li><Link to='/main'>회원 가입</Link></li>
          <li>비밀번호 찾기</li>
        </ul>
      </section>
    </div>
  );
};

export default Login;
