import React ,{ useState } from "react";
import "./Login.scss";
import {Link} from "react-router-dom";

const Login = () => {


  const [userEmail, setUserEmail] = useState('');
  const saveUserId = (event)=> {
    setUserEmail(event.target.value);
    console.log(event.target.value)
  }

  const [userPassword, setUserPassword] = useState('')
  const saveUserPassword = (event)=> {
    setUserPassword(event.target.value);
    console.log(event.target.value)
  }

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
        <input type="button" id="btn" value="로그인"/>
        <ul>
          <li><Link to='/main'>회원 가입</Link></li>
          <li>비밀번호 찾기</li>
        </ul>
      </section>
    </div>
  );
};

export default Login;
