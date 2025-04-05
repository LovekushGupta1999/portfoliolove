import React from 'react'
import './About.css'
import Card from '../Card/Card.jsx'
import python from '../../assets/images/python.png'
import java from '../../assets/images/java.png'
import dsa from '../../assets/images/dsa.png'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {
      useGSAP(()=>{
    gsap.from(".circle",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
            trigger:".circle",
            scroll:"body",
            scrub:2,
         
            start:"top 60%",
            end:"top 30%"
        }
    })
        gsap.from(".line",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".line",
                scroll:"body",
                scrub:2,
               
                start:"top 60%",
                end:"top 30%"
            }
    
    })
    gsap.from(".aboutdetails h1",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
            trigger:".aboutdetails h1",
            scroll:"body",
            scrub:2,
           
            start:"top 60%",
            end:"top 30%"
        }

})
gsap.from(".aboutdetails ul",{
    y:100,
    duration:1.5,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
       
        start:"top 60%",
        end:"top 30%"
    }

})
gsap.from(".rightabout",{
    x:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
       
        start:"top 60%",
        end:"top 30%"
    }

})
   
})
    return (
        <div className='about'>
            <div className="leftabout">
              <div className="circle-line">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
              </div>
              <div className="aboutdetails">
                <div className="personaldetails">
                    <h1>PERSONAL INFO</h1>
                    <ul>
                        <li><span>NAME</span> : LOVEKUSH GUPTA</li>
                        <li><span>AGE</span> : 25</li>
                        <li><span>GENDER</span> : MALE</li>
                        <li><span>LANGUAGE</span> : HINDI, ENGLISH</li>
                    </ul>
                </div>
                <div className="Educationdetails">
                    <h1>EDUCATION</h1>
                    <ul>
                        <li><span>DEGREE</span> : MASTER OF SCIENCE</li>
                        <li><span>BRANCH</span> : COMPUTER SCIENCE</li>
                        <li><span>CGPA</span> : 8.0</li>
                    </ul>
                </div>
                <div className="skilldetails">
                    <h1>SKILLS</h1>
                    <ul>
                        <li><span>FRONTEND</span> : HTML, CSS, JAVASCRIPT</li>
                        <li><span>BACKEND</span> : PYTHON, DJANGO</li>
                        <li><span>LANGUAGE</span>: C, C++, PYTHON, JAVA</li>
                        <li><span>TECHNOLOGIES & FRAMEWORK</span> : GITHUB, GIT, REACT JS, REDUX</li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="rightabout">
             <Card title="PYTHON STACK DEVELOPER" image={python}/>
             <Card title="java" image={java}/>
             <Card title="DSA" image={dsa}/>
            </div>
        </div>
    )
}

export default About
