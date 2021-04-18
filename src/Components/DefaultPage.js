import React from 'react'
import '../STYLES/Styles.scss';
import DateBuilder from './DateBuilder.js'

function DefaultPage() {
  
  return (
    <div className='weather-app'>
        <div className="row search">
        <input type='text'
          placeholder='Search...'/>
        </div>
          <div className="location">"New York ,US  "</div>
          <DateBuilder/>
          <div className='col weather'>
            <div className='temp-sky'>
              <div className="temp">20&deg;C</div>
              <div className="sky">
                <span>Sunny </span>
                <img src='' alt=''/>
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