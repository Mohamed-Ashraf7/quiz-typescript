import styled from "@mui/material/styles/styled";

import {
  Grid,
  Typography,
  InputLabel,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
// ********** intro form  ************

export const QuizSection = styled(Grid)`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 772px) {
    width: 98%;
    height: calc(100vh - 76.16px);
    padding: 10px;
  }
`;
export const SetupForm = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 0,
  overflowX: "hidden",
  backdropFilter: "blur(3px)",
  WebkitBackdropFilter: "blur(3px)",
});
export const StyledTypography = styled(Typography)({
  textAlign: "center",
  width: "98%",
  margin: "0 auto",
  background: "rgba(255,255,255,.9)",
  backdropFilter: "blur(2px)",
  WebkitBackdropFilter: "blur(2px)",
  color: "#333",
  padding: "2% 0",
  borderBottomRightRadius: "12rem",
  borderBottomLeftRadius: "12rem",
  borderBottom: ".7rem solid #444",
  boxShadow:
    "0px 7px 4px -2px rgba(0,0,0,0.6), 0px 4px 4px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
});
export const Inputlabel = styled(InputLabel)({
  color: "#111",
  fontWeight: 500,
});
export const Textfield = styled(TextField)({
  borderBottom: "7px solid #0e7490",
  borderRadius: "15%",
  padding: "5px 10px",
});
export const Menuitem = styled(MenuItem)({
  fontSize: "1.3rem",
});
// ********** Modal component ************

export const ModalContainer = styled("div")({
  overflowX: "hidden",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "9999",
});

export const ModalContent = styled("div")({
  background: "rgba(255, 255, 255, .9)",
  backdropFilter: "blur(2px)",
  WebkitBackdropFilter: "blur(2px)",
  width: "70%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  fontSize: "2.4rem",
  borderRadius: "0.25rem",
  boxShadow: "4px 4px 5px #444",
});

// ***************** App Component

export const AppSection = styled("section")({
  width: "90%",
  height: "100vh",
  margin: "4% auto",
  borderRadius: "0.25rem",
  padding: "1rem",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  overflowX: "hidden",
  background:
    "linear-gradient(180deg, rgba(250,250,250,0.4) 0% ,rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.4) 100%)",
  backdropFilter: "blur(2px)",
  WebkitBackdropFilter: "blur(2px)",
});
export const AnswerButton = styled(Button)({
  display: "block",
  width: "100%",
  margin: "0.85rem auto",
  borderRadius: "0.35rem",
  color: "#fff",
  letterSpacing: "0.2rem",
  wordSpacing: "0.4rem",
  fontSize: "1.2rem",
  cursor: "pointer",
  padding: "0.6rem 0",
  transition: "all 0.3s linear",

  "&:hover": {
    backgroundColor: "#0e7490",
    color: "#222",
  },
});

export const CorrectAnswersParagraph = styled("p")({
  fontSize: "1.3rem",
  alignSelf: "start",
  textAlign: "center",
  padding: ".45rem",
  textTransform: "capitalize",
  letterSpacing: "0.1rem",
  color: "#fff",
  backgroundColor: "rgba(0,0,0,.6)",
  backdropFilter: "blur(4px)",
});

export const NextQuestionButton = styled(Button)({
  borderRadius: "0.25rem",
  padding: "0.35rem 0.9rem",
  display: "block",
  margin: "2rem 1rem 1rem auto",
  textTransform: "capitalize",
  fontWeight: 700,
  letterSpacing: "0.1rem",
  fontSize: "1rem",
  background: "#b91c1c",
  color: "#fff",
  transition: "all 0.3s linear",
  cursor: "pointer",
  "&:hover": {
    background: "#7f1d1d",
    color: "#ddd",
  },
  width: "fit-content",
});
