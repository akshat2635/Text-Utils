import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href='\'>{props.naam}</a>
        <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
        <label className="form-check-label " for="flexSwitchCheckDefault" >Enable {props.mode[0].toUpperCase()+props.mode.substr(1)==="Light"?"Dark":"Light"} Mode</label>
        </div>
      </div>
    </nav>
    
    </>
  )
}
