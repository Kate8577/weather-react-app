import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit");
   
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    
    function convertToFahrenheit(event) { 
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === "fahrenheit") {
        return (
            <div className="Temperature">
                <strong>{Math.round(props.fahrenheit)}</strong>
                <span>°F |<a href="/" onClick={convertToCelsius}>°C</a></span>
            </div>
        );
    } else {
        let celsius = (props.fahrenheit - 32) * 5 / 9;
        return (
                 <div className="Temperature">
                <strong>{Math.round(celsius)}</strong>
                <span> <a href="/" onClick={convertToFahrenheit}>°F </a>|°C</span>
            </div>
        );
    }
}