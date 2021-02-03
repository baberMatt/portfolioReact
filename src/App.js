import React, { useEffect, useState } from "react";
import Portfolio from "./pages/Portfolio"
import Contacts from "./Components/Contacts"
import Video from "./Assets/jumboLoopBG.mp4"
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

function App() {
  // const [contactsView, setContactsView] = useState("hidden");

  // function handleContactBtn(event) {
  //   if ( contactsView === "hidden") {
  //     setContactsView("showing");
  //   }else{
  //     setContactsView("hidden")
  //   }

  // }


  return (
        
        <div className="d-flex container-fluid">
          <video autoPlay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
          </video>
        <div id="header">
            <h1 class="headerh1 text-center mt-5 ml-1 display-2 ">Welcome</h1>
            <div class="break "></div>
            <p id="headerText"class="ml-2"> Read about me, check out some of <br/>my projects,
                and feel free to contact me.</p>
        </div> 
          
          <Contacts />
          <Portfolio />
        </div>
   
  );
}

export default App;
