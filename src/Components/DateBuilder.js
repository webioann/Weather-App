import React,{useState,useEffect} from 'react'
import './Styles.scss'

export default function DateBuilder() {

    const[date,setDate] = useState("");

    useEffect(() => {
        function getDate ()  {
            let months = ['January','February','March','April', 'May', 'June','July', 'August', 'September','October','November','December'];
            let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            let dat = new Date();
          
            let day = days[dat.getDay()];
            let dateNow = dat.getDate();
            let mounth = months[dat.getMonth()];
            let year = dat.getFullYear();
            let a = `${day} ${dateNow} ${mounth} ${year}`;
            setDate(a);
            console.log(a);
        };
        getDate();
    },[])
    return (
        <div className='date'>
            {date}  
        </div>
    )
};


