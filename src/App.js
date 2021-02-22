import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This{" "}
          <a href="https://github.com/Lumenw/weather-app" target="_blank">
            project
          </a>{" "}
          was coded by Rosa and is open sourced
          <button type="button" class="btn btn-dark">
            Dark
          </button>
        </footer>
      </div>
    </div>
  );
}
