import React, { useState } from 'react';
import './index.css';

const App=()=>{

  let currTime=new Date().toLocaleTimeString();
  const [newTime,setTime]=new useState(currTime);
  const updateTime=()=>{
    let currTime=new Date().toLocaleTimeString();
    setTime(currTime);
  }
  setInterval(updateTime,1000);
  return(
  <>
  <h1>Digital Clock</h1>
  <h2>{newTime}</h2>
  </>)
}
export default App;
