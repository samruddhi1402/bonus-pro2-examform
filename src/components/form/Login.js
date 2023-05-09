import React, { useState, useEffect } from "react";
import style from "./Login.module.css";
import CustomButton from "../custom/CustomButton";
import CustomInput from "../custom/CustomInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isRefresh } from "../../Recoil";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userList, setUserList] = useState([]);
  const nav = useNavigate();
  const setLogin = useSetRecoilState(isRefresh);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData"));

    setUserList(data);
  }, []);
  // console.log(userList);
  function handleLogin() {
    let valid = false;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
    if (email === "" || password === "") {
      alert("Fill the form first");



      //validation for email
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email format");
        return;
      }
      valid = true;
      setEmailError("");



      //validation for password
      const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
      if (!passwordRegex.test(password)) {
        setPasswordError(
          "Password should be 4-8 characters long and can contain letters, numbers and special characters !@#$%^&*"
        );
        return;
      }
      valid = true;
      setPasswordError("");
    } else if (userList !== null) {
      const userFind = userList.find(
        (x) =>
          (x.email === email || x.email === "") &&
          (x.password === password || x.password === "")
      );


      
    // check if user already exists or not?
      if (!userFind) {
        alert("No user found. Please sign up!! ");
        setEmail("");
        setPassword("");
      } else {
        alert(`${userFind.userName} you are successfully  login 🎉🎉`);
        setLogin(true);
        nav("/questionform");
      }
    } else {
      alert("Please Signup first ");
    }
  }

  return (
    <>
     
      <div className={style.wrap}>
        <h3>Login Page for user</h3>
        <CustomInput
          className={style.email}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onChange={(e) => {...obj,obj.setEmail(e.target.value)}}
        />
        {emailError && <p className={style.error}>{emailError}</p>}
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
          onClick={handleLogin}
          btntxt="Login"
        />

        <p>
          Not registered yet? <Link to="/signup"> Signup</Link>
        </p>
      </div>
    </>
  );
}
