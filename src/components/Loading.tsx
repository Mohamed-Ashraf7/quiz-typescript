import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledLoader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));
const StyledLoaderSpan = styled("span")(({ theme }) => ({
  height: theme.spacing(9),
  width: theme.spacing(9),
  marginRight: "10px",
  background: "linear-gradient(to right, #22d3ee,  #0284c7,#1d4ed8)",
  borderRadius: "50%",
  boxShadow: "20px 20px 18px #666666, -20px -20px 18px #ffffff",
}));

const Loader = () => {
  return (
    <StyledLoader>
      <StyledLoaderSpan />
      <StyledLoaderSpan />
      <StyledLoaderSpan />
    </StyledLoader>
  );
};

export default Loader;
