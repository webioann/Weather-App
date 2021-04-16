import React from 'react'
import './Styles.scss';
import DateBuilder from './DateBuilder.js'

function DefaultPage(props) {
    const data = props.data;
    return (
        <div>
            <div className='location-wraper'>
                <div className="location">New York ,US  </div>
                <DateBuilder/>
            </div>
            <div className='weather-wraper'>
                <div className="temper">20&deg;C
                  <div className="weather">
                    <span> Sunny </span>
                    <img src={`https://openweathermap.org/img/wn/${ data.icon}@2x.png` } alt=''/>
                  </div>
                </div>
                <div className='details'>
                    <p>Wind : south-west  10 m/s</p>
                    <p>Sunrise : 06:00</p>
                    <p>Sunset : 20:00</p>
                    <p>Pressure : 760mm rt col</p>
                </div>
            </div>
        </div>
    )
}
export default DefaultPage;