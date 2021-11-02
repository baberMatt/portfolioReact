import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMe from "../Components/AboutMe/AboutMe.js";
import Tech from "../Components/Tech/Tech.js";
import Projects from "../Components/Projects/Projects.js";
import { textObject } from "../utils/textObject.js"
import { propTypes } from "react-bootstrap/esm/Image";


// import UserContext from "../utils/userContext";
// import Row from "../components/Row";


function Portfolio(props) {
    const [aboutMeShowing, setAboutMeShowing] = useState("init");
    const [aboutMeBtn, setAboutMeBtn] = useState("");
    const [aboutMeKey, setAboutMeKey] = useState("");
    const [aboutMeRect, setAboutMeRect] = useState({})

    const [techShowing, setTechShowing] = useState(false);
    const [techIntro, setTechIntro] = useState('hide');
    const [techBody, setTechBody] = useState('hide');
    const [techBtn, setTechBtn] = useState("");
    const [disabled, setDisabled] = useState("");
    const [techRect, setTechRect] = useState({})
    const [techKey, setTechKey] = useState("");

    const [projectsShowing, setProjectsShowing] = useState('');

    // const widthAndHeight = useRef(null);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const projectsArray = ["P", "R", "O", "J", "E", "C", "T", "S"]
    const aboutArray = ["A", "B", "O", "U", "T", "Sp", "M", "E"]
    const techArray = ["T", "E1", "C", "H", "N", "O1", "L", "O2", "G", "I", "E2", "S"]
    const order = [1, 5, 0, 6, 2, 4, 7, 3, 10, 8, 11, 9]


    const aboutA = document.getElementById("aboutA")
    const mainContent = document.getElementById("mainContent")
    const mainContentRef = useRef();
    const aboutAref = useRef();
    const aboutBref = useRef();
    const aboutOref = useRef();
    const aboutUref = useRef();
    const aboutTref = useRef();
    const aboutSpref = useRef();
    const aboutMref = useRef();
    const aboutEref = useRef();

    // const techTref = useRef();




    const techRefs = {
        techTref: useRef(),
        techE1ref: useRef(),
        techCref: useRef(),
        techHref: useRef(),
        techNref: useRef(),
        techO1ref: useRef(),
        techLref: useRef(),
        techO2ref: useRef(),
        techGref: useRef(),
        techIref: useRef(),
        techE2ref: useRef(),
        techSref: useRef()
    }








    const getRect = (ref) => {
        if (!ref) return
        if (ref.current) {
            let rect = ref.current.getBoundingClientRect();
            return rect;
        }
    }

    useEffect(() => {
        if (props.windowSize > 1199) {
            const mcRect = getRect(mainContentRef);
            const aRect = getRect(aboutAref);
            const bRect = getRect(aboutBref);
            const oRect = getRect(aboutOref);
            const uRect = getRect(aboutUref);
            const tRect = getRect(aboutTref);
            const spRect = getRect(aboutSpref);
            const mRect = getRect(aboutMref);
            const eRect = getRect(aboutEref);

            let ax = aRect.x - aboutMeRect.right;
            let ay = aRect.y * .60;
            console.log(`ax is ${aboutMeRect.right}`)
            document.documentElement.style.setProperty(`--aboutAX`, `-${ax}px`);
            document.documentElement.style.setProperty(`--aboutAY`, `-${ay}px`);

            let bx = bRect.x - aboutMeRect.right
            let by = bRect.y * .52;
            document.documentElement.style.setProperty(`--aboutBX`, `-${bx}px`);
            document.documentElement.style.setProperty(`--aboutBY`, `-${by}px`);

            let ox = oRect.x - aboutMeRect.right
            let oy = oRect.y * .45;
            document.documentElement.style.setProperty(`--aboutOX`, `-${ox}px`);
            document.documentElement.style.setProperty(`--aboutOY`, `-${oy}px`);

            let ux = uRect.x - aboutMeRect.right
            let uy = uRect.y * .38;
            document.documentElement.style.setProperty(`--aboutUX`, `-${ux}px`);
            document.documentElement.style.setProperty(`--aboutUY`, `-${uy}px`);

            let tx = tRect.x - aboutMeRect.right
            let ty = tRect.y * .30;
            document.documentElement.style.setProperty(`--aboutTX`, `-${tx}px`);
            document.documentElement.style.setProperty(`--aboutTY`, `-${ty}px`);

            let spx = spRect.x - aboutMeRect.right
            let spy = spRect.y * .24;
            document.documentElement.style.setProperty(`--aboutSPX`, `-${spx}px`);
            document.documentElement.style.setProperty(`--aboutSPY`, `-${spy}px`);

            let mx = mRect.x - aboutMeRect.right
            let my = mRect.y * .18;
            document.documentElement.style.setProperty(`--aboutMX`, `-${mx}px`);
            document.documentElement.style.setProperty(`--aboutMY`, `-${my}px`);

            let ex = eRect.x - aboutMeRect.right
            let ey = eRect.y * .12;
            document.documentElement.style.setProperty(`--aboutEX`, `-${ex}px`);
            document.documentElement.style.setProperty(`--aboutEY`, `-${ey}px`);
        }

    }, [aboutMeRect])

    useEffect(() => {
        if (props.windowSize > 1199) {
            let vertCount = .76
            for (let i = 0; i < techArray.length; i++) {
                let obj = Object.keys(techRefs)
                let stub = obj[i]
                let rect = getRect(techRefs[stub]);

                let x = (techRect.left - 25) - rect.x
                let y = rect.y * vertCount;
                document.documentElement.style.setProperty(`--tech${techArray[i]}X`, `${x}px`);
                document.documentElement.style.setProperty(`--tech${techArray[i]}Y`, `-${y}px`);
                vertCount = vertCount - .06
            }
        }
    }, [techRect])


    const arrayOfObject = Object.values(textObject)
    let objectTexts = []
    let objectClasses = []

    objectClasses = arrayOfObject.map(item => {
        objectTexts.push(item[0].split(''))
        return item
    });

    let delay = 5;
    let techStartCount = 1;
    let divCount = 1;



    function addOneChar(i, j) {
        let currentP = document.getElementById(`tech${techStartCount}`)
        currentP.classList.add(objectClasses[i][1])
        currentP.classList.add(objectClasses[i][2])
        currentP.classList.add(objectClasses[i][3])
        objectTexts[i][j] !== "1" ? currentP.append(objectTexts[i][j]) : divCount++;
        if (j + 1 < objectTexts[i].length) {  // next character in the current string
            setTimeout(function () { addOneChar(i, j + 1); }, delay);
        } else if (i + 1 < objectTexts.length) {   // start the next string in the text[] array
            techStartCount++;
            let tech = document.getElementById(`techDiv${divCount}`)
            let nextTech = document.createElement("p")
            nextTech.setAttribute("id", `tech${techStartCount}`)
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
        let techCount = 0;
        if (techShowing == false) {
            const techShowInt = setInterval(() => {
                let letter = document.getElementById(`tech${techArray[order[techCount]]}`)
                setTechKey(letter)
                letter.classList.add(`tech${techArray[order[techCount]]}`)
                letter.classList.remove(`hideTech${techArray[order[techCount]]}`)
                techCount++
            }, 100);
            setTimeout(() => {
                clearInterval(techShowInt)
            }, 1201);
            setTechShowing(true);
            setTimeout(() => {

                setTechIntro('show');
                setTimeout(function () { addOneChar(0, 0); });
                setDisabled("none");
                setTimeout(function () { setDisabled(""); }, 4000);
            }, 1200);


        }
        else if (techShowing === true) {
            techCount = 0;
            const techCloseInt = setInterval(() => {
                let letter = document.getElementById(`tech${techArray[order[techCount]]}`)
                letter.classList.add(`hideTech${techArray[order[techCount]]}`)
                letter.classList.remove(`tech${techArray[order[techCount]]}`)
                techCount++

            }, 100);
            setTimeout(() => {
                clearInterval(techCloseInt)
            }, 1201);
            setTimeout(() => {
                techCount = 0
                setTechShowing(false);
                clearTech();
                setTechBody('hide');
            }, 1205)

        }
    }

    function handleProjectsClick(e) {
        let projCount = 0
        let classCount = 1
        if (projectsShowing == '') {

            setProjectsShowing('projectsShowing');
            const projectShowInt = setInterval(() => {
                let letter = document.getElementById(`project${projectsArray[order[projCount]]}`)
                letter.classList.remove("projectsClosing")
                letter.classList.add(`project${classCount}`)
                projCount++
                classCount++
                if (classCount > 4) classCount = 1
            }, 200);
            setTimeout(() => {
                clearInterval(projectShowInt)
            }, 1601);

            setAboutMeShowing(false);
            setTechShowing(false);
            clearTech();
            setTechBody('hide');
            setAboutMeShowing("hidden");
            setAboutMeBtn('collapse')
            setTechBtn('collapse')
        }
        else if (projectsShowing == 'projectsShowing') {
            projCount = 0
            classCount = 1
            setProjectsShowing('projectsClosing');
            const projectCloseInt = setInterval(() => {
                let letter = document.getElementById(`project${projectsArray[order[projCount]]}`)
                console.log(letter)
                letter.classList.add(`projectsClosing`)
                letter.classList.remove(`project${classCount}`)
                projCount++
                classCount++
                if (classCount > 4) classCount = 1
            }, 200);
            setTimeout(() => {
                clearInterval(projectCloseInt)
                projCount = 0
                classCount = 1
            }, 1601)
            setTimeout(function () { setProjectsShowing(''); }, 1001);
            setTimeout(function () { setAboutMeBtn('') }, 1001);
            setTimeout(function () { setTechBtn('') }, 1001);
        }

        for (let i = 0; i < 8; i++) {
            let letter = document.getElementById(`about${aboutArray[order[i]]}`)
            letter.classList.remove(`about${aboutArray[order[i]]}`)
            letter.classList.remove(`hideAbout${aboutArray[order[i]]}`)
        }

        for (let i = 0; i < 12; i++) {
            let letter = document.getElementById(`tech${techArray[order[i]]}`)
            letter.classList.remove(`tech${techArray[order[i]]}`)
            letter.classList.remove(`hideTech${techArray[order[i]]}`)
        }

    }

    const handleAboutMeClick = function () {

        let aboutCount = 0
        if (aboutMeShowing === "hidden" || aboutMeShowing === "init") {
            setAboutMeShowing("showing");
            const aboutShowInt = setInterval(() => {
                let letter = document.getElementById(`about${aboutArray[order[aboutCount]]}`)
                setAboutMeKey(letter)
                letter.classList.add(`about${aboutArray[order[aboutCount]]}`)
                letter.classList.remove(`hideAbout${aboutArray[order[aboutCount]]}`)
                aboutCount++
            }, 100);
            setTimeout(() => {
                clearInterval(aboutShowInt)
            }, 801);

        }
        else if (aboutMeShowing === "showing") {
            aboutCount = 0;
            setAboutMeShowing("hidden");
            const aboutCloseInt = setInterval(() => {
                let letter = document.getElementById(`about${aboutArray[order[aboutCount]]}`)
                letter.classList.add(`hideAbout${aboutArray[order[aboutCount]]}`)
                letter.classList.remove(`about${aboutArray[order[aboutCount]]}`)
                aboutCount++

            }, 100);
            setTimeout(() => {
                clearInterval(aboutCloseInt)
                aboutCount = 0

            }, 801)
        }
    }


    useEffect(() => {
        if (props.windowSize < 1199) {
            setAboutMeShowing("showing");
            setTechShowing(true)
            setTechBody('show')
            setProjectsShowing('projectsShowing');
        }
    }, [props.windowSize]);

    // useEffect(() => {
    //     setHeight(widthAndHeight.current.offsetHeight);
    //     setWidth(widthAndHeight.current.offsetWidth);
    // }, [widthAndHeight.current]);

    return (
        <div ref={mainContentRef} className={(props.windowSize > 1199) ? "row" : "row m-0"}  id="mainContent">

            <Container fluid className="p-5">
                <Row className="d-flex m-0 justify-content-around w-100 h-100">
                    <Col xs={12} xl={4} className="d-flex  align-items-center">
                        <AboutMe
                            getRect={getRect}
                            setAboutMeRect={setAboutMeRect}
                            showing={aboutMeShowing}
                            windowSize={props.windowSize}
                        />
                    </Col>
                    {props.windowSize > 1199 ? <Col xs={12} xl={4} >
                        <div className={"h-100 text-center d-flex flex-column justify-content-center navCol"}>

                            <div id="aboutMeBtn" onClick={handleAboutMeClick} className={"mb-5 " + aboutMeBtn}>
                                <h1 ref={aboutAref} id="aboutA" className="d-inline-block m-0">a</h1>
                                <h1 ref={aboutBref} id="aboutB" className="d-inline-block m-0">b</h1>
                                <h1 ref={aboutOref} id="aboutO" className="d-inline-block m-0">o</h1>
                                <h1 ref={aboutUref} id="aboutU" className="d-inline-block m-0">u</h1>
                                <h1 ref={aboutTref} id="aboutT" className="d-inline-block m-0">t</h1>
                                <h1 ref={aboutSpref} id="aboutSp" className="d-inline-block m-0">{/ /g, "\u00a0"}</h1>
                                <h1 ref={aboutMref} id="aboutM" className="d-inline-block m-0">m</h1>
                                <h1 ref={aboutEref} id="aboutE" className="d-inline-block m-0">e</h1>
                            </div>
                            <div onClick={e => handleProjectsClick(e)} style={{ pointerEvents: disabled }} >
                                <h1 id="projectP" className="d-inline-block">p</h1>
                                <h1 id="projectR" className="d-inline-block">r</h1>
                                <h1 id="projectO" className="d-inline-block">o</h1>
                                <h1 id="projectJ" className="d-inline-block">j</h1>
                                <h1 id="projectE" className="d-inline-block">e</h1>
                                <h1 id="projectC" className="d-inline-block">c</h1>
                                <h1 id="projectT" className="d-inline-block">t</h1>
                                <h1 id="projectS" className="d-inline-block">s</h1>
                            </div>
                            <div id="techBtn" onClick={handleTechClick} style={{ pointerEvents: disabled }} className={"mt-5 " + techBtn}>
                                <h1 ref={techRefs.techTref} id="techT" className="d-inline-block m-0">t</h1>
                                <h1 ref={techRefs.techE1ref} id="techE1" className="d-inline-block m-0">e</h1>
                                <h1 ref={techRefs.techCref} id="techC" className="d-inline-block m-0">c</h1>
                                <h1 ref={techRefs.techHref} id="techH" className="d-inline-block m-0">h</h1>
                                <h1 ref={techRefs.techNref} id="techN" className="d-inline-block m-0">n</h1>
                                <h1 ref={techRefs.techO1ref} id="techO1" className="d-inline-block m-0">o</h1>
                                <h1 ref={techRefs.techLref} id="techL" className="d-inline-block m-0">l</h1>
                                <h1 ref={techRefs.techO2ref} id="techO2" className="d-inline-block m-0">o</h1>
                                <h1 ref={techRefs.techGref} id="techG" className="d-inline-block m-0">g</h1>
                                <h1 ref={techRefs.techIref} id="techI" className="d-inline-block m-0">i</h1>
                                <h1 ref={techRefs.techE2ref} id="techE2" className="d-inline-block m-0">e</h1>
                                <h1 ref={techRefs.techSref} id="techS" className="d-inline-block m-0">s</h1>
                            </div>
                        </div>
                    </Col> : ""}
                    <Col xs={12} xl={4} className="d-flex justify-content-center align-items-center">
                        <Tech
                            getRect={getRect}
                            setTechRect={setTechRect}
                            techIntro={techIntro}
                            techBody={techBody}
                            showing={techShowing}
                            windowSize={props.windowSize}
                        />
                    </Col>
                    <Projects
                        showing={projectsShowing}
                        height={height}
                        width={width}
                        windowSize={props.windowSize}
                    />
                </Row>
            </Container>
        </div>


    );
}

export default Portfolio;
