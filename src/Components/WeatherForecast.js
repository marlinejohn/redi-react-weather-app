import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max">19º</span>
            <span className="WeatherForecast-min">10º</span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
