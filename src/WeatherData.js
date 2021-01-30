import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherData(props) {
    return (
        <div>
            <div className="city">
               <h1>{props.data.city}</h1>
            </div>
             <div className="date">
               <h2><FormattedDate date={props.data.date}/></h2>
            </div>
            <div className="icon">
                <WeatherIcon code={props.data.icon} alt={props.data.description}/>
            </div>
            <WeatherTemperature fahrenheit={props.data.temperature} />
          <div className="description">
               <h2>{props.data.description}</h2>
               <h3>Humidity: {props.data.humidity} %</h3>
            </div>
        </div>
            
    );
}