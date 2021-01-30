import React from "react";
import { WiDaySunny } from "weather-icons-react";
import { WiNightClear } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiCloud} from "weather-icons-react";
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
            <WiDayCloudy
                size={120}
                color='#63686e' />
        );
    } else if (props.code === "03d" || "03n" || "04d" || "04n") {
        return (
            <WiCloud
                size={120}
                color='#63686e' />
        );
    } else if (props.code === "09d" || "10d") {
        return (
            <WiDayRain
                size={120}
                color='#fdb827' />
        );
    } else if (props.code === "09n" || "10n") {
        return (
            <WiNightAltRain
                size={120}
                color='#63686e' />
        );
    } else if (props.code === "13d" || "13n") {
        return (
            <WiSnow
                size={120}
                color='#fdb827' />
        );
    } else if (props.code === "11d" || "11n") {
        return (
              <WiThunderstorm
                size={120}
                color='#63686e' />
        );
    } else {
        return (
            <WiFog
        size = { 120}
    color = '#fdb827' />
    ); 
    }   
}
