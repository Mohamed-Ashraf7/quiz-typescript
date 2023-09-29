import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchQuestions, setQuiz } from "../store/QuizSlicer";
import {
  QuizSection,
  SetupForm,
  StyledTypography,
  Inputlabel,
  Textfield,
  Menuitem,
} from "./StyledSections";
import { Button, Select, SelectChangeEvent } from "@mui/material";

interface TableType {
  [key: string]: number;
}
const selectStyle = {
  borderBottom: "7px solid #0e7490",
  borderRadius: "15%",
  paddingX: "20px",
  fontSize: { xs: "1.3rem", md: "1.6rem" },
  color: "#000",
};
const responsive = {
  background: "rgba(255,255,255,.8)",
  borderRadius: ".4rem",
  borderBottom: ".7rem solid #222",
  backdropFilter: "blur(1px)",
  WebkitBackdropFilter: "blur(1px)",
  boxShadow: "10px 15px 4px #000",
  flexFlow: { xs: "column", md: "row" },
  marginTop: { xs: "-.3rem", md: "5.8rem" },
  padding: { xs: "1rem 0", md: "6rem 0" },
  gap: { xs: ".5rem", md: "2rem" },
};
const table: TableType = {
  general: 9,
  sports: 21,
  history: 23,
  politics: 24,
  computers: 18,
  geography: 22,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const IntroForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { quiz, error } = useSelector((state: RootState) => state.quiz);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
    dispatch(fetchQuestions(url));
  };

  const handleChangeString = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    const { name, value } = event.target;
    dispatch(
      setQuiz({ ...quiz, [name as string | number]: value as string | number })
    );
  };
  const handleChangeNumber = (
    e: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    const { name, value } = e.target;
    dispatch(setQuiz({ ...quiz, [name]: value }));
  };
  return (
    <>
      <StyledTypography
        variant="h2"
        sx={{ fontSize: { xs: "1.9rem", md: "3.7rem" } }}
      >
        Be Creative and Check Your Information
      </StyledTypography>
      <QuizSection container justifyContent="center" alignItems="center">
        <SetupForm item xs={12} sx={responsive}>
          <Inputlabel
            sx={{
              fontSize: { xs: "1.9rem", md: "2rem" },
            }}
            htmlFor="amount"
          >
            Num of Questions :
          </Inputlabel>
          <Textfield
            type="number"
            name="amount"
            id="amount"
            value={quiz.amount}
            onChange={handleChangeNumber}
            inputProps={{
              min: 1,
              max: 50,
            }}
          />

          <Inputlabel
            sx={{
              fontSize: { xs: "1.9rem", md: "2rem" },
            }}
            htmlFor="category"
          >
            Category :{" "}
          </Inputlabel>
          <Select
            sx={selectStyle}
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChangeString}
          >
            <Menuitem value="general">general</Menuitem>
            <Menuitem value="sports">Sports</Menuitem>
            <Menuitem value="history">History</Menuitem>
            <Menuitem value="politics">Politics</Menuitem>
            <Menuitem value="computers">Computers</Menuitem>
            <Menuitem value="geography">Geography</Menuitem>
          </Select>

          <Inputlabel
            sx={{
              fontSize: { xs: "1.9rem", md: "2rem" },
            }}
            htmlFor="difficulty"
          >
            Difficulty :{" "}
          </Inputlabel>
          <Select
            sx={selectStyle}
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChangeString}
          >
            <Menuitem value="easy">Easy</Menuitem>
            <Menuitem value="medium">Medium</Menuitem>
            <Menuitem value="hard">Hard</Menuitem>
          </Select>
        </SetupForm>
        {error && <p>Can't generate questions, please try different options</p>}
        <SetupForm
          item
          xs={12}
          sx={{
            marginTop: { xs: "-1rem", md: "0rem" },
            padding: { xs: "1rem 0", md: "1.6rem 0" },
          }}
        >
          <Button
            type="submit"
            sx={{
              width: {
                xs: "70%",
                md: "40%",
              },
              borderRadius: ".4rem",
              boxShadow: "8px 8px 4px #222",
              fontSize: { xs: "2rem", md: "2.5rem" },
              padding: { xs: ".5rem", md: ".5rem" },
            }}
            onClick={handleSubmit}
            variant="contained"
          >
            Start
          </Button>
        </SetupForm>
      </QuizSection>
    </>
  );
};

export default IntroForm;
