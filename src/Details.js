import React,{useState} from 'react';
import Bio from './Bio'

export default function Details(props){
    const {info} = props
    const [details,setDetails] =useState(true)

        const toggle = () =>{
            setDetails(!details)
        }

    return (
        <div className="container">
        <button onClick={toggle}>Show Info</button>
        {
            details && <div>
            <h2>{info.title}</h2>
            <h3>{info.date}</h3>
            <Bio info={info}/>
            </div>
        }

        

                
        </div>
    )
}