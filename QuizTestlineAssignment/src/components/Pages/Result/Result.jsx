import React, { useContext } from "react";
import { quizContext } from "../../../context/Quiz";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { candidateName, score, answers, question } = useContext(quizContext);
  const navigate = useNavigate();
  console.log("answer", answers);

  // Check if question is defined and has length
  if (!question || question.length === 0) {
    return <p>Loading questions...</p>;
  }

  const correctAnswers = answers.filter(
    (answer) => answer.Correct === true
  ).length;
  const wrongAnswers = answers.length - correctAnswers;

  const handleRestart = () => {
    navigate("/"); // Navigate back to the home page to start again
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="p-8 bg-white shadow-md rounded-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Quiz Results</h1>
        <h2 className="text-xl mb-4 text-center">Candidate: {candidateName}</h2>
        <h2 className="text-xl mb-6 text-center bold">Score: {score}</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Breakdown:</h3>
          <p className="text-green-500">Correct Answers: {correctAnswers}</p>
          <p className="text-red-500">Wrong Answers: {wrongAnswers}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Questions:</h3>
          {question.length > 0 &&
            question.map((q, index) => {
              const answer = answers[index];
              const isCorrect = answer.selected === q.correctAnswer;
              return (
                <div key={index} className="mb-4 pb-4 border-b border-gray-300">
                  <h4 className="font-medium">
                    Q{index + 1}: {q.description}
                  </h4>
                  <p
                    className={`${
                      answer.Correct ? "text-green-500" : "text-red-500"
                    } mb-2`}
                  >
                    Your Answer:{" "}
                    {answer.Selected !== undefined
                      ? answer.Selected
                      : "No answer selected"}
                  </p>
                  <p
                    className={
                      answer.Correct ? "text-green-500" : "text-red-500"
                    }
                  >
                    Status: {answer.Correct ? "Correct" : "Incorrect"}
                  </p>
                  <p className="text-gray-500 mt-2">
                    Solution: {q.detailed_solution}
                  </p>
                </div>
              );
            })}
        </div>

        <div className="text-center">
          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
