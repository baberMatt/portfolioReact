import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import resume from "../../Assets/mattBaberResume.pdf";

import "./style.css";



function Contacts() {
    // const { contactsView } = useContext(ContactContext);
    // const { handleContactBtn} = useContext(ContactContext);
  const [contactsView, setContactsView] = useState("hidden")
  const [copiedView, setCopiedView] = useState("collapse")

  function handleContactBtn(event) {
    if ( contactsView === "hidden") {
      setContactsView("showing");
    }else{
      setContactsView("hidden")
    }
  }

  // const copyTextRef = useRef();
  // useEffect(() => {
  //   const copyText = copyTextRef.current.firstChild.data;

  //   copyTextRef.current.select();
  //   document.execCommand("copy");
  // }) 

 
  function copyEmail() {
    const el = document.createElement('textarea');
    el.value = "mbaber1142@gmail.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopiedView("");
    setTimeout(function () { setCopiedView('collapse'); }, 750);
  }

  return (
    <div className={`nav contactMe ${contactsView} `}>
            <div className="row justify-content-center">
              <div className="col-lg-2 d-flex justify-content-center align-items-center " id="navStyleLeft">

                  <img onClick={handleContactBtn} src="https://img.icons8.com/plasticine/50/000000/email-sign.png" />
              </div>
              <div className="col-lg-6 d-flex py-5 flex-column justify-content-between align-items-center" id="navStyleRight">

                  <div className="text-center contactDiv d-flex flex-column align-items-center">
                      <h6>Email Me</h6>
                      <p id="email" onClick={copyEmail} className="p-1 border border-dark rounded">mbaber114@gmail.com</p>
                      <p id="copied"  className={"border border-dark rounded " + copiedView}>copied to clipboard!</p>
                  </div>

        
                    <ul className="nav flex-column text-center">
                        <li className="nav-item my-2">
                            <a href="https://www.instagram.com/psst.itsacoup/"><img alt="instagram icon" src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
                        </li>
                        <li className="nav-item my-2">
                            <a href="https://www.linkedin.com/in/matt-baber-68b9711b3/"><img alt="linkedin icon" src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
                        </li>
                        <li className="nav-item my-2">
                            <a href="https://github.com/baberMatt"><img alt="github icon" src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
                        </li>
                    </ul>

                    <div className="text-center contactDiv">
                        <h6>My Resume</h6>
                        <a href={resume} type="application/pdf" target="_blank"><img alt="pdf icon" src="https://img.icons8.com/officel/80/000000/pdf.png"/></a>
                    </div>

                </div>
            </div>
        </div>
  );
}

export default Contacts;