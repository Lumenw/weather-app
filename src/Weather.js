import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="enter a city.."
          className="form-control"
        />
        <input type="submit" value="Search" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>wednesday 07.00</li>
        <li>cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="blabl"
          ></img>
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Prejdlfjsdl 15 %</li>

            <li>humifity</li>
            <li>wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
