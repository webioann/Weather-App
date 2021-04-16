import React,{useState,useEffect} from 'react'
import Details from './Details.js';
import DefaultPage from './DefaultPage.jsx';
import DateBuilder from './DateBuilder.js'
import './Styles.scss';
// import axios from 'axios';

function WeatherApp() {
  const[data,setWeather] = useState({});
 
  //================== setCity ============================//
  const[values,setValues] = useState('');
  const[city,setCity] = useState('');


  const inputValues = (event) => {
      setValues(event.target.value);
  }
  const saveValues = (event) => {
      if(event.key === "Enter") {
        setCity(values);
        localStorage.setItem("city",JSON.stringify(city));
       
      }
  }
  useEffect(() => {
      let raw = localStorage.getItem("city");
      setCity(JSON.parse(raw));
      console.log(`city => ${city }`);
      
  },[])

  useEffect(() => {
      localStorage.setItem("city",JSON.stringify(city));
      console.log(`city => ${city }`);
      getWeatherData(); 
    },[city])

  // =================== FETCH =======================//
  const api = {
    key: "59f5158226fe5c049d50f354a9fa3f30",
    urlBase: "http://api.openweathermap.org/data/2.5/", 
    lang: "ua",
  };
  function getWeatherData () {
      fetch(`${api.urlBase}weather?q=${city}&lang=${api.lang}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(data => setWeather(data))
  }
    return (
      <div>
      <h1>{data.description}</h1>
      <div className='weather-app'>
          <div className="sourch-wraper">
            <input className='search-bar'
              type='text'
              placeholder='Search...'
              value={values}
              onChange={inputValues}
              onKeyPress={saveValues } />
        </div>
          {(typeof data.main != "undefined") ? (
          <>
            <div className='location-wraper'>
              <div className="location">{data.name}  ,{data.sys.country}</div>
              <DateBuilder/>
            </div>
            <div className='weather-wraper'>
              <div className="temper">{Math.round(data.main.temp)}&deg;C
                <div className="weather">
                  <span> {data.weather[0].description} </span>
                  <img src={`https://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png` } alt=''/>
                </div>
              </div>
              <Details data={data}/>
            </div>
          </>
          ) : ( 
            <DefaultPage data={data}/>
          )}
      </div>
    </div>
  )

}
export default WeatherApp;
// onKeyPress={getWeatherData}

// onKeyPress={(e) => { if(e.key === "Enter") {setCity(e.target.value)}}}

