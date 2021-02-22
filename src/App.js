import React from "react";
import "./Weather.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This{" "}
          <a href="https://github.com/Lumenw/weather-app" target="_blank">
            project
          </a>{" "}
          was coded by Rosa and is open sourced
        </footer>
      </div>
    </div>
  );
}
