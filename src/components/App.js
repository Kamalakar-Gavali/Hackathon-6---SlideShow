import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';
//import Slides from './Slides';


const App = (props) => {


    const [slideIndex,setSildeIndex]=useState(0);
    const [slideSize,setSlideSize]=useState(props.slides.length)
    const idNext=React.createRef();
    const idPrev=React.createRef();
    const idRestart=React.createRef();

    useEffect(()=>{
        console.log(slideIndex+" "+ slideSize);
      if(slideIndex==0)
      {
          
          idPrev.current.setAttribute('disabled','disabled');
          idRestart.current.setAttribute('disabled','disabled');
          console.log("insde 1 if");
          // idPrev.current.style.pointerEvents='none';
          // idRestart.current.style.pointerEvents='none';;
      }
      if(slideIndex==slideSize-1)
      {
          idNext.current.setAttribute('disabled','disabled');
          console.log("in");
          //idNext.current.style.pointerEvents='none';
          
      }
      else{
          idNext.current.removeAttribute('disabled');
          //idNext.current.style.pointerEvents='auto';
      }
      if(slideIndex>0)
      {
          idRestart.current.removeAttribute('disabled');
          idPrev.current.removeAttribute('disabled');
          // idRestart.current.style.pointerEvents='auto';
          // idPrev.current.style.pointerEvents='auto';
      }
      else
      {
          idRestart.current.setAttribute('disabled','disabled');
          idPrev.current.setAttribute('disabled','disabled');
          // idRestart.current.style.pointerEvents='none';
          // idPrev.current.style.pointerEvents='none';
      }
      

  },[slideIndex]);
    const next=()=>{
        console.log("In Next Function");
        setSildeIndex(slideIndex+1);
        
        
    }
    const restart=()=>{
        console.log("In Restart Function");
        if(slideIndex!=0)
        {
        setSildeIndex(0);
        }
        
        
    }
    const prev=()=>{
        console.log("In Prev Function"+slideIndex);
        //setSildeIndex(slideIndex-1);
        if(slideIndex!=0)
        {
            //idPrev.current.style.pointerEvents='auto';
            setSildeIndex(slideIndex-1);
            //idPrev.current.style.pointerEvents='none';
            //idPrev.current.style.disabled='true';
        }
        
        
    }
    
  return (
    <>
    {/* <Slides slides={props.slides}/> */}
     <h1 data-testid="title">{props.slides[slideIndex].title}</h1>
     <p data-testid="text">{props.slides[slideIndex].text}</p>
     <button data-testid="button-prev" onClick={prev} ref={idPrev} > Prev</button>
     <button data-testid="button-restart" ref={idRestart} onClick={restart} >Restart</button>
     <button   data-testid="button-next" ref={idNext}  onClick={next}>Next</button>

    </>
  )
}


export default App;
