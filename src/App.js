import React, { useState, useEffect } from "react";
import Details from './Details'

import axios from 'axios'

import "./App.css";


const API_KEY = 'dI27bkYyXEuI4E7V067W0s19ct7znX5V8EsUKBDx'
const URL='https://api.nasa.gov/planetary/apod?api_key='

function App() {
  const [info,setInfo] = useState([])

  useEffect(()=>{
    axios.get(`${URL}${API_KEY}&date=2012-03-14`)
      .then(res=>{
        setInfo(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  },[])
  

  return (

    

    <div className="App">

      <h1>NASA Photo of the day </h1>
    
      <img src='{info.url}' width="250" height="250"></img>
      <Details info={info}/>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>*/}
    </div>
  );
}

export default App;
