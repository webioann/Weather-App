import React,{useState,useEffect} from 'react'
import Details from './Details.js';
// import DefaultPage from './DefaultPage.js';
import DateBuilder from './DateBuilder.js';
import Modal from './Modal.js'
import '../STYLES/Styles.scss';
// import axios from 'axios';

function WeatherApp() {

  const[data,setWeather] = useState({});
  const[values,setValues] = useState('');
  const[city,setCity] = useState('paris');
  const[active,setActive] = useState(false);
  const[message,setMessage] = useState('Message');
  const[lang,setLang] = useState("ua");
  const[langEngColor,setLangEngColor] = useState("lang-btn not-active");
  const[langUkrColor,setLangUkrColor] = useState("lang-btn not-active");

  // =================== FETCH =======================//
  function getWeatherData () {
    const api = {
      key: "59f5158226fe5c049d50f354a9fa3f30",
      urlBase: "http://api.openweathermap.org/data/2.5/", 
    };
  
    fetch(`${api.urlBase}weather?q=${city}&lang=${lang}&units=metric&appid=${api.key}`)
    .then(res => res.json())
    .then(data => {
      if(data.cod == "200") {
        setWeather(data);
        localStorage.setItem("city",JSON.stringify(city));
        localStorage.setItem("defaultData",JSON.stringify(data));
        console.log(data);
      }else if(data.cod == "404" || data.cod == "400" ) {
        let val = localStorage.getItem("defaultData");
        setWeather(JSON.parse(val));
        setMessage(data.message);
        setActive(true);
        // alert(data.message)
        console.log(`${data.message} because code = ${data.cod}`);
      }
    })
  }

  //================== setCity ============================//
  const inputValues = (event) => {
      setValues(event.target.value);
      setActive(false);
  }
  const saveValues = (event) => {
      if(event.key === "Enter") {
        setCity(values);
        console.log('enter city name');
        // localStorage.setItem("city",JSON.stringify(city));
      }
  }
  // function chooseUkr () {
  //   setLang("ua");
  //   console.log("ua");
  // }
  // function chooseEng () {
  //   setLang("eng");
  //   console.log("eng");
  // }
  function chooseLang (e) {
    if(e.target.id == 'eng') {
      setLang("eng");
      setLangEngColor("lang-btn active");
      setLangUkrColor("lang-btn not-active");
    }else if(e.target.id == 'ua') {
      setLang("ua");
      setLangUkrColor("lang-btn active");
      setLangEngColor("lang-btn not-active");
    }
  }

  useEffect(() => {
    let raw = localStorage.getItem("city");
      setCity(JSON.parse(raw));
      console.log(`city on compDidMount=> ${city }`);
      console.log("RENDERING");
  },[])

  useEffect(() => {
    localStorage.setItem("city",JSON.stringify(city));
    localStorage.setItem("defaultData",JSON.stringify(data));
    console.log(`city => ${city }`);
    getWeatherData();
    console.log("UPDATA");
  },[city,langEngColor]);

    return (
      (data.cod == "200") ? (
        <div className='weather-app'>
          <div className="row search">
            <input type='text'
              placeholder='Search...'
              value={values}
              onChange={inputValues}
              onKeyPress={saveValues } />
              <Modal message={message} active={active}/>
              <div className='lang-btn'>
                <div onClick={chooseLang} id='eng' className={langEngColor}>ENG</div>
                <div onClick={chooseLang} id='ua' className={langUkrColor}>UKR</div>
              </div>
          </div>
            <div className="location">{data.name}  , {data.sys.country}</div>
            <DateBuilder/>
            <div className='col weather' >
              <div className='temp-sky'>
                <div className="temp">{Math.round(data.main.temp)}&deg;C</div>
                <div className="sky">
                  <span> {data.weather[0].description} </span>
                  <img src={`https://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png` } alt=''/>
                </div> 
              </div>
              <Details data={data}/>
            </div>
        </div>
      ) : ( 
        <div className="weather-app">
          <div className="row search">
            <input type='text'
              placeholder='Search...'
              value={values}
              onChange={inputValues}
              onKeyPress={saveValues } />
          </div>
        </div>
      )
    )
}
export default WeatherApp;
