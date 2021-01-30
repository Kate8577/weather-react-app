import React from "react";
import "./App.css";

import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
     
      <div className="weather-app">
         
      <Weather defaultCity="San Diego" />
      </div>
      <div className="forecast-app">
          <Forecast/>
     </div>
    <br />
      <Footer />
      </div>
  );
}

export default App;
