import React, {useState,Suspense,useEffect} from 'react'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Spline from "@splinetool/react-spline";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
gsap.registerPlugin(ScrollTrigger);
function Landing({className}) {
  const [model, setmodel] = useState(false)
  useEffect(() => {
    setTimeout(()=>{setmodel(true)}, 2000)
  }, [])
  
    useGSAP(()=>{
      gsap.timeline().to("#front",{
        scale:1.5,
        z:350,
        duration: 4,
        transformOrigin: "center center",
      ease: "power1.inOut",
      scrollTrigger:{
        trigger:"#front",
        start: "top -1%",
        end:"top -5%",
        pin: true,
        scrub: 0.5,
        // markers: true
      }
      })
      .to("#bg",{
        // scale: 1.2,
        transformOrigin: "center center",
        // onComplete:()=>setmodel(true),
        ease: "power1.inOut",
        scrollTrigger:{
          trigger:"#front",
          start: "top -1%",
          end:"top -5%",
          pin: true,
          scrub: true,
          // markers: true
        }
      })
      .to("#frontImage",{
        // scale:0,
        // opacity: 0,
        display:"none",
        // onComplete:()=>setmodel(true),
        scrollTrigger:{
          trigger:"#front",
          start: "top -1%",
          end:"top -5%",
          pin: true,
          scrub: true,
          // markers: true
        }
      })
      // .from("#launch",{
      //   y: 200,
      //   opacity: 0,
      //   duration: 0.5,
      //   delay: 0.8,
      //   scrollTrigger:{
      //     trigger:"#front",
      //     start: "top -1%",
      //     end:"top -5%",
      //     pin: true,
      //     scrub: 3,
      //     // markers: true
      //   }
      // })
    })
    
    // const handleClick=()=>{
    //   gsap.to("#launch",{
    //     y: -200,
    //     opacity: 0,
    //     duration: 0.5
    //   })
    // }
  return (
    <div className={className} style={{ width: "100%" , overflow:"hidden"}}>
      
        {/* <img src="https://app.gemoo.com/share/image-annotation/683522250515750912?codeId=v6BO6EBXAlEQy&origin=imageurlgenerator&card=683522247906893824" alt="image" /> */}
        <img id="bg" src="./background.png" alt="" style={{position:"fixed",width:"100%",height:"100vh", overflow:"hidden"}}/>
        {/* <div style={{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",width:"100vw",height:"100vh"}}>
        <button id="launch" style={{borderRadius:"7px", zIndex:"1",marginTop:"40vh",width:"6opx",height:"40px"}} onClick={handleClick}>Let&#39;s Go</button>
        </div> */}
        <Suspense fallback={<dic></dic>}>
        {model && <Spline scene='https://prod.spline.design/6Re8UFR1WXy53RFH/scene.splinecode' style={{width:"100%", height: "100vh", position:"fixed"}}/>}
        </Suspense>
        <div id="frontImage">
        <img id="front" src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp" alt="image" style={{position:"absolute",width:"100%",height:"100vh", zIndex:"1"}}/>
        </div>
        
    </div>
  )
}

export default Landing