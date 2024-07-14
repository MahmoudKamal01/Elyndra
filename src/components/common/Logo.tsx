import React from "react";
import { styled } from "@mui/system";

const StyledH1 = styled("h1")({
  fontSize: "3rem",
  color: "#3f51b5", // Primary color from MUI theme
  fontWeight: "bold",
  textAlign: "center",
  margin: "20px 0",
});

const Logo = () => {
  return <StyledH1>Elyndra</StyledH1>;
};

export default Logo;
