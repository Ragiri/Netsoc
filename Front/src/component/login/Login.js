import React, { useState } from "react";
import { backLink, setCurrentUser, frontLink } from "../../constant/constant";
import "./Login.scss";

const Login = () => {
  const [name, setName] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [email, setMail] = useState(undefined);

  const changeType = () => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  };

  const onClickLogin = () => {
    if (password && email) {
      fetch(`${backLink}/user/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass: password,
          email: email,
        }),
      }).then(async (res) => {
		  const tmp = await res.json()
		  setCurrentUser(tmp.user)
		  window.location.href = frontLink + '/explore'
	  });
    }
  };
  const onClickRegister = () => {
    if (password && email && name) {
      fetch(`${backLink}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          pass: password,
          email: email,
        }),
      });
    }
  };

  return (
    <div className="contained">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form >
            <h1>Create Account</h1>
            <div className="social-container"></div>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
            <input
              style={{ marginBottom: "5%" }}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={onClickRegister}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form >
            <h1>Sign in</h1>
            <div className="social-container"></div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
            <input
              style={{ marginBottom: "5%" }}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <a href="#">Forgot your password?</a> */}
            <button onClick={onClickLogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>If you already have an account</p>
              <button onClick={changeType} className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Guest!</h1>
              <p>You don't have account? Join Us!</p>
              <button onClick={changeType} className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
