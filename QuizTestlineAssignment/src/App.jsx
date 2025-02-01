import React from "react";
import "./App.css"; // Ensure Tailwind is imported

import Header from "./components/Header/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Quiz from "./components/Pages/Quiz/Quiz";
import Result from "./components/Pages/Result/Result";

const App = () => {
  return (
    <div
      className="bg-cover min-h-screen flex flex-col"
      style={{ backgroundImage: `url(/assets/Background.png)` }}
    >
      <Header />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
