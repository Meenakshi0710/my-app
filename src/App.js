
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";







function App() {

  const [mode, setMode] = useState("light");
  const [switchText, setSwitchText] = useState("Enable dark mode");
  const [alert, setAlert] = useState("null");

  const showAlert=(message,type)=>{
    setAlert({ msg : message,
    type : type});
    setTimeout(() => {
      setAlert(null)
    },1500);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      setSwitchText("Enable light mode");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode enabled","success");
    } else {
      setMode("light");
      setSwitchText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled","success");
    }
  }
  return (
    <>

    <Router>
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} switchText = {switchText}/>
    <Alert alert = {alert}/>
    <div className = "container my-3">
    
    <Routes>
    
    <Route exact path="about" element={<About />} />
    <Route exact path="/" element={<TextForm heading = "Enter your text below to analyze" mode = {mode} showAlert = {showAlert}/>  } />
    
          
        </Routes>
    
    
    
    
    
    </div>

    <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>>
            
          </ul>
        </div>
    </Router>

    </>
  );
}

export default App;
