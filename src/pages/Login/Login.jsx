import React, { useState } from "react";
import assets from "../../assets/assets";
import "./Login.css";
import { signup,login } from "../../config/firebase";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    if(currState==="Sign up"){
      signup(userName,email,password);
    }
    else{
      login(email,password)
    }
  }

  return (
    <div className="login">
      <img src={assets.logo_big} alt="Company Logo" className="logo" />

      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign up" ? (
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            type="text"
            placeholder="usernme"
            className="form-input"
            required
          />
        ) : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email Address"
          className="form-input"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
          className="form-input"
        />
        <button type="submit">
          {currState === "Sign up" ? "Create account" : "Login now"}
        </button>

        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account
              <span onClick={() => setCurrState("Sign up")}>Click Here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
