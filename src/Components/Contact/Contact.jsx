import React from 'react'
import './Contact.css'
import imga from '../../assets/images/backgroundimg.png'
import conimg from '../../assets/images/contact-img.svg'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {
    useGSAP(()=>{
        gsap.from(".leftcontact img",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".leftcontact img",
                scroll:"body",
                scrub:2,
                start:"top 60%",
                end:"top 40%"
            }
        })
        gsap.from(".form",{
            x:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".form",
                scroll:"body",
                scrub:2,
                start:"top 70%",
                end:"top 30%"
            }
        })
    })
    return (
        <div className="contact">
           
            <h1>CONTACT</h1>
            <div className='contactinput'>           
             <div className="leftcontact">
                <div className='imgsect'><img src={conimg} alt="" /></div>
            </div>
            <div className="rightcontact">
                <form className='form' action="https://formspree.io/f/xanepwzo" method='POST'>
                    <div className='inp-group'><label htmlFor="name1">Name :</label>
                    <input type="text" name="name" id="name1" /></div>
                    <div className='inp-group'><label htmlFor="email1">Email  :</label>
                    <input type="email" name="email" id="email1" /></div>
                    <div className='inp-group'>  <label htmlFor="message1">Message</label><br />
                    <textarea name="message" id='message1'></textarea>  </div>
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
        </div>

    )
}

export default Contact
