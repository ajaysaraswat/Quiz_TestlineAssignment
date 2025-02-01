import React from "react";
import "./App.css"; // Ensure Tailwind is imported

const App = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/assets/Background.png')" }}
    ></div>
  );
};

export default App;
