import React, {useEffect, useState} from "react";

// Stateless component
const Weather = (props) => {
    const { cityName } = props.match.params;
    const [weatherInfo, setWeatherInfo] = useState({
        main:{
            temp:''
        },
        weather:[
            {
                main:'',
                description:'',
            }
        ]});

    useEffect(() => {
        fetch(`http://localhost:8888/weather-service/weathers?cityName=${cityName}`)
            .then(res => res.json())
            .then((data) =>{
                setWeatherInfo(data)
            })
            .catch(err =>console.warn(`If there is no value in Main or Description, there is no information about ${cityName}`))
    },[])

    console.log(weatherInfo);


    const weatherMain = weatherInfo.weather[0].main;
    const weatherDescription = weatherInfo.weather[0].description;
    const weatherTemperature = (weatherInfo.main.temp- 273.15).toFixed(2);
    console.log(weatherMain);
    console.log(weatherDescription);
    console.log(weatherTemperature);


    return (
        <div>
            <p> City Name: {cityName}</p>
            <p> Main: {weatherMain}</p>
            <p> Description: {weatherDescription}</p>
            <p> Temperature: {weatherTemperature}</p>
        </div>
    );
};
export default Weather;