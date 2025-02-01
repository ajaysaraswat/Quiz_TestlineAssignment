import React, { useState, useContext } from "react";
import { quizContext } from "../../context/Quiz";

const Question = () => {
  const { question, score, option, setScore, currQuestion, setCurrQuestion } =
    useContext(quizContext);
  console.log("question====", question[currQuestion].options[0].is_correct);
  const [selected, setSelected] = useState(null);

  // Handle the case where data is not yet loaded
  if (!question || !question[currQuestion]) {
    return <p>Loading question...</p>;
  }

  // const handleSelect = (i) => {
  //   console.log(selected);
  //   console.log(i);
  //   if (selected === i.id && question[currQuestion].options[i].is_correct) {
  //     setScore(score + 4);
  //   } else if (
  //     selected !== i.id ||
  //     !question[currQuestion].options[i].is_correct
  //   ) {
  //     setScore(score - 1);
  //   } else {
  //     setScore(score);
  //   }
  // };
  const handleSelect = (index, isCorrect) => {
    setSelected(index);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  const handleNext = () => {
    setSelected(null);
    if (currQuestion < question.length - 1) {
      setCurrQuestion((prev) => prev + 1);
    } else {
      alert(`Quiz Completed! Your Score: ${score}`);
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
            onClick={() => {
              console.log("i", i.id);
              setSelected(i.id);

              handleSelect(
                index,
                question[currQuestion].options[index].is_correct
              );

              console.log("fun is run");
            }}
            disabled={selected !== null}
            className={`p-2 rounded-md border ${
              selected === i ? "bg-blue-500 text-white" : "bg-gray-200"
            } ${selected && handleSelect} `}
          >
            {i.description}
          </button>
        ))}
        <button onClick={handleNext} disabled={selected === null}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
