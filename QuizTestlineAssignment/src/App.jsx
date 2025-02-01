import React, { useContext, useEffect } from "react";
import "./App.css"; // Ensure Tailwind is imported
import axios from "axios";
import Header from "./components/Header/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Quiz from "./components/Pages/Quiz/Quiz";
import Result from "./components/Pages/Result/Result";
import { quizContext } from "./context/Quiz";
const apiUrl = "https://api.jsonserve.com/Uw5CrX";
const App = () => {
  // const {} = useContext(quizContext);

  async function fetchQuestions() {
    try {
      const response = await fetch(apiUrl);

      // Check if the response is OK (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Parse JSON response
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <div
      className="bg-cover min-h-screen flex flex-col"
      style={{ backgroundImage: `url(/assets/Background.png)` }}
    >
      <Header />

      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Home fetchQuestions={fetchQuestions} />}
          ></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
