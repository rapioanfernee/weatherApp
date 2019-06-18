import React from "react";
import "./Weather.css";

const WeatherBanner = () => {
  return (
    <div className="weather-banner">
      <span className="weather-banner-title">Weather Finder</span>
      <span className="weather-banner-subtitle">
        Checkout the weather conditions in your area just by searching
      </span>
    </div>
  );
};

export default WeatherBanner;
