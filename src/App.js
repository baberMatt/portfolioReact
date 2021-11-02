import React, { useEffect, useState } from "react";
import Portfolio from "./pages/Portfolio.js"
import Contacts from "./Components/Contacts/Contacts.js"
import Contactsmobile from "./Components/Contactsmobile/Contactsmobile.js"
import Video from "./Assets/jumboLoopBG.mp4"


function App() {
  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const [quoteNumber, setQuoteNumber] = useState(0) 
  const quotes = [
    [`"Have no fear of perfection`, `  ... you'll never reach it."`], 
    [`"If you touch one thing `, `with deep awareness, you touch everything"`],
    [`"Only those who attempt `, `the absurd will achieve the impossible."`],
    [`"Many of the truths we cling to`, `depend greatly on our own point of view."`],
  ]

  const updateWindowsSize = () => {
    setwindowSize(window.innerWidth)
  }

  useEffect(() => {
    console.log(windowSize)
    window.addEventListener("resize", updateWindowsSize);

    return () => window.removeEventListener("resize", updateWindowsSize);
  },[]);

  useEffect(() => {
    setQuoteNumber(Math.floor(Math.random() * 4))
  },[]);

  return (
        
        <div className="d-flex m-0 p-0 container-fluid">
          <video autoPlay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
          </video>
        <div id="header">
            <div class="break "></div>
            <h4 id="headerText"class="mt-5 ml-2"> {quotes[quoteNumber][0]} </h4>
            <h4 id="headerText"class=" ml-5"> {quotes[quoteNumber][1]} </h4>
        </div> 
          {windowSize>1199 ? <Contacts /> : <Contactsmobile />}
          <Portfolio 
          windowSize={windowSize}
          />
        </div>
   
  );
}

export default App;
