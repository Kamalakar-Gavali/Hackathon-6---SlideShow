import React, {Component, useEffect, useState} from "react";
import App from'./App';


const Slides=(props)=>{

    const [slideIndex,setSildeIndex]=useState(0);
    const [slideSize,setSlideSize]=useState(props.slides.length)
    const idNext=React.createRef();
    const idPrev=React.createRef();
    const idRestart=React.createRef();


    const next=()=>{
        console.log(slideIndex);
        if(slideIndex==slideSize-1)
        {
            idNext.current.style.disabled='true';
            //idNext.current.style.pointerEvents='none';
        }
        else
        {
         //   idNext.current.style.pointerEvents='auto';
         idNext.current.style.enabled='true';
            setSildeIndex(slideIndex+1);
        }
    }
    const restart=()=>{
        
        if(slideIndex!=0)
        {
         setSildeIndex(0);
        }
        else{
            idNext.current.style.enabled='true';
        }
    }
    const prev=()=>{
        //console.log(slideIndex);
        if(slideIndex==0)
        {
            //idPrev.current.style.pointerEvents='none';
            idPrev.current.style.disabled='true';
        }
        else
        {
            //idPrev.current.style.pointerEvents='auto';
            idPrev.current.style.enabled='true';
            setSildeIndex(slideIndex-1);
        }
    }
    useEffect(()=>{
        if(slideIndex==0)
        {
            //idPrev.current.style.pointerEvents='none';
            idPrev.current.style.disabled='true';
        }
        if(slideIndex==slideSize-1)
        {
            idNext.current.style.disabled='true';
            //idNext.current.style.pointerEvents='none';
        }
        if(slideIndex>0)
        {
            idRestart.current.style.enabled="true"
        }
        else
        {
            idRestart.current.style.disabled="true"
        }

    },[slideIndex])
    return(
        <>
     <h1>{props.slides[slideIndex].title}</h1>
     <p>{props.slides[slideIndex].text}</p>
     <button id="Prev" onClick={prev} ref={idPrev} style={{disabled:true}}> Prev</button>
     <button id="Next" ref={idNext} onClick={next}>Next</button>
     <button id="Restart" ref={idRestart} onClick={restart} style={{disabled:true}}>Restart</button>
     </>
    )
}


export default Slides;