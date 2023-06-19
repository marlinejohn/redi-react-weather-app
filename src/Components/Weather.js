import "./Weather.css";
import { useState } from "react";
import FormattedDate from "./FormattedDate";

const Weather = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  const HandleResponse = (response) => {
    setWeatherData({
      loaded: true,
      coordinates: response.coord,
      city: response.name,
      date: new Date(response.dt * 1000),
      // date: "Monday 04:00",
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      temperature: response.main.temp,
      humidity: response.main.humidity,
      wind: response.wind.speed,
    });
  };

  const Search = async () => {
    const apiKey = "cfb3f6765a2b06f74565fba33b52e464";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    HandleResponse(data);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    Search();
  };
  const HandleCityChange = (event) => {
    setCity(event.target.value);
    console.log("Jessie ki city: ", city);
  };

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={HandleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city..."
                className="form-control"
                autoFocus="on"
                onChange={HandleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">ºC</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading..";
    // return (
    //   <div>
    //     <form onSubmit={HandleSubmit}>
    //       <div className="row">
    //         <div className="col-9">
    //           <input
    //             type="search"
    //             placeholder="Enter city..."
    //             className="form-control"
    //             autoFocus="on"
    //             onChange={HandleCityChange}
    //           />
    //         </div>
    //         <div className="col-3">
    //           <input
    //             type="submit"
    //             value="Search"
    //             className="btn btn-primary w-100"
    //           />
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // );
  }
};

export default Weather;
