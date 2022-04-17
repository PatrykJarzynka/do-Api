import React, { useState, useEffect } from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { registerUser } from "../../store/slices/registerThunk";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { setData } from "../../store/slices/auth";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    const data  = await registerUser({ name, email, password });
    dispatch(setData(data));
    navigate("/contacts");
  };

  return (
    <div className="page">
      <div>Register</div>
      <form onSubmit={handleRegister}>
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
        <FormInput placeholder="Password" id="psw-repeat" type="password" />
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
          <Button type="submit" name="Register" />
        )}
      </form>
    </div>
  );
};

export default Register;
