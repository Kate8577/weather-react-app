import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
 import Loader from "react-loader-spinner"

export default function Weather(props) {
   
   const [weatherData, setWeatherData] = useState({ready:false});
   function handleResponse(response) {
      setWeatherData({
         ready:true,
         city: response.data.name,
         date:"Last updated: Friday 11:28",
         temperature: response.data.main.temp,
         description: response.data.weather[0].description,
         iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
         
      });
        
   }

   if (weatherData.ready) {
      return (
         <div className="weather">
            <div className="city">
               <h1>{weatherData.city}</h1>
            </div>
             <div className="date">
               <h2>{weatherData.date}</h2>
            </div>
            <div className= "icon">
               <img src={weatherData.iconUrl}
                  alt={weatherData.desctiption} />
            </div>
            <strong>{Math.round(weatherData.temperature)}</strong><span>°F |°C</span>
          <div className="description">
               <h2>{weatherData.description}</h2>
            </div>
          </div>
      );
   } else {
      const apiKey = "72a6f55e4b65680441a701dfe7a8721f";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
      return (<Loader
         type="TailSpin"
         color="#ff6584"
         height={50}
         width={50}
      />
         );
   }
}
   
   
