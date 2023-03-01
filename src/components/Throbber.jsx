import React from 'react'

import throbber from '../images/throbber.svg'
import './styles/throbber.css'

const Throbber = () => {
  return (
    <div className='loadingContainer'>
        <img src={throbber}/>
    </div>
    
  )
}

export default Throbber
