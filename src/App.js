import React, { useState, useEffect } from "react";
import Details from './Details'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import axios from 'axios'

import "./App.css";


const API_KEY = 'dI27bkYyXEuI4E7V067W0s19ct7znX5V8EsUKBDx'
const URL='https://api.nasa.gov/planetary/apod?api_key='


const HeaderDiv = styled.div`
  border: 2px;
  border-radius: 10px;
  background: grey;
  font-family: 'Montserrat';
  font-size: 3rem;
`

function App() {
  const [info,setInfo] = useState([])
  const [date,setDate] = useState([])

  useEffect(()=>{
    axios.get(`${URL}${API_KEY}&date=2020-12-07`)
      .then(res=>{
        setInfo(res.data)
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
  },[])
  

  return (

    

    <div className="App">
      
      <HeaderDiv>
        <h1>NASA Photo of the day </h1>
      </HeaderDiv>
      <div className='media-container'>
        {info.media_type !== 'video'  
        ? <img alt='the sun'src={info.url} width="750" height="750" /> 
        : <ReactPlayer width="100%" url={info.url} />}
      </div>
      <Details info={info}/>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>*/}
    </div>
  );
}

export default App;
