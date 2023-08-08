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
  paddingX: "40px",
  fontSize: { xs: "1.3rem", md: "1.9rem" },
  color: "#000",
};
const responsive = {
  background: {
    xs: "#fdfdfd",
    md: "linear-gradient(180deg, rgba(255,255,255,0.4) 0% ,rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 100%)",
  },
  flexFlow: { xs: "column", md: "row" },
  marginTop: { xs: ".7rem", md: "4.3rem" },
  padding: { xs: "1rem 0", md: "3rem 0" },
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
      <StyledTypography variant="h2">Quiz APP</StyledTypography>
      <QuizSection container justifyContent="center" alignItems="center">
        <SetupForm item xs={12} sx={responsive}>
          <Inputlabel
            sx={{
              fontSize: { xs: "1.9rem", md: "2.1rem" },
            }}
            htmlFor="amount"
          >
            Number Of Questions :
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
              fontSize: { xs: "1.9rem", md: "2.3rem" },
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
              fontSize: { xs: "1.9rem", md: "2.3rem" },
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
            background: {
              xs: "#fdfdfd",
              md: "linear-gradient(180deg, rgba(255,255,255,0.4) 0% ,rgba(255,255,255,0.4) 35%, rgba(255,255,255,0.4) 100%)",
            },
            marginTop: { xs: "-1.8rem", md: "4.3rem" },
            padding: { xs: "1rem 0", md: "3rem 0" },
          }}
        >
          <Button
            type="submit"
            sx={{
              width: "50%",
              fontSize: { xs: "2rem", md: "3rem" },
              padding: { xs: ".5rem", md: "1rem" },
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
