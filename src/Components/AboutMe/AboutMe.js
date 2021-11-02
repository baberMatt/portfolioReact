import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Portrait from "../../Assets/portrait.png"
import "./style.css";


function useFadeIn(fire) {
  let duration = 1500;
  const [opacity, setOpacity] = useState(0);
  const [filter, setFilter] = useState(0);




  useEffect(() => {
    console.log("effect called")
    const start = 1500;
    let check = 1600;
    let queuedFrame
    const frameIn = function () {
      const now = check - start;
      check += 35;
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

  // const reset = () => setTime(Date.now());
  const filterVal = `blur(${filter}em)`
  return [opacity, filterVal]
}

function AboutMe(props) {
  const aboutMeRef = useRef();

  useEffect(() => {
    if (props.getRect) {
      props.setAboutMeRect(props.getRect(aboutMeRef));

    }
  }, [])


  const [opacity, filterVal] = useFadeIn(props.showing)

  return (
    <div ref={aboutMeRef} className={"aboutMe " + (!props.showing ? "" : "")}>
      <Row className="rowCustom">
        {props.windowSize > 1199 ? <Col md={12} >
          <div id="parent" >
            <div id="mask" className="d-flex align-items-center" style={{ opacity: opacity, filter: filterVal }}>
              <div id="aboutMeContent" className="pl-4 mt-3 border-left d-flex flex-column justify-content-center">
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
        </Col> :
          <div id="parentMobile" >
            <h1 className="text-center border-bottom mb-5 pb-3">about me</h1>
            <div id="mask" className="" style={{ opacity: opacity, filter: filterVal }}>
              <div id="aboutMeContent" className="pl-4 mt-3">
                <Row className="d-flex h-auto justify-content-around">
                  <Col xs={12} sm={5} className="p-5">
                    <h2 className="">Hello, I'm Matt Baber</h2>
                    <h2>I am a Full Stack Web Developer</h2>
                    <hr id="hr" />
                    <h4>A little bit about me...</h4>
                    <p>I am 33 years old. I live in Euclid, Ohio with
                      my wife Emily, and our daughter Dottie and our dog and cat, Rudy and Snacky. My whole adult life I
                      have worked as a Chef, and have made the decision to leave that career path and learn how to
                      program.</p>
                  </Col>
                  <Col xs={12} sm={5} className="d-flex justify-content-center">
                    <img className="img-fluid h-75" src={Portrait} alt="my portrait"></img>
                  </Col>
                </Row>
              </div>
            </div>
          </div>}
      </Row>
    </div>
  );
}

export default AboutMe;