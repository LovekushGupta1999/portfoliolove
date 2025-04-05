import React from 'react'
import './Achievement.css'
import Card from '../Card/Card.jsx'


function Achievement() {
    return (
        <div className="achievement">
            <h1>Achievements & Rewards</h1>
            <div className='slider'><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/></div>
        </div>
    )
}

export default Achievement
