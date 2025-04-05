import React, {useRef} from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function Navbar() {
    let mobile=useRef()
    let menu=useRef()

    useGSAP(()=>{
        let t1= gsap.timeline()
        t1.from("nav h1",{
            y:-100,
            duration:0.5,
            opacity:0
        })
        t1.from("nav ul li",{
            y:-100,
            duration:0.5,
            opacity:0,
            stagger:0.2
        })
        // t1.from("nav ul .down",{
        //     y:100,
        //     duration:0.1,
        //     opacity:0
         
        // })
    })
    return (
        <nav>
            <h1>PORFOLIO</h1>
            <ul className='desktopmenu'>
               <Link to='home' smooth={true} activeClass='active' spy={true} duration={500}> <li>Home</li></Link>  
               <Link to='about' smooth={true} activeClass='active' spy={true} duration={500}> <li>About</li></Link>  
               <Link to='project' smooth={true} activeClass='active' spy={true} duration={500}> <li>Project</li></Link>
               <Link to='contact' smooth={true} activeClass='active' spy={true} duration={500}> <li>Contact</li></Link>
               <button className='down'>DOWNLOAD</button>
            </ul>
            <div className='hamburger' ref={menu} onClick={()=>{
                mobile.current.classList.toggle("activemobile")
                menu.current.classList.toggle("activeham")
            }}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            <ul className='mobilemenu' ref={mobile}>
               <Link to='home' smooth={true} activeClass='active' spy={true} duration={500}> <li>Home</li></Link>  
               <Link to='about' smooth={true} activeClass='active' spy={true} duration={500}> <li>About</li></Link>  
               <Link to='project' smooth={true} activeClass='active' spy={true} duration={500}> <li>Project</li></Link>
               <Link to='contact' smooth={true} activeClass='active' spy={true} duration={500}> <li>Contact</li></Link>
               <Link to='#' smooth={true} activeClass='active' spy={true} duration={500}> <li>DOWNLOAD</li></Link>
            </ul>
        </nav>
        
    )
}

export default Navbar
