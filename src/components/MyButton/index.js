import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ onSubmit, name, type, onClick }) => (
  <Button
    variant="contained"
    className="btn"
    onClick={onClick}
    type={type}
    onSubmit={onSubmit}
  >
    {name}
  </Button>
);

export default MyButton;
