import React from 'react'
import './styles/backButton.css'

const BackNavButton = ({icon, onClick}) => {

  return (
    <button 
        onClick={onClick}
        className="backButton"
    >{icon}</button>
  )
}

export default BackNavButton;