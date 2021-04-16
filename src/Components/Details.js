import React from 'react'
import './Styles.scss';

function Details(props) {
    const data = props.data;
    
        let  sunRise ="";
        let  sunSet ="";
        let pressuare = "";
        let direction = "";

    function timeSunrise () {
        let dd = new Date((data.sys.sunrise) *1000);
            let hours = "";
            if (dd.getHours() < 10){
                hours = `0${dd.getHours()}`;
            }else{
                hours = `${dd.getHours()}`;
            }
            let minut = "";
            if (dd.getMinutes() < 10){
                minut = `0${dd.getMinutes()}`;
            }else{
                minut = `${dd.getMinutes()}`;
            }
        sunRise = `${hours}:${minut}`;
    }
    timeSunrise();
    
    function timeSunset () {
        let dd = new Date((data.sys.sunset) *1000);
            let hours = "";
            if (dd.getHours() < 10){
                hours = `0${dd.getHours()}`;
            }else{
                hours = `${dd.getHours()}`;
            }
            let minut = "";
            if (dd.getMinutes() < 10){
                minut = `0${dd.getMinutes()}`;
            }else{
                minut = `${dd.getMinutes()}`;
            }
        sunSet = `${hours}:${minut}`;
    }
    timeSunset();

    function press () {
        let a = data.main.pressure;
        pressuare = Math.round(Number(a)/1.333) ;
    } 
    press();

    const windDirect = () => {
        let dir = data.wind.deg;
        if( dir > 0 && dir <= 23){
            direction = "north"
        }else if( dir > 23 && dir <= 68){
            direction = "north-east"
        }else if( dir > 68 && dir <= 113){
            direction = "east"
        }else if( dir > 113 && dir <= 158){
            direction = "south-east"
        }else if( dir > 158 && dir <= 203){
            direction = "south"
        }else if( dir > 203 && dir <= 248){
            direction = "south-west"
        }else if( dir > 248 && dir <= 293){
            direction = "west"
        }else if( dir > 293 && dir <= 338){
            direction = "north-west"
        }else if( dir > 338 && dir <= 360){
            direction = "north"
        }
    }
   windDirect();

    return (
        <div className='details'>
            <p>Wind : {direction}  {Math.round(data.wind.speed)} m/s</p>
            <p>Sunrise : {sunRise}</p>
            <p>Sunset : {sunSet}</p>
            <p>Pressure : {pressuare}mm rt col</p>
        </div>
    )
}
export default Details;