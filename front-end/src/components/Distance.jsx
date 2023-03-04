import React, { useState } from 'react'
import './styles/distance.css'

export default function Distance({leg}) {

    const [travelLeg, setTravelLeg] = useState(leg);
    console.log(travelLeg.distance.text)

    return (
        <div className='container'>
            <ul className='travelInfo'>
                <li><strong>Distance</strong>: {travelLeg.distance.text}</li>
                <li><strong>Duration</strong>: {travelLeg.duration.text}</li>
            </ul>
        </div>
    )
}
