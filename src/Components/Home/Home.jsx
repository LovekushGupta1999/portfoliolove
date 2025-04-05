import React from 'react'
import './Home.css'
import TypingEffect from 'react-typed.ts'
import man from '../../assets/images/lovepng.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

function Home() {
     useGSAP(()=>{
            let tl1= gsap.timeline()
            tl1.from(".line1",{
                y:80,
                duration:1,
                opacity:0
            })
            tl1.from(".line2",{
                y:80,
                duration:1,
                opacity:0
            })
            tl1.from(".line3",{
                y:80,
                duration:1,
                opacity:0
            })
            tl1.from(".circle_div",{
                x:-200,
                duration:1,
                opacity:0
            })
            gsap.from(".righthome .imgsection",{
                x:200,
                duration:1,
                opacity:0
            })
        })
    return (
        <div className='home'>
            <div className='lefthome'>
                <div className="homedetails">
                    <div className="line1">I'M</div>
                    <div className="line2">Lovekush Gupta</div>
                    <div className="line3">
                        <TypingEffect
                        strings={["WEB DEVELOPER","SOFTWARE DEVELOPER"]}
                        typeSpeed={100}
                        backSpeed={40}
                        loop={true}
                        cursor='|'
                        /> 
                    </div>
                    <button >HIRE ME </button>
                    <div className="circle_div">
                    <div className="circleO"><GitHubIcon/> </div>
                    <div className="circleO"><LinkedInIcon/></div>
                    <div className="circleO"><InstagramIcon/></div>
                    
                   </div>
                </div>
            </div>
            <div className='righthome'>
                <div className='imgsection'>
                <img src={man} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
