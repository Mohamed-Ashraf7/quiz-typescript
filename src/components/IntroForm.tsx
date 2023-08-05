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
  borderRadius: "5px",
  paddingX: "20px",
  fontSize: "1.6rem",
  color: "#000",
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
      <StyledTypography variant="h2">Quiz APP</StyledTypography>
      <QuizSection container>
        <SetupForm item xs={12} lg={4}>
          <Inputlabel htmlFor="amount">Number Of Questions :</Inputlabel>
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
        </SetupForm>
        <SetupForm item xs={12} lg={4}>
          <Inputlabel htmlFor="category">Category : </Inputlabel>
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
        </SetupForm>
        <SetupForm item xs={12} lg={4}>
          <Inputlabel htmlFor="difficulty">Difficulty : </Inputlabel>
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
        <SetupForm item xs={12}>
          <Button
            type="submit"
            sx={{
              width: "50%",
              fontSize: "3rem",
              padding: "15px",
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
