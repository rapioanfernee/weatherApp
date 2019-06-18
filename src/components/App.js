import React, { useState } from "react";
import Weather from "./Weather";
import { WeatherThemeContext } from "../contexts/weatherThemeContext";

const App = () => {
  const [theme, setTheme] = useState("default");
  return (
    <WeatherThemeContext.Provider value={{ theme, setTheme }}>
      <div style={styles.default}>
        <Weather />
      </div>
    </WeatherThemeContext.Provider>
  );
};

const styles = {
  default: {
    height: "100vh",
    backgroundImage:
      "linear-gradient(to right,rgb(128,128,255), rgb(128,0,255)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: "white",
    fontFamily: "'Karla', sans-serif"
  }
};

export default App;
