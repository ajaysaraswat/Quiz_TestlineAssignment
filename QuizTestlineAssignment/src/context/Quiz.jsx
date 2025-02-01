import { createContext, useState } from "react";
import React from "react";
export const quizContext = createContext(null);

export const QuizProvider = (props) => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState();
  const [currQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState();
  const [answers, setAnswers] = useState([]);

  const updateAnswers = (selectedOption, correctedAnswer) => {
    setAnswers((prev) => [
      ...prev,
      { Selected: selectedOption, Correct: correctedAnswer },
    ]);
  };

  return (
    <quizContext.Provider
      value={{
        name,
        setName,
        currQuestion,
        question,
        setQuestion,
        score,
        setScore,
        setCurrentQuestion,
        answers,
        updateAnswers,
      }}
    >
      {props.children}
    </quizContext.Provider>
  );
};
