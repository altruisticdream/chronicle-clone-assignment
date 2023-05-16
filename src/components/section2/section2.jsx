import React, { useState }  from "react";
import "./section2.css"
import first from "../../assets/first.gif";
import second from "../../assets/second.gif";
import third from "../../assets/third.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Section2 = () =>{
    const [progress,setProgress] = React.useState(0);
    // const [fordis,setFordis] = React.useState(false)
    // const [backdis,setBackdis] = React.useState(true)
    gsap.registerPlugin(ScrollTrigger);
    let cur = 0;
    let id = 0
    const forward = ()=>{
        const fbut = document.querySelector(".forward");
        const bbut = document.querySelector(".back");
        if (id < 2){
            if(id == 0){
                bbut.classList.toggle("disabled");
                bbut.classList.toggle("active");
            }
            const elementLenght = document.querySelector(".firsts2img").offsetWidth;
            cur += elementLenght;
            id += 1;
            document.querySelector(".s2imageswarp").style.transform = `translateX(${-cur}px)`;
            if(id == 2){
                fbut.classList.toggle("disabled");
                fbut.classList.toggle("active");
            }
        }

    }

    const back = ()=>{
        const fbut = document.querySelector(".forward");
        const bbut = document.querySelector(".back");
        if(id >0){
            if(id == 2){
                fbut.classList.toggle("disabled");
                fbut.classList.toggle("active");
            }
            const elementLenght = document.querySelector(".firsts2img").offsetWidth;
            cur -= elementLenght;
            id -= 1;
            document.querySelector(".s2imageswarp").style.transform = `translateX(${-cur}px)`
            console.log(elementLenght,cur,`translateX(${cur})`,id)
            if(id == 0){
                bbut.classList.toggle("disabled");
                bbut.classList.toggle("active");
            }
        }



    }
    


    React.useEffect(()=>{

        if(window.screen.width > 640){
            let tl = gsap.timeline({
                scrollTrigger: {
                  start:"top top",
                  trigger: ".section2",
        
                  scrub: 1,
                },
                onUpdate:()=>{setProgress(()=>tl.progress())}
                });
            tl.to(".firsts2img",{ opacity:0,scale:0.3,y : "+=300",duration:1.5,delay:1 },"first")  
              .to(".seconds2img",{opacity:1,scale:1,duration:1.5,delay:0.7,},"first")
              .to(".seconds2img",{opacity:1,scale:1,duration:1})
              .to(".seconds2img",{opacity:0,scale:0.3,y : "+=200",duration:1.5,},"second")
              .to(".thirds2img",{opacity:1,scale:1,duration:1.5,delay:0.7,},"second")
              .to(".thirds2img",{opacity:1,scale:1,duration:1})

        }
        
        

    },[])

    return (
        <div className="section2">
            <div className="wraps2">
            <div className="section2Container">
                <div className="s2text">
                    <div >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[3px]"><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#A594FD"></path></svg>
                        <h2>Workflow</h2>
                    </div>
                    <h2>Create at the speed of thought.</h2>
                    <p>Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</p>
                </div>
                <div className="imgs2">
                    <div className="s2images">
                        <div className="s2imageswarp">

                        
                            

                            <div className="imgcontainer firsts2img">
                                <div>
                                    <img  src={first}></img>
                                </div>
                                <h2>A keyboard first experience.</h2>
                                <p>Powerful shortcuts and a keyboard-first workflow means you will get to your finish linein no time!</p>
                            </div>

                            <div className="imgcontainer seconds2img">
                                <div><img src={second}></img></div>
                                <h2>Bullets to visuals in click.</h2>
                                <p>Transform any blocks to any other and try different options without any design hassle</p>
                            </div>
                            
                            
                            <div className="imgcontainer thirds2img">
                                <div><img  src={third}></img></div>
                                <h2>A powerful assistant just a click away.</h2>
                                <p>insert blocks,perform powerful actions and leverage the limitless power of Ai - all without leaving your keyboard</p>
                            </div>
                            
                        
                        </div>
                    </div>
                    <div className="s2scrollindicator">
                            <h2>01</h2>
                            <div className="s2indicatorhollow">
                                <div style={{height:((progress*100)+14)+"%"}} className="s2indicator"></div>
                            </div>
                            <h2>03</h2>
                    </div>

                    <div className="slidebuttons">
                        <button onClick={back} className="disabled back but" >
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7839 13.0898C11.7263 10.8726 13.0745 9.27999 14.4164 8.15476L0.000399147 8.15476L0.000399349 5.84475L14.4164 5.84475C13.0745 4.71952 11.7263 3.12687 10.7839 0.909713L12.8896 -0.000244683C14.5478 3.90108 17.7442 5.39197 19.0913 5.84475L19.0913 8.15476C17.7442 8.60754 14.5478 10.0984 12.8896 13.9998L10.7839 13.0898Z" fill="black"></path></svg>
                        </button>
                        <button onClick={ forward} className="active forward but">
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7839 13.0898C11.7263 10.8726 13.0745 9.27999 14.4164 8.15476L0.000399147 8.15476L0.000399349 5.84475L14.4164 5.84475C13.0745 4.71952 11.7263 3.12687 10.7839 0.909713L12.8896 -0.000244683C14.5478 3.90108 17.7442 5.39197 19.0913 5.84475L19.0913 8.15476C17.7442 8.60754 14.5478 10.0984 12.8896 13.9998L10.7839 13.0898Z" fill="black"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>

    );
}


export default Section2;