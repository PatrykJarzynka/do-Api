import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const FancyDiv = styled.div({
  display: "flex",
  justifyContent: "center",
  columnGap: "10px",
});

const Home = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="page">
      <FancyDiv>
        <h2>
          <b>HOME</b>
        </h2>
      </FancyDiv>
      <FancyDiv>
        <Button
          variant="contained"
          size="small"
          type="button"
          onClick={navigateToLogin}
        >
          Login
        </Button>
        <Button
          variant="contained"
          size="small"
          type="button"
          onClick={navigateToRegister}
        >
          Register
        </Button>
      </FancyDiv>
    </div>
  );
};

export default Home;
