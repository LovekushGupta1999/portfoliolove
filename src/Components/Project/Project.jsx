import React from 'react'
import './Project.css'
import Card from '../Card/Card.jsx'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Project() {
        useGSAP(()=>{
        gsap.from(".project",{
            y:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".project",
                scroll:"body", 
                scrub:2,
                start:"top 60%",
                end:"top 30%"
            }
        })
    })
    return (
        <div className="project">
            <h1>PROJECTS</h1>
            <div className='projectcard'><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/></div>
        </div>
    )
}

export default Project
