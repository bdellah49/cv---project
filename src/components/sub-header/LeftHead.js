import React from 'react'
import logo from './logos/logo.png'
import "../styles/header.css"
function LeftHead() {
  return (
    <div className="left-head">
          <img className="logo" src={logo} alt="cv-builder-logo" />
          <div className="logo-name">CV Builder pro</div>
        </div>
  )
}

export default LeftHead