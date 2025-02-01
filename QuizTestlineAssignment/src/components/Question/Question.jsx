import React, { useState, useContext, useEffect } from "react";
import { quizContext } from "../../context/Quiz";
import { Link, useNavigate } from "react-router-dom";

const Question = () => {
  const {
    question,
    score,
    setScore,
    currQuestion,
    setCurrentQuestion,
    updateAnswers,
  } = useContext(quizContext);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // Handle the case where data is not yet loaded
  if (!question || !question[currQuestion]) {
    return <p>Loading question...</p>;
  }
  useEffect(() => {
    console.log("curr", currQuestion);
  }, []);

  const handleSelect = (index, isCorrect) => {
    setSelected(index);
    updateAnswers(index, isCorrect);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 4);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    if (currQuestion < question.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      alert(`Quiz Completed! Your Score: ${score}`);
      navigate("/result");
    }
  };
  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit the quiz?")) {
      // Add any cleanup logic here (reset score, stop timer, etc.)
      navigate("/"); // Navigate to home page (or any page you want)
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-2">Question {currQuestion + 1}</h1>
      <h2 className="text-lg mb-4">{question[currQuestion].description}</h2>

      <div className="flex flex-col gap-2">
        {question[currQuestion].options.map((i, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index, i.is_correct)}
            disabled={selected !== null}
            className={`p-2 rounded-md border 
              ${selected === index ? "bg-green-200 " : ""}
              ${selected === null ? "bg-gray-200" : ""}
            `}
          >
            {i.description}
          </button>
        ))}
        <div className="flex gap-4 mt-6 justify-center">
          <button
            onClick={handleNext}
            disabled={selected === null}
            className={`px-8 py-3 rounded-lg text-white font-semibold 
      ${
        selected === null
          ? "bg-blue-500 cursor-not-allowed opacity-50"
          : "bg-blue-600 hover:bg-blue-700 focus:outline-none"
      } 
      transition duration-300 ease-in-out`}
          >
            Next
          </button>

          <button
            onClick={handleQuit} // Implement quit logic
            className=" px-8 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 focus:outline-none transition duration-300 ease-in-out"
          >
            Quit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
