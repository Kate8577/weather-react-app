import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className= "Forecast" >
      <div className= "row" >
        <div className= "col-3" >
          <h2>13:00</h2>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"/>
          <div className= "future-temperature" >
            <strong>63°F</strong> | 63°F
          </div>
        </div>
        <div className="col-3">
          <h2> 16:00</h2>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"/>
          <div className="future-temperature">
            <strong>62°F</strong> | 62°F
          </div>
        </div>
        <div className="col-3">
          <h2> 19:00</h2>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"/>
          <div className= "future-temperature" >
            <strong>60°F</strong> | 60°F
          </div>
        </div>
        <div className="col-3">
          <h2>21:00</h2>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"/>
          <div className= "future-temperature" >
            <strong>59°F</strong> | 59°F
          </div>
        </div>
      </div>
    </div>
  );
}
