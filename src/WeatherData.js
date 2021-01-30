import React from "react";
import FormattedDate from "./FormattedDate.js";


export default function WeatherData(props) {
    return (
        <div>
<div className="city">
               <h1>{props.data.city}</h1>
            </div>
             <div className="date">
               <h2><FormattedDate date={props.data.date}/></h2>
            </div>
            <div className= "icon">
               <img src={props.data.iconUrl}
                  alt={props.data.desctiption} />
            </div>
            <strong>{Math.round(props.data.temperature)}</strong><span>°F |°C</span>
          <div className="description">
               <h2>{props.data.description}</h2>
               <h3>Humidity: {props.data.humidity} %</h3>
            </div>
        </div>
            
    );
}