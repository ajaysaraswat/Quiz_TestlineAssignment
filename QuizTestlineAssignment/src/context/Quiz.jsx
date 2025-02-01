import { createContext, useState } from "react";
import React from "react";
export const quizContext = createContext(null);

export const QuizProvider = (props) => {
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);

  return (
    <quizContext.Provider value={{ question, setQuestion, score, setScore }}>
      {props.children}
    </quizContext.Provider>
  );
};
