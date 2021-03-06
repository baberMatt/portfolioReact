import React, { useEffect, useState } from "react";
import Portfolio from "./pages/Portfolio.js"
import Contacts from "./Components/Contacts/Contacts.js"
import Contactsmobile from "./Components/Contactsmobile/Contactsmobile.js"
import Video from "./Assets/jumboLoopBG.mp4"


function App() {
  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const updateWindowsSize = () => {
    setwindowSize(window.innerWidth)
  }

  useEffect(() => {
    console.log(windowSize)
    window.addEventListener("resize", updateWindowsSize);

    return () => window.removeEventListener("resize", updateWindowsSize);
  },[]);

  return (
        
        <div className="d-flex container-fluid">
          <video autoPlay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
          </video>
        <div id="header">
            
            <h1 class="headerh1  mt-5 ml-1">Welcome</h1>
            <div class="break "></div>
            <h4 id="headerText"class="ml-2"> Read about me, check out some of <br/>my projects,
                and feel free to contact me.</h4>
        </div> 
          {windowSize>1199 ? <Contacts /> : <Contactsmobile />}
          <Portfolio 
          windowSize={windowSize}
          />
        </div>
   
  );
}

export default App;
