import React from 'react';
import Bio from './Bio'

export default function Details(props){
    const {info} = props


    return (
        <div className="container">
            <h2>{info.title}</h2>
            <h3>{info.date}</h3>
            <Bio info={info}/>
        
        </div>
    )
}