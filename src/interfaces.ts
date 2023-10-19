
export interface QuizItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: any[];
}

export interface QuizState {
  waiting: boolean;
  loading: boolean;
  questions: QuizItem[];
  index: number;
  correct: number;
  error: boolean;
  quiz: {
    amount: number;
    category:
      | "general"
      | "sports"
      | "history"
      | "politics"
      | "computers"
      | "geography";
    difficulty: "easy" | "medium" | "difficult";
  };
}
