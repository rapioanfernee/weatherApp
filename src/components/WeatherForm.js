import React, { useState } from "react";

const formSubmit = async (e, props) => {
  e.preventDefault();
  const {
    target: {
      city: { value: cityValue }
    },
    target: {
      country: { value: countryValue }
    }
  } = e;

  props.onSubmit({ cityValue, countryValue });
};

const WeatherForm = props => {
  const [cityValue, setCityValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <form
      className={props.className}
      onSubmit={e => {
        formSubmit(e, props);
      }}
    >
      <label>City</label>
      <input
        autoComplete="off"
        className="weather-details-form-input"
        name="city"
        value={cityValue}
        onChange={e => {
          setCityValue(e.target.value);
        }}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      <label>Country</label>
      <input
        autoComplete="off"
        className="weather-details-form-input"
        name="country"
        value={countryValue}
        onChange={e => setCountryValue(e.target.value)}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      <button
        className="weather-details-form-button"
        type="submit"
        onMouseDown={() => setButtonClicked(true)}
        onMouseUp={() => setButtonClicked(false)}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      >
        Check Weather
      </button>
    </form>
  );
};

export default WeatherForm;
