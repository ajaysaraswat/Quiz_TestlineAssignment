import { createContext, useState } from "react";
import React from "react";
export const quizContext = createContext(null);

export const QuizProvider = (props) => {
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState();
  const [currQuestion, setCurrentQuestion] = useState(0);

  return (
    <quizContext.Provider
      value={{
        currQuestion,
        question,
        setQuestion,
        score,
        setScore,
        setCurrentQuestion,
      }}
    >
      {props.children}
    </quizContext.Provider>
  );
};
