import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import MyButton from "../../components/MyButton";
import { registerUser } from "../../store/slices/registerThunk";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setData } from "../../store/slices/auth";
import styled from "@emotion/styled";
import Notiflix from "notiflix";

const FancyHeader = styled.h1({
  marginLeft: 10,
});

const FancyForm = styled.form({
  display: "flex",
  alignItems: "center",
  columnGap: 10,
  marginLeft: 10,
});

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      Notiflix.Notify.warning("Passwords don't match");
      return;
    }
    const data = await registerUser({ name, email, password });
    dispatch(setData(data));
    navigate("/contacts");
  };

  return (
    <div className="page">
      <FancyHeader>Register</FancyHeader>
      <FancyForm onSubmit={handleRegister}>
        <label htmlFor="lgn">
          <b>Login</b>
        </label>
        <FormInput
          onChange={(e) => setName(e.target.value)}
          placeholder="Login"
          id="lgn"
          type="text"
          value={name}
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <FormInput
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="psw"
          type="password"
          value={password}
        />
        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <FormInput
          placeholder="Password"
          id="psw-repeat"
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
        />
        <label htmlFor="e-mail">
          <b>Email</b>
        </label>
        <FormInput
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          id="e-mail"
          type="email"
          value={email}
        />
        {loading ? (
          <div className="loading">
            <span>Loading...</span>
          </div>
        ) : (
          <MyButton type="submit" name="Register" />
        )}
      </FancyForm>
    </div>
  );
};

export default Register;
