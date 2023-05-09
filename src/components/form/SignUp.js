import React, { useEffect, useState } from "react";
import CustomButton from '../custom/CustomButton';
import CustomInput from '../custom/CustomInput'
import style from "./Login.module.css";
import { Link , useNavigate } from "react-router-dom";
// import Background from "../Backround/Backround"
// import signup from "../../images/signup.jpg";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [localStorageData, setLocalStorageData] = useState([]);

  const navigate = useNavigate();
  const nav=useNavigate()

  useEffect(() => {
    const admindata = localStorage.getItem("adminData");
    if (admindata) {
      setLocalStorageData(JSON.parse(admindata));
    }
  }, []);


  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setLocalStorageData(JSON.parse(data));
    }
  }, []);


  function handleSignUp() {
    const userInfo = {
      email: email,
      password: password,
      userName: userName,
    };
  
    // email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return;
    }
    setEmailError("");
  


    // password validation
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password should be 4-8 characters long and can contain letters, numbers and special characters !@#$%^&*");
      return;
    }
    setPasswordError("");

    // username validation
    const userNameRegex = /^[a-zA-Z]+$/i
    ;
    if (!userNameRegex.test(userName)) {
      setUserNameError("Username can only contain letters");
      return;
    }
    setUserNameError("");
  
    // check if user already exists
    if(localStorageData.find((user)=> user.email === email || user.userName === userName)){
      alert("User already exists. Please choose another email and username.");
      return;
    }
      
    localStorage.setItem('userData', JSON.stringify([...localStorageData, userInfo]));
    alert('Successfully Registered!!');
    navigate('/login');


    localStorage.setItem('adminData', JSON.stringify([...localStorageData, userInfo]));
    alert('Successfully Registered!!');
    nav('/adminlogin');

  
    setEmail('');
    setPassword('');
    setUserName('');
  }

  return (
    <>
      
      <div className={style.wrap}>
        <h3>Signup Page</h3>
        <CustomInput
          className={style.email}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className={style.error}>{emailError}</p>}
        <CustomInput
          className={style.password}
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {userNameError && <p className={style.error}>{userNameError}</p>}
        <CustomInput
          className={style.password}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className={style.error}>{passwordError}</p>}
        <CustomButton
          style={style.button}
          onClick={handleSignUp}
          btntxt="SignUp"
        />
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
  }