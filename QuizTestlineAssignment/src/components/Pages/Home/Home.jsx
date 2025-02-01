import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizContext } from "../../../context/Quiz";
const Home = ({ fetchQuestions }) => {
  const { name, setName } = useContext(quizContext);

  const [category, setCategory] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    if (!name || !category) {
      setError(true);
      return;
    } else {
      console.log("data", name);
      setError(false);
      fetchQuestions();
      navigate("/quiz");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <div
        className="w-64 h-64 bg-center bg-cover bg-no-repeat rounded-md "
        style={{ backgroundImage: "url(/assets/HomeImg.svg)" }}
      ></div>

      <span className="text-3xl text-black bg-opacity-70 p-4 rounded-md mt-4  ">
        Candidate Info
      </span>

      <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-sm">
        <div className="w-full">
          <label className="block text-slate-700 text-2xl font-bold mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="font-bold w-full p-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="w-full">
          <label className="block text-slate-700 text-xl font-bold mb-1">
            Quiz Category
          </label>
          <input
            type="text"
            placeholder="Enter the Quiz Category"
            required
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full p-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleOnSubmit}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
