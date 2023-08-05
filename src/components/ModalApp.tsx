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
    <div>
      <ModalContainer>
        <ModalContent>
          <h2>Congrats!</h2>
          <p>
            You answered {((correct / questions.length) * 100).toFixed(0)}% of
            questions correctly
          </p>
          <Button
            sx={{ fontSize: "2.5rem" }}
            onClick={handlePlayAgain}
            variant="contained"
          >
            play again
          </Button>
        </ModalContent>
      </ModalContainer>
    </div>
  );
};

export default ModalApp;
