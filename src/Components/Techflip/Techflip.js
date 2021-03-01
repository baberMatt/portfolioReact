import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";



function Techflip(props) {
    const thisStyle = {
        color: props.thisTech.color,
        backgroundColor: props.thisTech.bgColor,
        clipPath: props.thisTech.clip
    }

    console.log(props.thisTech)
    return (
        <div className={"flip-card techShadow " + (props.windowSize<1199 ? "mx-5" : "") }>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className="img-fluid my-2 mx-1 " src={props.thisTech.link} />
                </div>
                <div className="flip-card-back techShadow d-flex flex-column justify-content-center align-items-center" style={thisStyle}>
                    <div className="fliptext">
                        {props.thisTech.title === "JavaScript" ? <h6 className="m-0" style={{fontSize: "13px"}}>{props.thisTech.title}</h6> : <h6 className="m-0">{props.thisTech.title}</h6>}
                        {props.thisTech.text.map(item => (
                            <p>{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Techflip;