import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { closeModal, setCorrect, setIndex } from "../store/QuizSlicer";
import { Button } from "@mui/material";
import { ModalContainer, ModalContent } from "./StyledSections";
const ModalApp = () => {
  const dispatch = useDispatch();
  const { correct, questions } = useSelector((state: RootState) => state.quiz);
  const handlePlayAgain = () => {
    dispatch(closeModal());
    dispatch(setIndex(0));
    dispatch(setCorrect(0));
  };

  return (
    <ModalContainer>
      <ModalContent sx={{ padding: { xs: "1rem", md: "3.2rem" } }}>
        <h2>Congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <Button
          sx={{ fontSize: { xs: "1.9rem", md: "2.6rem" } }}
          onClick={handlePlayAgain}
          variant="contained"
        >
          play again
        </Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalApp;
