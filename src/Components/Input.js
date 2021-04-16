import React,{useState,useEffect} from 'react'

export default function Input() {
    const[values,setValues] = useState('');
    const[storage,setStorage] = useState('')

    const inputValues = (event) => {
        setValues(event.target.value);
    }
    const saveValues = (event) => {
        if(event.key === "Enter") {
            setStorage(event.target.value);
          }
    }
    useEffect(() => {
        let raw = localStorage.getItem("storage") || [];
        setStorage(JSON.parse(raw));
        setValues(storage);
    },[])

    useEffect(() => {
        localStorage.setItem("storage",JSON.stringify(storage));
        console.log(`storage => ${storage }`); 
    },[storage])

    return (
        <div>
            <input type="text"
                placeholder="Search..." 
                value={values}
                onChange={inputValues}
                onKeyPress={saveValues } />
            <button>STORAGE === {storage}</button>
            <button>VALUES === {values}</button>
            <br/>
        </div>
    )
}
