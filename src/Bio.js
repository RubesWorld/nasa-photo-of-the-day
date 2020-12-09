import React from 'react';

export default function Bio(props){
    const {info} = props


    return (
        <div className="text-container">
            <p>{info.explanation}</p>

        </div>
    )
}