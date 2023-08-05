import styled from "@mui/material/styles/styled";
import one from "../img/one.jpg";

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
  width: 100%;
`;
export const SetupForm = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "4.3rem",
  padding: "3rem 0 ",
  overflow: "hidden",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.4) 0% ,rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 100%)",
  backdropFilter: "blur(3px)",
  WebkitBackdropFilter: "blur(3px)",
});
export const StyledTypography = styled(Typography)({
  textAlign: "center",
  backgroundColor: "#1e4e63",
  color: "white",
  padding: ".5% 0",
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
});
export const Inputlabel = styled(InputLabel)({
  fontSize: "2.3rem",
  padding: "10px",
  color: "#222",
  fontWeight: 500,
});
export const Textfield = styled(TextField)({
  borderBottom: "7px solid #0e7490",
  borderRadius: "9px",
  padding: "5px",
});
export const Menuitem = styled(MenuItem)({
  fontSize: "1.3rem",
});
// ********** Modal component ************

export const ModalContainer = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${one})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: "9999",
});

export const ModalContent = styled("div")({
  background: "rgba(255, 255, 255, .5)",
  backdropFilter: "blur(2px)",
  WebkitBackdropFilter: "blur(2px)",
  width: "90vw",
  height: "52%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "720px",
  padding: "3.2rem",
  fontSize: "2.4rem",
  borderRadius: "0.25rem",
  position: "relative",
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
  overflow: "hidden",
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
  margin: "1% 74%",
  textAlign: "center",
  padding: ".35rem",
  textTransform: "capitalize",
  letterSpacing: "0.1rem",
  color: "#fff",
  backgroundColor: "rgba(0,0,0,.6)",
  backdropFilter: "blur(4px)",
  width: "24%",
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
