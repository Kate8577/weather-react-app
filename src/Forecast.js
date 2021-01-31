import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon.js"

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data);
      setLoaded(true);
  }
  
  if (loaded && props.city === forecast.city.name) {
    
    return (
      <div className="Forecast" >
        <div className="row" >
          <div className="col-3" >
            <h2>{new Date(forecast.list[0].dt * 1000).getHours()}:00</h2>
            <WeatherIcon code={forecast.list[0].weather[0].icon}/>
            <div className="future-temperature" >
              <strong>{Math.round(forecast.list[0].main.temp_max)}°F  | {Math.round(forecast.list[0].main.temp_min)}°F</strong>
            </div>
          </div>
          <div className="col-3">
             <h2>{new Date(forecast.list[1].dt * 1000).getHours()}:00</h2>
            <WeatherIcon code={forecast.list[1].weather[0].icon}/>
            <div className="future-temperature">
              <strong>{Math.round(forecast.list[1].main.temp_max)}°F | {Math.round(forecast.list[1].main.temp_min)}°F </strong>
            </div>
          </div>
          <div className="col-3">
             <h2>{new Date(forecast.list[2].dt * 1000).getHours()}:00</h2>
             <WeatherIcon code={forecast.list[2].weather[0].icon}/>
            <div className="future-temperature" >
              <strong>{Math.round(forecast.list[2].main.temp)}°F | {Math.round(forecast.list[2].main.temp_min)}°F </strong>
            </div>
          </div>
          <div className="col-3">
           <h2>{new Date(forecast.list[3].dt * 1000).getHours()}:00</h2>
             <WeatherIcon code={forecast.list[3].weather[0].icon}/>
            <div className="future-temperature" >
              <strong>{Math.round(forecast.list[3].main.temp)}°F | {Math.round(forecast.list[3].main.temp_min)}°F</strong>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    
  let apiKey = "72a6f55e4b65680441a701dfe7a8721f";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showForecast);
    return null;
  }
}
