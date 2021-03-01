import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techflip from "../Techflip/Techflip.js"
import { languageArray, appsArray } from "../../utils/techflipArray.js"
import "./style.css";



function Tech(props) {
    

    return (
        <div className={(!props.showing ? "collapse" : "")}>
            <Row>
                <Col md={12}>
                    <div id="techDisplay" className="border d-flex flex-column">
                        <div id="techIntro" className={props.techIntro + ' ml-2'} >
                            <div id="techDiv1" className="mt-3">
                                <p id="tech1" className="d-inline"></p>
                            </div>
                            <div id="techDiv2"></div>
                            <div id="techDiv3"></div>
                            <div id="techDiv4"></div>
                            <div id="techDiv5"></div>
                            <div id="techDiv6"></div>
                            <div id="techDiv7"></div>
                            <div id="techDiv8"></div>
                            <div id="techDiv9"></div>
                        </div>
                        <div className={props.techBody}>
                            <h1 className="text-center techShadow">Languages</h1>
                            <Row noGutters className="p-1 mb-5 d-flex justify-content-around flex-wrap">
                                    {languageArray.map(item => (
                                        <Techflip
                                        thisTech={item}
                                        windowSize={props.windowSize}
                                        /> 
                                    ))}    
                            </Row>
                                <h1 className="text-center techShadow">Applications</h1>
                                <Row noGutters className="d-flex justify-content-around flex-wrap">
                                {appsArray.map(item => (
                                        <Techflip
                                        thisTech={item}
                                        windowSize={props.windowSize}
                                        />
                                    ))}
                                </Row>
                        </div>
                        </div>

                </Col>
            </Row>
        </div>
    );
}

export default Tech;