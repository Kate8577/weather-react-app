import React from "react";
import './App.css';
import Search from "./Search";
import City from "./City";
import Date from "./Date";
import Icon from "./Icon";
import Weather from "./Weather";
import Description from "./Description";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="search-app">
        <Search />
      </div>
       <div className="weather-app">
      <City />
      <Date />
      <Icon />
      <Weather/>
      <Description/>
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
