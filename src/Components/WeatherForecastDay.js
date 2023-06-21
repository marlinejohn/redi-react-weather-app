import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherForecastDay = (props) => {
  const MaxTemprature = () => {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  };
  const MinTemprature = () => {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  };

  const Day = () => {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  };

  return (
    <div>
      <div className="WeatherForecast-day">{Day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">{MaxTemprature()}</span>
        <span className="WeatherForecast-min">{MinTemprature()}</span>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
