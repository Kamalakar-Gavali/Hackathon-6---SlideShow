import React, {Component, useState} from "react";
import '../styles/App.css';
import Slides from './Slides';


const App = (props) => {
  return (
    <>
    <Slides slides={props.slides}/>
    </>
  )
}


export default App;
