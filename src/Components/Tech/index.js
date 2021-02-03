import React, { useEffect } from "react";
import { Row, Col } from "../Grid";
import SqlIcon from "../../Assets/sqlWorkbenchIcon.png";
import "./style.css";
import { propTypes } from "react-bootstrap/esm/Image";


function Tech( props ) {
   

    return (
        <div className={(!props.showing ? "collapse" : "")}>
            <Row>
                <Col size="md-12">
                    <div id="techDisplay" className=" border d-flex flex-column">
                        <div id="techIntro" className={props.techIntro + ' ml-2'} >
                            <p id="tech1"></p>
                        </div>
                        <div className={props.techBody}>
                            <h1 className="text-center techShadow">Langues</h1>
                            <Row className="p-5" flex jca wrap>
                                <img className="img-fluid my-2 mx-3 techShadow" src="https://img.icons8.com/color/96/000000/html-5.png" />
                                <img className="img-fluid my-2 mx-3 techShadow" src="https://img.icons8.com/color/96/000000/css3.png" />
                                <img className="img-fluid my-2 mx-3 techShadow" src="https://img.icons8.com/color/96/000000/javascript.png" />
                                <img className="img-fluid my-2 mx-3 techShadow" src="https://img.icons8.com/ios-filled/100/000000/jquery.png" />
                                <img className="img-fluid my-2 mx-3 techShadow" src="https://img.icons8.com/color/96/000000/nodejs.png" />
                                <img className="img-fluid my-2 mx-3 techShadow" src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" />
                                <img className="img-fluid my-2 mx-3 techShadow" src="https://img.icons8.com/color/96/000000/mongodb.png" />
                                <img className="img-fluid my-2 mx-3 techShadow" src="https://img.icons8.com/officel/100/000000/react.png" />
                            </Row>
                            <h1 className="text-center techShadow">Applications</h1>
                            <Row flex jca wrap>
                                <img className="img-fluid my-3 mx-4 techShadow" src="https://img.icons8.com/fluent/96/000000/github.png" />
                                <img className="img-fluid my-3 mx-4 techShadow" src="https://img.icons8.com/color/96/000000/heroku.png" />
                                <img className="img-fluid my-3 mx-4 techShadow" src={SqlIcon} />
                                <img className="img-fluid my-3 mx-4 techShadow" src="https://img.icons8.com/dusk/100/000000/postman-api.png" />
                            </Row>
                        </div>
                    </div>

                </Col>
            </Row>
        </div>
    );
}

export default Tech;