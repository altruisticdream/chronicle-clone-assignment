import React from "react";
import "./reveal.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Section1 = () =>{
    gsap.registerPlugin(ScrollTrigger);


    React.useEffect(()=>{
        let tl = gsap.timeline()
        tl.to(".spantxt",{
            scrollTrigger:{
                trigger:".section1",
                start:"top 200",
                scrub:true,
                
            },
            ease:null,
            color:"#fff",
            duration:1,
            stagger:{
                each:0.1,
                amount:2,
            }
            
        });
    },[])

    const message = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.";
    return (
    <div className="section1">
        <div className="wrap">
        <div className="textcontain">
            {
                    message.split(" ").map((word)=>(<span className="spantxt">{word}</span>))
                }
        </div>
        </div>
    </div>
    );
}

export default Section1;