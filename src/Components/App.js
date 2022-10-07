import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";


import Chart from "./Pages/Chart";
import Form from "./Pages/Form";
import Layout from "./Layout";
import Table from "./Pages/Table";
import axios from "axios";

const API_KEY = process.env.REACT_APP_KEY

function App() {

  const [weatherData, setWeatherData] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  })

  const gettingWeather = async (e) => {
    e.preventDefault()
    let city = e.target.elements.city.value;

    if (city) {
      const api_url = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      const data = await api_url.data
      setWeatherData({
        temp: Math.floor(data.main.temp - 273),
        city: data.name,
        country: data.sys.country,
        error: undefined
      });

    } else {
      setWeatherData({
        temp: undefined,
        city: undefined,
        country: undefined,
        error: "Введите название города"
      });
    }
  }

  return (
    <Routes>
     <Route path='/' element={<Layout/>}>
        <Route path='/table' element={<Table data={weatherData}/>}/>
        <Route path='/weather' element={<Form gettingWeather={gettingWeather} data={weatherData}/>}/>
        <Route path='/chart' element={<Chart data={weatherData}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
