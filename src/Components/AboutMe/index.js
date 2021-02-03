import React, { useState, useEffect } from "react";
import { Row, Col, } from "../Grid";
import Portrait from "../../Assets/portrait.png"
import "./style.css";
import { defaultTheme } from "react-select";



function useFadeIn(fire) {
  let duration = 1500;
  const [opacity, setOpacity] = useState(0);
  const [filter, setFilter] = useState(0);
  const [time, setTime] = useState(Date.now());


  useEffect(() => {
    console.log("effect called")
    setTime(Date.now())
    let queuedFrame
    const frameIn = function () {
      const now = Date.now() - time;
      if (now < duration) {
        queuedFrame = requestAnimationFrame(frameIn)
      }

      switch (fire) {
        case "showing":
          setOpacity(Math.min(1, (now / duration)))
          setFilter(Math.min(1, (duration / now) - 1))
          break;
        case "hidden":
          setOpacity(0)
          setFilter(0)
          break;
        default:
          break;
      }
      
    }
      frameIn();
    
    return () => cancelAnimationFrame(queuedFrame)
  }, [fire]);

  const reset = () => setTime(Date.now());
  const filterVal = `blur(${filter}em)`
  return [opacity, filterVal, reset]
}

  function AboutMe(props) {

    const [opacity, filterVal, reset] = useFadeIn(props.showing)

   
    return (
      <div className={"aboutMe " + (!props.showing ? "" : "")}>
        <Row custom>
          <Col size="md-12" custom>
            <div id="parent">
              <div id="mask" style={{ opacity: opacity, filter: filterVal }}>
                <div id="aboutMeContent" className="pl-4 mt-3 border-left d-flex flex-column  justify-content-center">
                  <h2 className="mt-3">Hello, I'm Matt Baber</h2>
                  <h2>I am a Full Stack Web Developer</h2>
                  <hr id="hr" />
                  <h6>A little bit about me...</h6>
                  <p>I am 33 years old. I live in Euclid, Ohio with
                  my wife Emily, and our daughter Dottie and our dog and cat, Rudy and Snacky. My whole adult life I
                  have worked as a Chef, and have made the decision to leave that career path and learn how to
                          program.</p>
                  <img className="img-fluid mt-3" src={Portrait} alt="my portrait"></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  export default AboutMe;