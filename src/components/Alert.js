import React from 'react'

function Alert(props) {
  return (
    
    <div className={`alert alert-${props.alert?props.alert.type:''}`} role="alert">
    {props.alert?props.alert.msg:" "}
    </div>
  )
}

export default Alert
