import React from "react";
import "./App.css"; // Ensure Tailwind is imported
import backgroundImage from "./assets/Background.png";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div
      className="bg-cover h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
    </div>
  );
};

export default App;
