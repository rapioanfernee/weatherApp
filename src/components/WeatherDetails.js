import React, { useState, useEffect, useContext } from "react";
import weatherAPI from "../apis/weatherAPI";
import WeatherForm from "./WeatherForm";
import { WeatherThemeContext } from "../contexts/weatherThemeContext";

const API_KEY = "047b98414bef95307b949e2caa4891d1";

const WeatherDetails = props => {
  const { theme, setTheme } = useContext(WeatherThemeContext);
  const [city, setCity] = useState(null);

  const onSubmit = async formValues => {
    const response = await weatherAPI.get(
      `/weather/?q=${formValues.cityValue},${
        formValues.countryValue
      }&appid=${API_KEY}`
    );
    setCity(response.data);
  };

  const renderDetails = () => {
    if (city !== null) {
      setTheme(city.weather[0].main);

      return (
        <div className="weather-details-details">
          <span>City: {city.name}</span>
          <span>Country: {city.sys.country}</span>
          <span>Weather Condition: {city.weather[0].description}</span>
          <span>
            Ave. Temp.: {(parseFloat(city.main.temp) - 273.15).toFixed(2)}{" "}
            Celsius
          </span>
          <span>
            Max Temp.: {(parseFloat(city.main.temp_max) - 273.15).toFixed(2)}
            Celsius
          </span>
          <span>
            Min Temp.: {(parseFloat(city.main.temp_min) - 273.15).toFixed(2)}
            Celsius
          </span>
          <span>Pressure: {city.main.pressure} hpa</span>
          <span>Humidity: {city.main.humidity}%</span>
        </div>
      );
    }
  };

  return (
    <div className="weather-details">
      <WeatherForm className="weather-details-form" onSubmit={onSubmit} />
      {renderDetails()}
    </div>
  );
};
export default WeatherDetails;
