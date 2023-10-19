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
  Menuitem,selectStyle,responsive
} from "./StyledSections";
import { Button, Select, SelectChangeEvent } from "@mui/material";
interface TableType {
  [key: string]: number;
}
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
        variant="h1"
        sx={{ fontSize: { xs: "1.7rem", md: "3rem" } }}
      >
        Be Creative and Check Your Information
      </StyledTypography>
      <QuizSection container justifyContent="center" alignItems="center">
        <SetupForm item xs={12} sx={responsive}>
          <Inputlabel
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
            htmlFor="Category"
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
            marginTop: { xs: "-1rem", md: ".5rem" },
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
              padding: ".5rem",
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
