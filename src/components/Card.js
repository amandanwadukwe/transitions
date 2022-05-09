import * as React from "react"
import { useRef, useEffect, useMemo} from "react";
import { findDOMNode } from "react-dom";
import "../app.scss";

import "../app.css";


const Card = () => {
    const card = useRef(null);

    const callbackFunction = entries => {
        const [entry] = entries;
        console.log("Target classlist", entry.target.classList)
        entry.target.classList.toggle("invert");
    }

    const options = useMemo(() => {
        return{
            root:null,
            rootMargin:"0px",
            threshold:0
        }
    }, []);
    useEffect(()=> {
        const observer = new IntersectionObserver(callbackFunction, options);
        const currentCard = card.current;
        if(currentCard) observer.observe(currentCard);

        // return () => {
        //     if(currentCard) observer.un
        // }
        console.log(card.current)
    }, [card, options])
   
        return (
            <div style={{ width: "14vw", height: "19vw", borderRadius: "20px", backgroundColor: "#72f0ec", margin: "8vw 6vw" }} id="card" className="card" ref={card}></div>
        )
    }
  export default Card