import React from "react";
import "./App.css";
import Search from "./Search";



import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="search-app">
        <Search />
      </div>
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
