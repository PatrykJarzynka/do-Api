import React, { useState, useEffect } from "react";
import FormInput from "../../components/FormInput";
import MyButton from "../../components/MyButton";
import { login } from "../../store/slices/authThunk";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Notiflix from "notiflix";
import { setData } from "../../store/slices/auth";

const FancyForm = styled.form({
  display: "flex",
  alignItems: "center",
  columnGap: "10px",
});

const FancyDiv = styled.div({
  marginLeft: "10px",
});

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      return navigate("/contacts");
    }
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      dispatch(setData(data));
    } catch (error) {
      if (error) Notiflix.Notify.warning("Incorrect email or password");
    }
  };

  return (
    <FancyDiv className="page">
      <div>
        <h2>Login</h2>
      </div>

      <FancyForm onSubmit={handleLogin}>
        <FormInput
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          value={email}
        />
        <FormInput
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />

        {loading ? (
          <div className="loading">
            <span>Loading...</span>
          </div>
        ) : (
          <MyButton type="submit" name="Login" />
        )}
      </FancyForm>
    </FancyDiv>
  );
};

export default Login;
