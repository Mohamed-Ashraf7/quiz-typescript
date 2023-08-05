import React, { useState } from "react";
import ModalApp from "./components/ModalApp";
import IntroForm from "./components/IntroForm";
import Loading from "./components/Loading";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "./store/store";
import { setIndex, setCorrect } from "./store/QuizSlicer";
import { Container, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  NextQuestionButton,
  CorrectAnswersParagraph,
  AnswerButton,
  AppSection,
} from "./components/StyledSections";
const HTMLContent = ({ content }: { content: string }) => (
  <div
    dangerouslySetInnerHTML={{ __html: content }}
    style={{ fontSize: "2.4rem", textAlign: "center", margin: "3% 0" }}
  />
);
function App() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const { waiting, loading, questions, index, correct } = useSelector(
    (state: RootState) => state.quiz
  );
  const dispatch = useDispatch();
  if (waiting) {
    return <IntroForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const handleIndex = () => {
    if (index === questions.length - 1) {
      return dispatch(setIndex(0));
    } else {
      return dispatch(setIndex(index + 1));
    }
  };

  const { incorrect_answers, question, correct_answer } = questions[index];
  const answers = [...incorrect_answers];

  const checkCorrectAnswer = (value: string) => {
    if (value === correct_answer) {
      dispatch(handleIndex());
      return dispatch(setCorrect(correct + 1));
    }
    setSelectedAnswer(value);
    setTimeout(handleIndex, 300);
  };

  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <div>
      {index === questions.length - 1 ? (
        <ModalApp />
      ) : (
        <AppSection>
          <CorrectAnswersParagraph>
            correct answers : {correct}/{index}
          </CorrectAnswersParagraph>
          <Container>
            <HTMLContent content={question} />
            <Box className="btn-container">
              {answers.map((answer, index) => {
                return (
                  <AnswerButton
                    key={index}
                    style={{
                      background:
                        selectedAnswer === answer
                          ? answer === correct_answer
                            ? "#0e7490"
                            : "#dc2626"
                          : "#0e7490",
                    }}
                    onClick={() => checkCorrectAnswer(answer)}
                  >
                    {answer}
                  </AnswerButton>
                );
              })}
            </Box>
          </Container>
          <NextQuestionButton onClick={() => handleIndex()}>
            next question
          </NextQuestionButton>
        </AppSection>
      )}
    </div>
  );
}

export default App;
