
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import React from "react";


// Routing from 1 page to another
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState(`light`) // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }


  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      // showAlert("Dark mode has been activated", "success")
      // document.title ="TextUtils- Dark Mode"
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // showAlert("Dark mode has been activated", "success")
      // document.title = "TextUtils"
    }
  }
  return (
    <>
      {/*********  STRUCTURE OF THE TEXTUTILS APP *************/}

      {/* NAVBAR */}
      {/* <Router> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />




        {/* TEXTBOX AREA */}
        <div className="container my-4">

        
          {/* <Routes>

            <Route exact path="/about" element= { <About />} /> */}
             
        
            {/* <Route exact path="/"  element = { }/> */
              <TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode}  />

            
          /* </Routes> */}

        </div >
      {/* </Router> */}



    </>

  );
}

export default App;








/**************** Syntax has changed react-router-dom  ************
 
 
 
NOTE: In v6 react-dom switch has been replaced with Routes and Route path 

 ------- Old Syntax  -----------

    import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

    <Switch>
        <Route path="/home" component={Home} />
    </Switch>



   ---------- New Syntax --------------

    import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

    <Routes>
        <Route path="/home" element={<Home/>} />
    </Routes>

*/