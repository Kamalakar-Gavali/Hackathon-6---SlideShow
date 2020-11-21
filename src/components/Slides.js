import React, {Component, useEffect, useState} from "react";
import App from'./App';


const Slides=(props)=>{

    const [slideIndex,setSildeIndex]=useState(0);
    const [slideSize,setSlideSize]=useState(props.slides.length)
    const idNext=React.createRef();
    const idPrev=React.createRef();
    const idRestart=React.createRef();


    const next=()=>{
        console.log("In Next Function");
        setSildeIndex(slideIndex+1);
        /*if(slideIndex==slideSize-1)
        {
            idNext.current.style.pointerEvents='none';
            //idNext.current.style.pointerEvents='none';
        }
        else
        {
         //   idNext.current.style.pointerEvents='auto';
           idNext.current.style.pointerEvents='auto';
            setSildeIndex(slideIndex+1);
        }*/
        
    }
    const restart=()=>{
        console.log("In Restart Function");
        if(slideIndex!=0)
        {
        setSildeIndex(0);
        }
        /*if(slideIndex!=0)
        {
          idNext.current.style.pointerEvents='auto';
         setSildeIndex(0);
        }
        else
        {
            idNext.current.style.pointerEvents='none';
        }*/
        
    }
    const prev=()=>{
        console.log("In Prev Function");
        //setSildeIndex(slideIndex-1);
        if(slideIndex!=0)
        {
            //idPrev.current.style.pointerEvents='auto';
            setSildeIndex(slideIndex-1);
            //idPrev.current.style.pointerEvents='none';
            //idPrev.current.style.disabled='true';
        }
        /*else
        {
            idPrev.current.style.pointerEvents='none';
        }*/
        
    }
    useEffect(()=>{
        if(slideIndex==0)
        {
            //idPrev.current.style.pointerEvents='none';
            idPrev.current.style.pointerEvents='none';
            idRestart.current.style.pointerEvents='none';;
        }
        if(slideIndex==slideSize-1)
        {
            idNext.current.style.pointerEvents='none';
            //idNext.current.style.pointerEvents='none';
        }
        else{
            idNext.current.style.pointerEvents='auto';
        }
        if(slideIndex>0)
        {
            idRestart.current.style.pointerEvents='auto';
            
            idPrev.current.style.pointerEvents='auto';
        }
        else
        {

            idRestart.current.style.pointerEvents='none';
            idPrev.current.style.pointerEvents='none';
        }
        return ()=>"";

    },[slideIndex])
    return(
        <>
     <h1 data-testid="title">{props.slides[slideIndex].title}</h1>
     <p data-testid="text">{props.slides[slideIndex].text}</p>
     <button data-testid="button-prev" onClick={prev} ref={idPrev} style={{pointerEvents:"none"}}> Prev</button>
     <button data-testid="button-restart" ref={idRestart} onClick={restart} style={{pointerEvents:"none"}}>Restart</button>
     <button data-testid="button-next" ref={idNext} onClick={next}>Next</button>
     
     </>
    )
}


export default Slides;