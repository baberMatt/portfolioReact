import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./style.css";



function Console(props) {
    return (
        <div id="console" className="d-flex ">
            <div className="pl-2 mt-auto mb-0">
                {props.children}

            </div>
        </div>

    );
}

export default Console;