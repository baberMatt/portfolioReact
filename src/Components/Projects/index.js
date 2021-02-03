import React, { useState, useEffect, useRef, } from "react";
import { Row, Col, } from "../Grid";
import Canvas from "../Canvas"
import Streamline from "../../Assets/streamLine.png"
import Botw from "../../Assets/baberOfTheWoods.png"
import Loaded from "../../Assets/loaded.png"
import Soon from "../../Assets/coomingSoon.png"
import { Link } from "react-router-dom";
import "./style.css";

function Projects(props) {
    const [collapsed, setCollapsed] = useState(" collapse")
    const repoIcon = <img className="github" src="https://img.icons8.com/ios-glyphs/18/000000/merge-git.png"/>;
    const webIcon = <img src="https://img.icons8.com/carbon-copy/40/000000/domain.png"/>;
   
    const loadedLink = "https://loadedtruckingapp.herokuapp.com/";
    const loadedRepo = "https://github.com/baberMatt/loaded";
    const streamLineLink = "https://babermatt.github.io/StreamerSearch/";
    const streamLineRepo = "https://github.com/baberMatt/StreamerSearch";
    const turnupLink = "";
    const turnupRepo = "https://github.com/baberMatt/Turnup";
    const botwLink = "https://babermatt.github.io/BaberOfTheWoods/";
    const botwRepo = "https://github.com/baberMatt/BaberOfTheWoods";
    
    
    function checkShowing() {
        if (props.showing == "projectsShowing") {
            setTimeout(function () { setCollapsed(""); }, 1025);
        }
        else {
           setCollapsed(" collapse");
        } 
    }
     

    useEffect(() => {
        checkShowing(); 
      }, [props.showing]);

    console.log(props.height, props.width)
      
    return (
        <div className={"set" + collapsed} id="projects">
            {/* <Canvas 
            height={props.height}
            width={props.width}
            /> */}
            <Row custom>
                <Col size="md-6">
                    <Row>
                        <Col size="md-12" flex custom>
                            <img className="img-fluid projShadow" src={Soon} />
                            <div className="projDescription projShadow text-right">
                                <h3>Turnup</h3>
                                <p>An platform for Pop Up events. Host and guests a like can browse events, flag attendance and even purchase offerings.</p>
                                <a href=""><button className="btn btn-light px-2 py-0 mx-2"> {webIcon} </button></a> <a href={turnupRepo}><button className="btn btn-light p-2 mx-1">git {repoIcon}</button></a>
                            </div>
                        </Col>
                        <Col size="md-12" flex custom1>
                            <img className="img-fluid projShadow" src={Loaded} />
                            <div className="projDescription projShadow text-right">
                                <h3 >Loaded</h3>
                                <p>A logistics tracking app. Allows you to keep track of drivers and loads, data about them and their status.</p>
                                <a href={loadedLink}><button className="btn btn-light px-2 py-0 mx-2"> {webIcon} </button></a> <a href={loadedRepo}><button className="btn btn-light p-2 mx-1">git {repoIcon}</button></a>
                            </div>
                           
                        </Col>
                    </Row>
                </Col>
                <Col size="md-6">
                    <Row>
                        <Col size="md-12" flex custom2>
                            <div className="projDescription projShadow ml-2 text-left">
                                <h3>streamLine</h3>
                                <p className="mb-2">A search app for the top games being streamed on you tube. Search for a specific streamer, or browse top games and watch live.</p>
                                <a href={streamLineLink}><button className="btn btn-light px-2 py-0 mx-2"> {webIcon} </button></a> <a href={streamLineRepo}><button className="btn btn-light p-2 mx-1">git {repoIcon}</button></a>
                            </div>
                            <img className="img-fluid projShadow" src={Streamline} />
                        </Col>
                        <Col size="md-12" flex custom2>
                            <div className="projDescription projShadow text-left">
                                <h3>Baber of the Woods</h3>
                                <p>An early project of mine, simple grid layout photo album with photos from my favorite hobby, hunting wild mushrooms.</p>
                                <a href={botwLink}><button className="btn btn-light px-2 py-0 mx-2"> {webIcon} </button></a> <a href={botwRepo}><button className="btn btn-light p-2 mx-1">git {repoIcon}</button></a>
                            </div>
                            <img className="img-fluid projShadow" src={Botw} />
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