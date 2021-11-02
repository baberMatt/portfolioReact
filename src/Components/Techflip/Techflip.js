import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";



function Techflip(props) {
    const thisStyle = {
        color: props.thisTech.color,
        backgroundColor: props.thisTech.bgColor,
        clipPath: props.thisTech.clip
    }
    
    return (
        <div id={props.id} className={"techContainer techShadow " + (props.windowSize<1199 ? "mx-5" : "") } onClick={props.getTech}>
            <div className="techFlip techFlipStart">
                <div className="techIcon">
                    <img value={props.thisTech.tech} className="img-fluid my-2 mx-1 " src={props.thisTech.link} />
                </div>
            </div>
        </div>
    );
}

export default Techflip;