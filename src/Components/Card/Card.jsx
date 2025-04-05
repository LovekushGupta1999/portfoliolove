import React from 'react'
import './card.css'
// import image from '../../assets/images/dsa.png'

function Card({title,image}) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <div className="hovercard">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Card
