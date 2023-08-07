import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./authentication.scss";

export default function SignIn(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handle Sign in event
   * @param {*} event
   */
  const signIn = (event) => {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_LOCAL_API_DOMAIN}/user/signin`,
        { data: data },
        { withCredentials: true }
      )
      .then((res) => {
        navigate("/layout");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  /**
   * Email change event
   * @param {*} event
   */
  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  /**
   * password change event
   * @param {*} event
   */
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="LoginSpace">
      <form onSubmit={signIn} className="authForm">
        <fieldset>
          <legend>Sign in</legend>
          <div>
            <label>Email</label>
            <input type="email" name={email} onChange={emailChange}></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name={password}
              onChange={passwordChange}
            ></input>
          </div>
          <input type="submit" value="Sign in" className="standard"></input>
          <a href="/register">Register</a>
        </fieldset>
      </form>
    </div>
  );
}
