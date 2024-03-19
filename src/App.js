import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode,setMode]=useState("light");
  const [alert, setAlert] = useState(null)
  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="#c7cdd3";
      // showAlert("dark mode","success")
    }else{
      setMode("dark")
      document.body.style.backgroundColor="#020d17";
    }
  }
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
}
  return (
    <>
    <Navbar naam="TextUtils" mode={mode} toggleMode= {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm head="Enter text to analyze" bt1="Convert to UpperCase" bt2="Convert to LowerCase" bt3="Capitalize Each Word" mode={mode} salert={showAlert}/>
    </div>
    </>
  );
}

export default App;
