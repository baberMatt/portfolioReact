import React, { useState, useEffect, useRef, } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Canvas from "../Canvas"
import Streamline from "../../Assets/streamLine.png"
import Botw from "../../Assets/baberOfTheWoods.png"
import Loaded from "../../Assets/loaded.png"
import Turnup from "../../Assets/turnup.png"
import Twochefs from "../../Assets/2chefs.png"
import "./style.css";

function Projects(props) {
    const [collapsed, setCollapsed] = useState(" collapse")
    const repoIcon = <img className="github img-fluid" src="https://img.icons8.com/ios-glyphs/18/000000/merge-git.png"/>;
    const webIcon = <img src="https://img.icons8.com/carbon-copy/40/000000/domain.png"/>;
    const [showCanvas, setShowCanvas] = useState(false)

    const loadedLink = "https://loadedtruckingapp.herokuapp.com/";
    const loadedRepo = "https://github.com/baberMatt/loaded";
    const streamLineLink = "https://babermatt.github.io/StreamerSearch/";
    const streamLineRepo = "https://github.com/baberMatt/StreamerSearch";
    const turnupLink = "https://turnuppopups.herokuapp.com/";
    const turnupRepo = "https://github.com/baberMatt/Turnup";
    const botwLink = "https://babermatt.github.io/BaberOfTheWoods/";
    const botwRepo = "https://github.com/baberMatt/BaberOfTheWoods";
    const twoChefsLink = "https://2chefsandabeat.com"
    
    
    function checkShowing() {
        if (props.showing == "projectsShowing") {
            setTimeout(function () { setCollapsed(""); }, 1025);
            setTimeout(() => {
                setShowCanvas(false)
            }, 1900);
            
        }
        else {
           setCollapsed(" collapse");
           setShowCanvas(false)
        } 
    }

    
     

    useEffect(() => {
        checkShowing(); 
      }, [props.showing]);

    
      
    return (
        <div className={"set" + collapsed} id={props.windowSize<1199 ? "projectsMobile" :"projects"}>
            {showCanvas ? <Canvas 
            height={props.height}
            width={props.width}
            /> : "" }
            <Row className="">
                <Col xs={12} lg={6}>
                    <Row>
                        <Col md={12} className={"d-flex colCustom " + (props.windowSize<1199 ? "justify-content-center" : "")}>
                            <img className="img-fluid projImg projShadow" src={Turnup} />
                            <div className="projDescription projShadow text-right">
                                <h3>Turnup</h3>
                                <p>An platform for Pop Up events. Host and guests a like can browse events, flag attendance and even purchase offerings.</p>
                                <a href={turnupLink}><button className="btn btn-light px-2 py-0 mx-2"> {webIcon} </button></a> <a href={turnupRepo}><button className="btn btn-light p-2 mx-1">git {repoIcon}</button></a>
                            </div>
                        </Col>
                        <Col md={12} className={"d-flex colCustom1 " + (props.windowSize<1199 ? "justify-content-center" : "")}>
                            <img className="img-fluid projImg projShadow" src={Loaded} />
                            <div className="projDescription projShadow text-right">
                                <h3 >Loaded</h3>
                                <p>A logistics tracking app. Allows you to keep track of drivers and loads, data about them and their status.</p>
                                <a href={loadedLink}><button className="btn btn-light px-2 py-0 mx-2"> {webIcon} </button></a> <a href={loadedRepo}><button className="btn btn-light p-2 mx-1">git {repoIcon}</button></a>
                            </div>
                           
                        </Col>
                    </Row>
                </Col>
                <Col sx={12} lg={6}>
                    <Row>
                        <Col md={12} className={"d-flex colCustom2 "  + (props.windowSize<1199 ? "justify-content-center" : "")}>
                            <div className="projDescription projShadow ml-2 text-left">
                                <h3>2 Chefs & a Beat</h3>
                                <p className="mb-2">A brand page for a local food and music pop up. Built in squarespace.</p>
                                <a href={twoChefsLink}><button className="btn btn-light px-2 py-0 mx-2"> {webIcon} </button></a> 
                            </div>
                            <img className="img-fluid projImg projShadow" src={Twochefs} />
                        </Col>
                        <Col md={12} className={"d-flex colCustom2 "  + (props.windowSize<1199 ? "justify-content-center mb-5" : "")}>
                            <div className="projDescription projShadow text-left">
                                <h3>Baber of the Woods</h3>
                                <p>An early project of mine, simple grid layout photo album with photos from my favorite hobby, hunting wild mushrooms.</p>
                                <a href={botwLink}><button className="btn btn-light px-2 py-0 mx-2"> {webIcon} </button></a> <a href={botwRepo}><button className="btn btn-light p-2 mx-1">git {repoIcon}</button></a>
                            </div>
                            <img className="img-fluid projImg projShadow" src={Botw} />
                        </Col>
                    </Row>
                </Col>


            </Row>
            {/* <Row custom reverse>
                <div className="set2">
                    
                </div>
            </Row>
            <Row custom>
                <div className="set3">
                    
                </div>
            </Row>
            <Row custom reverse>
                <div className="set4">
                    
                </div>
            </Row> */}
            {/* <canvas id="canvas" width="200" height="100"></canvas> */}
        </div>
    );
}

export default Projects;