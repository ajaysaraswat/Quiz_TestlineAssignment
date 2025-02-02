Documentation of Assignment

*Video Link *: https://drive.google.com/file/d/1zGgYrPztWQ7qYEpaOWwLr2ABAmu7cfRB/view?usp=sharing

Github Link : https://github.com/ajaysaraswat/Quiz_TestlineAssignment

 


---

# Quiz Testline Assignment

## Table of Contents
- [Introduction](#introduction)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Available Scripts](#available-scripts)
- [API](#api)
- [Components](#components)
- [Context](#context)
- [Styling](#styling)
- [Error Handling](#error-handling)

## Introduction
This project is a Quiz application built using React and Vite. It allows users to take quizzes and view their results. The project utilizes modern web development technologies including React Router and Tailwind CSS for styling.

## Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/ajaysaraswat/Quiz_TestlineAssignment.git
    ```
2. Install dependencies:
    ```sh
    cd Quiz_TestlineAssignment
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

## Project Structure
```
QuizTestlineAssignment/
├── .gitignore
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── public/
│   └── assets/
│       └── Background.png
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── api.js
│   ├── components/
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Header/
│   │   │   └── Header.jsx
│   │   ├── Pages/
│   │   │   ├── Home/
│   │   │   │   └── Home.jsx
│   │   │   ├── Quiz/
│   │   │   │   └── Quiz.jsx
│   │   │   └── Result/
│   │   │       └── Result.jsx
│   ├── context/
│   │   └── Quiz.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

## Dependencies
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **React Router DOM**: Declarative routing for React.
- **Tailwind CSS**: A utility-first CSS framework.

## Available Scripts
- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run lint`**: Runs ESLint to check for linting issues.
- **`npm run preview`**: Previews the production build.

## API
### Fetch Questions
- **Endpoint**: `https://api.jsonserve.com/Uw5CrX`
- **Method**: GET
- **Response**:
    ```json
    {
        "questions": [
            {
                "id": 1,
                "question": "What is the capital of France?",
                "options": ["Paris", "London", "Rome", "Berlin"],
                "answer": "Paris"
            },
            ...
        ]
    }
    ```

## Components
### App.jsx
```javascript
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
  const { question, setQuestion, score, setScore } = useContext(quizContext);

  async function fetchQuestions() {
    try {
      const response = await fetch(apiUrl);

      // Check if the response is OK (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Parse JSON response
      console.log("Fetched Data:", data);
      setQuestion(data.questions || []);
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
```

### Header.jsx
```javascript
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center font-bold">
      <h1 className="text-4xl text-gray-800">QUIZ FLOW APP</h1>
    </div>
  );
};

export default Header;
```

### Footer.jsx
```javascript
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        Made with ❤️ by{" "}
        <span className="font-semibold text-blue-400">Ajay</span>
      </p>
    </div>
  );
};

export default Footer;
```

## Context
### Quiz.jsx
```javascript
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
```

## Styling
### App.css
```css
@import "tailwindcss";
```

## Error Handling
All API responses will include an appropriate status code and a JSON object detailing the error message in case of failure.

```json
{
    "error": "Error message"
}
```

---

Feel free to copy and paste this content into your README file.
