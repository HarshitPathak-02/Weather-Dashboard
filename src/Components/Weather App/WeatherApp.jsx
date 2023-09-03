import React, { useState } from 'react'
import "./WeatherApp.css"

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
import delete_icon from "../Assets/delete.png"
import refresh_icon from "../Assets/refresh.png"

const WeatherApp = () => {
    let api_key = "e3c40612576149fda5b5c02e4a0f17a6";
    const [wicon,setIcon] = useState(cloud_icon);
    const [wicon1,setIcon1] = useState(cloud_icon);
    const [wicon2,setIcon2] = useState(cloud_icon);
    const [wicon3,setIcon3] = useState(cloud_icon);
    const [wicon4,setIcon4] = useState(cloud_icon);
    const [disp1,setDisplay1] = useState("block");
    const [disp2,setDisplay2] = useState("block");
    const [disp3,setDisplay3] = useState("block");
    const [disp4,setDisplay4] = useState("block");

    const search = async ()=>{
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value===""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        let humidity = document.getElementsByClassName("humidity-percent");
        let wind = document.getElementsByClassName("wind-speed");
        let temperature = document.getElementsByClassName("weather-temp");
        let location = document.getElementsByClassName("weather-location");
        let feelsLike = document.getElementsByClassName("feels-like");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = Math.floor(data.wind.speed) + "Km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
        location[0].innerHTML = data.name;
        feelsLike[0].innerHTML ="Feels like " + Math.floor(data.main.feels_like)+ "°C";

        if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n") {
            setIcon(clear_icon);
        } 
        else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n") {
            setIcon(cloud_icon);
        }
        else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n") {
            setIcon(drizzle_icon);
        }
        else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n") {
            setIcon(drizzle_icon);
        }
        else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n") {
            setIcon(rain_icon);
        }
        else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n") {
            setIcon(rain_icon);
        }
        else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n") {
            setIcon(snow_icon);
        } 
        else {
            setIcon(clear_icon);
        }
    }

    const deleteCityOne = ()=>{
        setDisplay1("none");
    }
    const deleteCityTwo = ()=>{
        setDisplay2("none");
    }
    const deleteCityThree = ()=>{
        setDisplay3("none");
    }
    const deleteCityFour = ()=>{
        setDisplay4("none");
    }

    const refreshTemp = async (city)=>{
        let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;

        let response = await fetch(url1);

        if (city==="Mumbai"){
            let data1 = await response.json();

            let humidityCard1 = document.getElementsByClassName("humidity-percent1");
            let windCard1 = document.getElementsByClassName("wind-speed1");
            let temperatureCard1 = document.getElementsByClassName("weather-temp1");
            let locationCard1 = document.getElementsByClassName("weather-location1");
            let feelsLikeCard1 = document.getElementsByClassName("feels-like1");

            humidityCard1[0].innerHTML = data1.main.humidity + "%";
            windCard1[0].innerHTML = Math.floor(data1.wind.speed) + "Km/h";
            temperatureCard1[0].innerHTML = Math.floor(data1.main.temp) + "°C";
            locationCard1[0].innerHTML = data1.name;
            feelsLikeCard1[0].innerHTML ="Feels like " + Math.floor(data1.main.feels_like)+ "°C"; 

            if (data1.weather[0].icon==="01d" || data1.weather[0].icon==="01n") {
                setIcon1(clear_icon);
            } 
            else if (data1.weather[0].icon==="02d" || data1.weather[0].icon==="02n") {
                setIcon1(cloud_icon);
            }
            else if (data1.weather[0].icon==="03d" || data1.weather[0].icon==="03n") {
                setIcon1(drizzle_icon);
            }
            else if (data1.weather[0].icon==="04d" || data1.weather[0].icon==="04n") {
                setIcon1(drizzle_icon);
            }
            else if (data1.weather[0].icon==="09d" || data1.weather[0].icon==="09n") {
                setIcon1(rain_icon);
            }
            else if (data1.weather[0].icon==="10d" || data1.weather[0].icon==="10n") {
                setIcon1(rain_icon);
            }
            else if (data1.weather[0].icon==="13d" || data1.weather[0].icon==="13n") {
                setIcon1(snow_icon);
            } 
            else {
                setIcon1(clear_icon);
            }
        }
        if (city==="Delhi"){
            let data2 = await response.json();

            let humidityCard2 = document.getElementsByClassName("humidity-percent2");
            let windCard2 = document.getElementsByClassName("wind-speed2");
            let temperatureCard2 = document.getElementsByClassName("weather-temp2");
            let locationCard2 = document.getElementsByClassName("weather-location2");
            let feelsLikeCard2 = document.getElementsByClassName("feels-like2");

            humidityCard2[0].innerHTML = data2.main.humidity + "%";
            windCard2[0].innerHTML = Math.floor(data2.wind.speed) + "Km/h";
            temperatureCard2[0].innerHTML = Math.floor(data2.main.temp) + "°C";
            locationCard2[0].innerHTML = data2.name;
            feelsLikeCard2[0].innerHTML ="Feels like " + Math.floor(data2.main.feels_like)+ "°C";

            if (data2.weather[0].icon==="01d" || data2.weather[0].icon==="01n") {
                setIcon2(clear_icon);
            } 
            else if (data2.weather[0].icon==="02d" || data2.weather[0].icon==="02n") {
                setIcon2(cloud_icon);
            }
            else if (data2.weather[0].icon==="03d" || data2.weather[0].icon==="03n") {
                setIcon2(drizzle_icon);
            }
            else if (data2.weather[0].icon==="04d" || data2.weather[0].icon==="04n") {
                setIcon2(drizzle_icon);
            }
            else if (data2.weather[0].icon==="09d" || data2.weather[0].icon==="09n") {
                setIcon2(rain_icon);
            }
            else if (data2.weather[0].icon==="10d" || data2.weather[0].icon==="10n") {
                setIcon2(rain_icon);
            }
            else if (data2.weather[0].icon==="13d" || data2.weather[0].icon==="13n") {
                setIcon2(snow_icon);
            } 
            else {
                setIcon2(clear_icon);
            }
 
        }
        if (city==="Indore") {
            let data3 = await response.json();

            let humidityCard3 = document.getElementsByClassName("humidity-percent3");
            let windCard3 = document.getElementsByClassName("wind-speed3");
            let temperatureCard3 = document.getElementsByClassName("weather-temp3");
            let locationCard3 = document.getElementsByClassName("weather-location3");
            let feelsLikeCard3 = document.getElementsByClassName("feels-like3");

            humidityCard3[0].innerHTML = data3.main.humidity + "%";
            windCard3[0].innerHTML = Math.floor(data3.wind.speed) + "Km/h";
            temperatureCard3[0].innerHTML = Math.floor(data3.main.temp) + "°C";
            locationCard3[0].innerHTML = data3.name;
            feelsLikeCard3[0].innerHTML ="Feels like " + Math.floor(data3.main.feels_like)+ "°C";

            if (data3.weather[0].icon==="01d" || data3.weather[0].icon==="01n") {
                setIcon3(clear_icon);
            } 
            else if (data3.weather[0].icon==="02d" || data3.weather[0].icon==="02n") {
                setIcon3(cloud_icon);
            }
            else if (data3.weather[0].icon==="03d" || data3.weather[0].icon==="03n") {
                setIcon3(drizzle_icon);
            }
            else if (data3.weather[0].icon==="04d" || data3.weather[0].icon==="04n") {
                setIcon3(drizzle_icon);
            }
            else if (data3.weather[0].icon==="09d" || data3.weather[0].icon==="09n") {
                setIcon3(rain_icon);
            }
            else if (data3.weather[0].icon==="10d" || data3.weather[0].icon==="10n") {
                setIcon3(rain_icon);
            }
            else if (data3.weather[0].icon==="13d" || data3.weather[0].icon==="13n") {
                setIcon3(snow_icon);
            } 
            else {
                setIcon3(clear_icon);
            }
        }
        if (city==="Goa") {
            let data4 = await response.json();

            let humidityCard4 = document.getElementsByClassName("humidity-percent4");
            let windCard4 = document.getElementsByClassName("wind-speed4");
            let temperatureCard4 = document.getElementsByClassName("weather-temp4");
            let locationCard4 = document.getElementsByClassName("weather-location4");
            let feelsLikeCard4 = document.getElementsByClassName("feels-like4");

            humidityCard4[0].innerHTML = data4.main.humidity + "%";
            windCard4[0].innerHTML = Math.floor(data4.wind.speed) + "Km/h";
            temperatureCard4[0].innerHTML = Math.floor(data4.main.temp) + "°C";
            locationCard4[0].innerHTML = data4.name;
            feelsLikeCard4[0].innerHTML ="Feels like " + Math.floor(data4.main.feels_like)+ "°C";

            if (data4.weather[0].icon==="01d" || data4.weather[0].icon==="01n") {
                setIcon4(clear_icon);
            } 
            else if (data4.weather[0].icon==="02d" || data4.weather[0].icon==="02n") {
                setIcon4(cloud_icon);
            }
            else if (data4.weather[0].icon==="03d" || data4.weather[0].icon==="03n") {
                setIcon4(drizzle_icon);
            }
            else if (data4.weather[0].icon==="04d" || data4.weather[0].icon==="04n") {
                setIcon4(drizzle_icon);
            }
            else if (data4.weather[0].icon==="09d" || data4.weather[0].icon==="09n") {
                setIcon4(rain_icon);
            }
            else if (data4.weather[0].icon==="10d" || data4.weather[0].icon==="10n") {
                setIcon4(rain_icon);
            }
            else if (data4.weather[0].icon==="13d" || data4.weather[0].icon==="13n") {
                setIcon4(snow_icon);
            } 
            else {
                setIcon4(clear_icon);
            }
        }
    }

  return (
    <div className='container'>
        <h1>Weather Dashboard</h1>
        <div className="topbar">
            <input type="text" className='cityInput' placeholder='Enter the city...'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="search-icon" />
            </div>
        </div>
        <div className="weather-card">
            <div className="generated-card">
                <div className="weather-img">
                    <img src={wicon} alt="cloud-icon"/>
                </div>
                <div className="weather-temp">27°C</div>
                <div className="feels-like">Feels like 38°C</div>
                <div className="weather-location">London</div>
                <div className="data-container">
                    <div className="element">
                        <img src={humidity_icon} alt="" className='icon' />
                        <div className="data">
                            <div className="humidity-percent">64%</div>
                            <div className="humidity-text">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src={wind_icon} alt="" className='icon' />
                        <div className="data">
                            <div className="wind-speed">12 Km/h</div>
                            <div className="windspeed-text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h2>Temperature of Various Cities</h2>
        <div className="city-cards">
                <div className="card1" style={{display:disp1}}>
                    <div className="dlt-ref">
                        <img src={delete_icon} alt="delete" className='dlt-btn' onClick={()=>{deleteCityOne()}}/>
                        <img src={refresh_icon} alt="" className='ref-btn' onClick={()=>{refreshTemp("Mumbai")}}/>
                    </div>
                    <div className="weather-img">
                        <img src={wicon1} alt="cloud-icon"/>
                    </div>
                    <div className="weather-temp1">27°C</div>
                    <div className="feels-like1">Feels like 38°C</div>
                    <div className="weather-location1">Mumbai</div>
                    <div className="data-container">
                        <div className="element">
                            <img src={humidity_icon} alt="" className='icon'/>
                            <div className="data">
                                <div className="humidity-percent1">64%</div>
                                <div className="humidity-text">Humidity</div>
                            </div>
                        </div>
                        <div className="element">
                            <img src={wind_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="wind-speed1">12 Km/h</div>
                                <div className="windspeed-text">Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card2" style={{display:disp2}}>
                    <div className="dlt-ref">
                        <img src={delete_icon} alt="" className='dlt-btn' onClick={()=>{deleteCityTwo()}}/>
                        <img src={refresh_icon} alt="" className='ref-btn' onClick={()=>{refreshTemp("Delhi")}}/>
                    </div>
                    <div className="weather-img">
                        <img src={wicon2} alt="cloud-icon"/>
                    </div>
                    <div className="weather-temp2">27°C</div>
                    <div className="feels-like2">Feels like 38°C</div>
                    <div className="weather-location2">Delhi</div>
                    <div className="data-container">
                        <div className="element">
                            <img src={humidity_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="humidity-percent2">64%</div>
                                <div className="humidity-text">Humidity</div>
                            </div>
                        </div>
                        <div className="element">
                            <img src={wind_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="wind-speed2">12 Km/h</div>
                                <div className="windspeed-text">Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card3" style={{display:disp3}}>
                    <div className="dlt-ref">
                        <img src={delete_icon} alt="" className='dlt-btn' onClick={()=>{deleteCityThree()}}/>
                        <img src={refresh_icon} alt="" className='ref-btn' onClick={()=>{refreshTemp("Indore")}}/>
                    </div>
                    <div className="weather-img">
                        <img src={wicon3} alt="cloud-icon"/>
                    </div>
                    <div className="weather-temp3">27°C</div>
                    <div className="feels-like3">Feels like 38°C</div>
                    <div className="weather-location3">Indore</div>
                    <div className="data-container">
                        <div className="element">
                            <img src={humidity_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="humidity-percent3">64%</div>
                                <div className="humidity-text">Humidity</div>
                            </div>
                        </div>
                        <div className="element">
                            <img src={wind_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="wind-speed3">12 Km/h</div>
                                <div className="windspeed-text">Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card4" style={{display:disp4}}>
                    <div className="dlt-ref">
                        <img src={delete_icon} alt="" className='dlt-btn' onClick={()=>{deleteCityFour()}}/>
                        <img src={refresh_icon} alt="" className='ref-btn' onClick={()=>{refreshTemp("Goa")}}/>
                    </div>
                    <div className="weather-img">
                        <img src={wicon4} alt="cloud-icon"/>
                    </div>
                    <div className="weather-temp4">27°C</div>
                    <div className="feels-like4">Feels like 38°C</div>
                    <div className="weather-location4">Goa</div>
                    <div className="data-container">
                        <div className="element">
                            <img src={humidity_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="humidity-percent4">64%</div>
                                <div className="humidity-text">Humidity</div>
                            </div>
                        </div>
                        <div className="element">
                            <img src={wind_icon} alt="" className='icon' />
                            <div className="data">
                                <div className="wind-speed4">12 Km/h</div>
                                <div className="windspeed-text">Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <footer>
            <p>&copy; 2017–2023 Company Name</p>
            <div className="links">
                <a href="index.html">Home</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>
        </footer>
    </div>
  )
}

export default WeatherApp
