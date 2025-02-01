import React, { useContext, useEffect } from "react";
import { quizContext } from "../../../context/Quiz";
import Question from "../../Question/Question";

const Quiz = () => {
  const { question, setQuestion, score, setScore, currQuestion } =
    useContext(quizContext);

  useEffect(() => {
    if (question && question.length > 0) {
      console.log("data", question[0].topic);
    }
  }, [question]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Welcome Box */}
      <div className="bg-white shadow-md rounded-xl p-6 w-80 text-center">
        <span className="text-2xl font-bold text-gray-800">
          Welcome to the Quiz
        </span>
      </div>

      {/* Questions Section */}
      <div className="mt-4">
        {question && question.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold">
              Topic : {question[0].topic}
            </h2>
            <h1>score : {score}</h1>
            <Question />
          </div>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
