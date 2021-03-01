import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMe from "../Components/AboutMe/AboutMe.js";
import Tech from "../Components/Tech/Tech.js";
import Projects from "../Components/Projects/Projects.js";
import { textObject } from "../utils/textObject.js"


// import UserContext from "../utils/userContext";
// import Row from "../components/Row";


function Portfolio() {
    const [aboutMeShowing, setAboutMeShowing] = useState("init");
    const [aboutMeBtn, setAboutMeBtn] = useState("");
    
    const [techShowing, setTechShowing] = useState(false);
    const [techIntro, setTechIntro] = useState('hide');
    const [techBody, setTechBody] = useState('hide');
    const [techBtn, setTechBtn] = useState("");
    const [disabled, setDisabled] = useState("");

    const [projectsShowing, setProjectsShowing] = useState('');

    const widthAndHeight = useRef(null);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    var arrayOfObject = Object.values(textObject)
    var objectTexts = []
    var objectClasses = []
    var string = "string";

    objectClasses = arrayOfObject.map(item => {
        objectTexts.push(item[0].split(''))
        return item
    });
    
    var delay = 5;
    var count = 1;
    var divCount = 1;



    function addOneChar(i, j) {
        
        let currentP = document.getElementById(`tech${count}`)
        currentP.classList.add(objectClasses[i][1])
        currentP.classList.add(objectClasses[i][2])
        currentP.classList.add(objectClasses[i][3])
        objectTexts[i][j] !== "1" ? currentP.append(objectTexts[i][j]) : divCount ++;
        if (j + 1 < objectTexts[i].length) {  // next character in the current string
            setTimeout(function () { addOneChar(i, j + 1); }, delay);
        } else if (i + 1 < objectTexts.length) {   // start the next string in the text[] array
            count++;
            let tech = document.getElementById(`techDiv${divCount}`)
            let nextTech = document.createElement("p")
            nextTech.setAttribute("id", `tech${count}`)
            tech.appendChild(nextTech)
            setTimeout(function () { addOneChar(i + 1, 0); }, delay);
        } 
        else {
            fadeTech();
        }
    }

    function fadeTech() {
        setTimeout(function () { setTechIntro('hide'); }, 500);
        setTimeout(function () { setTechBody('show'); }, 1000);
    }

    function clearTech() {
        document.getElementById("techDiv1").innerHTML = '<p id="tech1" className="d-inline"></p>';
        document.getElementById("techDiv2").innerHTML = '';
        document.getElementById("techDiv3").innerHTML = '';
        document.getElementById("techDiv4").innerHTML = '';
        document.getElementById("techDiv5").innerHTML = '';
        document.getElementById("techDiv6").innerHTML = '';
        document.getElementById("techDiv7").innerHTML = '';
        document.getElementById("techDiv8").innerHTML = '';
        document.getElementById("techDiv9").innerHTML = '';
    }

    const handleTechClick = function () {
        if (techShowing == false) {
            setTechShowing(true);
            setTechIntro('show');
            setTimeout(function () { addOneChar(0, 0); });
            setDisabled("none");
            setTimeout(function () { setDisabled(""); }, 4000);
        }
        else {
            setTechShowing(false);
            clearTech();
            setTechBody('hide');
        }
    }

    const handleProjectsClick = function () {
        if (projectsShowing == '') {
            setProjectsShowing('projectsShowing');
            setAboutMeShowing(false);
            setTechShowing(false);
            clearTech();
            setTechBody('hide');
            setAboutMeShowing("hidden");
            setAboutMeBtn('collapse')
            setTechBtn('collapse')
        }
        else if (projectsShowing == 'projectsShowing') {
            setProjectsShowing('projectsClosing');
            setTimeout(function () { setProjectsShowing(''); }, 1001);
            setTimeout(function () { setAboutMeBtn('') }, 1001);
            setTimeout(function () { setTechBtn('') }, 1001);
        }
    }

    const handleAboutMeClick = function () {
        if (aboutMeShowing === "hidden" || "init") {
            setAboutMeShowing("showing");
        }
        if (aboutMeShowing === "showing") {
            setAboutMeShowing("hidden");
        }
    }

    useEffect(() => {
        setHeight(widthAndHeight.current.offsetHeight);
        setWidth(widthAndHeight.current.offsetWidth);
    }, [widthAndHeight.current]);

    return (
        <div ref={widthAndHeight} className="row" id="mainContent">
            <Container fluid className="p-0">
                <Row className="d-flex m-0 justify-content-around w-100 h-100">
                    <Col xs={12} xl={4} className="d-flex align-items-center">
                                <AboutMe
                                    showing={aboutMeShowing}
                                />
                    </Col>
                    <Col xs={12} xl={3} >
                        <div className={"h-100 text-center d-flex flex-column justify-content-center navCol"}>
                            <h3 id="aboutMeBtn" onClick={handleAboutMeClick}  className={"mb-5 " + aboutMeBtn}>about me</h3>
                            <h3 onClick={handleProjectsClick} style={{ pointerEvents: disabled }} className={projectsShowing}>projects</h3>
                            <h3 id="techBtn" onClick={handleTechClick} style={{ pointerEvents: disabled }} className={"mt-5 " + techBtn}>technologies</h3>
                        </div>
                    </Col>
                    <Col xs={12} xl={4} className="d-flex align-items-center">
                        <Tech
                            techIntro={techIntro}
                            techBody={techBody}
                            showing={techShowing}
                        />
                    </Col>
                    <Projects
                        showing={projectsShowing}
                        height={height}
                        width={width}
                    />
                </Row>
            </Container>
        </div>


    );
}

export default Portfolio;
