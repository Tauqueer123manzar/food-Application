import React from 'react';
import { useEffect,useState,useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import { TRUE } from 'sass-embedded';
const Particlesbackground = () => {
 const[isLoaded,setIsLoaded]=useState(false);
 
 useEffect(()=>{
    initParticlesEngine(async (engine)=>{
       await loadSlim(engine);
    }).then(()=>{
        setIsLoaded(true);
    })
 },[]);

 // Memoize particle configuartion options for better performance
 const particlesOptions = useMemo(() => ({
    background:{
       color:{value:"#0d47a1"},
    },
    fpsLimit:120,
    interactivity:{
        events:{
           onClick:{enable:true,mode:"push"},
           onHover:{enable:true,mode:"repulse"},
        },
        modes:{
           push:{quantity:5},
           repulse:{distance:200,duration:0.4},
        },
    },
    particles:{
       color:{value:"#ffffff"},
       links:{
           color:"#ffffff",
           distance:150,
           enable:true,
           opacity:0.5,
           width:1,      
       },
       move:{
           enable:true,
           speed:6,
           direction:"none",
           random:true,
           straight:false,
           outModes:{default:"bounce"},
       },
       number:{value:80,density:{enable:true,area:800}},
       opacity:{value:{min:0.5,max:0.9}},
       shape:{type:"circle"},
       size:{value:{min:1,max:5}},
    },
    detectRetina:TRUE
}),[]);
  return isLoaded?(
    <Particles
    id="tsparticles"
    options={particlesOptions}
    />
  ):null;
};

export default Particlesbackground
