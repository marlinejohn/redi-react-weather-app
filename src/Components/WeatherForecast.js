import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

const WeatherForecast = (props) => {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  const handleResponse = (response) => {
    setForecast(response.daily);
    setLoaded(true);
    // console.log(response.daily);
  };
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5)
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
          })}
        </div>
      </div>
    );
  } else {
    const SearchForecast = async () => {
      const longitude = props.coordinates.lon;
      const latitude = props.coordinates.lat;
      const apiKey = "fe1483f743b581b5520a1b725af03a49";
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      handleResponse(data);
    };
    SearchForecast();
    return null;
  }
};

export default WeatherForecast;
