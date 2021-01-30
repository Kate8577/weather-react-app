import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import Loader from "react-loader-spinner";
import WeatherData from "./WeatherData.js"

export default function Weather(props) {
   
   const [weatherData, setWeatherData] = useState({ready:false});
   const [city, setCity] = useState(props.defaultCity);

   function handleResponse(response) {
      setWeatherData({
         ready:true,
         city: response.data.name,
         date:new Date(response.data.dt*1000),
         temperature: response.data.main.temp,
         description: response.data.weather[0].description,
         humidity: response.data.main.humidity,
         iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
         
      });
        
   }

   function search() {
      const apiKey = "72a6f55e4b65680441a701dfe7a8721f";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
      
   }

   function handleRequest(event) {
      event.preventDefault();
      search();
   }

   function updateCity(event) {
      setCity(event.target.value);
      
   }

   if (weatherData.ready) {
      return (
         <div className="weather">
          <div className="Search">
      <form className="mb-3" onSubmit={handleRequest}>
        <div className="row">
          <div className="col-9">
            <div className="form-group">
              <input
                              type="search"
                              className="form-control"
                              placeholder="Enter a city..."
                              autoComplete="off"
                              onChange={updateCity}
              />
            </div>
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
            </div>
            <div className="weatherData">
               <WeatherData  data= {weatherData} />
            </div> 
          </div>
      );
   } else {
      search();
      return (<Loader
         type="TailSpin"
         color="#ff6584"
         height={50}
         width={50}
      />
         );
   }
}
   
   
