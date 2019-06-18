import React, { useState, useEffect } from "react";
import WeatherBanner from "./WeatherBanner";
import WeatherDetails from "./WeatherDetails";

import "./Weather.css";

const Weather = () => {
  return (
    <div className="weather-body">
      <WeatherBanner />
      <WeatherDetails />
    </div>
  );
};

export default Weather;
