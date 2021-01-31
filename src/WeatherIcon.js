import React from "react";
import { WiDaySunny } from "weather-icons-react";
import { WiNightClear } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import { WiNightAltPartlyCloudy } from "weather-icons-react";
import { WiNightAltSnowWind } from "weather-icons-react";
import { WiSnow } from "weather-icons-react";
import { WiDayRain } from "weather-icons-react";
import { WiNightAltRain } from "weather-icons-react";
import { WiThunderstorm} from "weather-icons-react";
import { WiFog } from "weather-icons-react";


export default function WeatherIcon(props) {
    if (props.code === "01d") {
        return (
            <WiDaySunny
                size={120}
                color='#fdb827' />
        );
    } else if (props.code === "01n") {
        return (
            <WiNightClear
                size={120}
                color='#63686e' />
        );
    } else if (props.code === "02d") {
        return (
            <WiDayCloudy
                size={120}
                color='#fdb827' />
        );
    } else if (props.code === "02n") {
        return (
            <WiNightAltPartlyCloudy
                size={120}
                color='#63686e' />
        );
    } else if (props.code === "03d") {
        return (
            <WiCloud
                size={120}
                color='#fdb827' />
        );
        } else if (props.code === "03n") {
        return (
            <WiCloud
                size={120}
                color='#63686e' />
        );
          } else if (props.code === "04d") {
        return (
            <WiDayCloudy
                size={120}
                color='#fdb827' />
        );
           } else if (props.code === "04n") {
        return (
            <WiNightAltPartlyCloudy
                size={120}
                color='#63686e' />
        );
    } else if (props.code === "09d") {
        return (
            <WiDayRain
                size={120}
                color='#fdb827' />
        );
            } else if (props.code === "10d") {
        return (
            <WiDayRain
                size={120}
                color='#fdb827' />
        );
    } else if (props.code === "09n") {
        return (
            <WiNightAltRain
                size={120}
                color='#63686e' />
        );
  } else if (props.code === "10n") {
        return (
            <WiNightAltRain
                size={120}
                color='#63686e' />
        );
    } else if (props.code === "13n") {
        return (
            <WiNightAltSnowWind
                size={120}
                color='#63686e' />
        );

        } else if (props.code === "13d") {
        return (
            <WiSnow
                size={120}
                color='#63686e' />
        );
    
    } else if (props.code === "11d") {
        return (
              <WiThunderstorm
                size={120}
                color='#63686e' />
        );
        } else if (props.code === "11n") {
        return (
              <WiThunderstorm
                size={120}
                color='#63686e' />
        );
    } else {
        return (
            <WiFog
        size = { 120}
    color = '#63686e' />
    ); 
    }   
}
