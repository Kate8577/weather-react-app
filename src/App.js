import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
     
      <div className="weather-app">
         
      <Weather defaultCity="San Diego" />
      </div>
      <div className="footer">
      <Footer />
      </div>
      </div>
  );
}

export default App;
