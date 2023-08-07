// import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import "./authentication.scss";

const url = `${process.env.REACT_APP_LOCAL_API_DOMAIN}/user/register`;

export default function Register(props) {
  const navigate = useNavigate();
  //const { control, handleSubmit } = useForm();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("Male");

  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const changeGender = (event) => {
    setGender(event.target.value);
  };

  const onRegister = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      gender: gender,
    };
    axios
      .post(url, { data: data })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    console.log("effect");
  }, []);

  return (
    <form onSubmit={onRegister} className="authForm">
      <fieldset>
        <legend>Register</legend>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name={firstName}
            onChange={changeFirstName}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name={lastName} onChange={changeLastName}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name={email} onChange={changeEmail}></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name={password}
            onChange={changePassword}
          ></input>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name={confirmPassword}
            onChange={changeConfirmPassword}
          ></input>
        </div>
        <div>
          <label>Gender</label>
          <input type="text" name={gender} onChange={changeGender}></input>
        </div>
        <input type="submit" value="Register" className="standard"></input>
        <a href="/login">Sign in</a>
      </fieldset>
    </form>
  );
}
