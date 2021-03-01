import React, { useEffect, useRef, useState } from "react";
import resume from "../../Assets/mattBaberResume.pdf";

import "./style.css";



function Contactsmobile() {
  // const { contactsView } = useContext(ContactContext);
  // const { handleContactBtn} = useContext(ContactContext);
  const [contactsView, setContactsView] = useState("hidden")
  const [copiedView, setCopiedView] = useState("collapse")

  function handleContactBtn(event) {
    if (contactsView === "hidden") {
      setContactsView("showing");
    } else {
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
    <div className={`nav contactMeMobile ${contactsView} `}>
      <div className="row d-flex  justify-content-center">
        <div className="col-lg-12 d-flex justify-content-center align-items-center " id="navStyleTop">

          <img className="pt-2" onClick={handleContactBtn} src="https://img.icons8.com/plasticine/50/000000/email-sign.png" />
        </div>
        <div className="col-lg-12 d-flex pt-3 px-5 justify-content-between" id="navStyleBottom">

          <div className="text-center contactDivMobile d-flex flex-column align-items-center">
            <h6>Email Me</h6>
            <p id="emailMobile" onClick={copyEmail} className="p-1 border border-dark rounded">mbaber114@gmail.com</p>
            <p id="copiedMobile" className={"border border-dark rounded " + copiedView}>copied to clipboard!</p>
          </div>


          <div className="nav text-center">
            <a href="https://www.instagram.com/psst.itsacoup/"><img alt="instagram icon" src="https://img.icons8.com/fluent/48/000000/instagram-new.png" /></a>
            <a href="https://www.linkedin.com/in/matt-baber-68b9711b3/"><img alt="linkedin icon" src="https://img.icons8.com/fluent/48/000000/linkedin.png" /></a>
            <a href="https://github.com/baberMatt"><img alt="github icon" src="https://img.icons8.com/fluent/48/000000/github.png" /></a>
          </div>

          <div className="text-center d-flex contactDivMobile">
            <div className="d-flex">
              <div className="d-flex flex-column">
                <p className="p-0" style={{ fontSize: "9px" }} >R</p>
                <p className="p-0 resume" >e</p>
                <p className="p-0 resume" >s</p>
                <p className="p-0 resume" >u</p>
                <p className="p-0 resume" >m</p>
                <p className="p-0 resume" >e</p>
              </div>
              <a href={resume} type="application/pdf" target="_blank"><img alt="pdf icon" src="https://img.icons8.com/officel/48/000000/pdf.png" /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contactsmobile;