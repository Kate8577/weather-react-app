import React from "react";
import "./Weather.css";
import axios from 'axios';

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${response.data.main.temp}°C`)
    }
    let apiKey = "72a6f55e4b65680441a701dfe7a8721f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Diego&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return(
         <div className="temperature">
            <h2>18</h2>
            <span>°F |<a href="#">°C</a></span>  
         </div>
    
  );

}
