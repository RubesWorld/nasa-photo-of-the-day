import React,{useState} from 'react';
import Bio from './Bio'
import styled from 'styled-components'


const Button = styled.button`
    padding: 1rem 1rem;
    margin: 5px;
    border: 1px;
    border-radius: 4px;
    color: white;
    ${props => (props.type === "primary" ? `background: ${props.theme.primaryColor}` : null)};
    
    &:hover {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
        ${props=> `background: ${props.theme.secondaryColor}`};
        }
    `;



export default function Details(props){
    const {info,type} = props
    const [details,setDetails] =useState(true)

        const toggle = () =>{
            setDetails(!details)
        }

    return (
        <div className="container">
        <Button type='primary' onClick={toggle}>{details ? 'Hide Info':'Show Info'}</Button>
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