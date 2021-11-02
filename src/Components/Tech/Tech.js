import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techflip from "../Techflip/Techflip.js"
import Console from "../Console/Console.js";
import ConsoleReturn from "../Consolereturn/ConsoleReturn.js";
import { technologiesArray } from "../../utils/techflipArray.js";
import OverlayScrollbars from 'overlayscrollbars';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "./style.css";




function Tech(props) {
    const techRef = useRef();
    const scrollRef = useRef();
    const [arrayToRender, setArrayToRender] = useState([]);
    const [arrayCount, setArrayCount] = useState(0);
    const [selectedTech, setSelectedTech] = useState("")
    const [consoleCount, setConsoleCount] = useState(1)
    // const [consoleChildren, setConsoleChildren] = useState([<ConsoleReturn />, <p className="m-0 mb-3">$<span id={`consoleText${consoleCount}`}></span><span className="ml-1" id="figure">&#8199;</span></p>])
    const [consoleChildren, setConsoleChildren] = useState([])

    const [scroll, setScroll] = useState(false)

   

    useEffect(() => {
        setConsoleChildren(consoleChildren => [...consoleChildren, <ConsoleReturn />, <p className="m-0 mb-3">$<span id={`consoleText${consoleCount}`}></span><span className="ml-1" id="figure">&#8199;</span></p>])
        setScroll(true)
    }, [consoleCount])

    
    useEffect(() => {
        if (props.getRect) {
            props.setTechRect(props.getRect(techRef));
        }
        if (props.showing) {
            if (arrayCount === 0) {
                setArrayCount(arrayCount + 1)
                setTimeout(() => {
                    setArrayToRender(arrayToRender => [...arrayToRender, technologiesArray[arrayCount]]);
                }, 3700);
                setTimeout(() => {
                    let id = `tech${technologiesArray[arrayCount].tech}`
                    let el = document.getElementById(id).childNodes[0]
                    el.classList.remove("techFlipStart")
                }, 4000);
            }
        }

        function printNodeTech(i) {
            const fireMessage = " npm loadTech"
            let span = document.getElementById(`consoleText${consoleCount}`)
            
            span.append(fireMessage[i])
            if (i + 1 < fireMessage.length) {  // next character in the current string
                setTimeout(function () { printNodeTech(i + 1); }, 50);
            } else {
                setConsoleCount(consoleCount + 1)
            }
            
        }

        if (props.showing) printNodeTech(0)
    }, [props.showing])

    useEffect(() => {
        
        if (selectedTech) {
            
            let result = technologiesArray.filter(obj => {
                return obj.tech === selectedTech
            })
            let techObj = Object.entries(result[0])
            console.log(techObj)
            
            setConsoleChildren(consoleChildren => [...consoleChildren,
            <p className="m-0">&#123;</p>,
            <p className="m-0 ml-3">{techObj[0][0]}: {techObj[0][1]}</p>,
            <p className="m-0 ml-3">{techObj[2][0]}: {JSON.stringify(techObj[2][1])}</p>,
            (techObj[3]) ? <p className="m-0 ml-3">{techObj[3][0]}: {JSON.stringify(techObj[3][1])}</p> : "",
            <p className="m-0">&#125;</p>,
            // <ConsoleReturn />,
            // <p className="m-0 mb-3">$<span id={`consoleText${consoleCount}`}></span><span className="ml-1" id="figure">&#8199;</span></p>
            ])
            setConsoleCount(consoleCount + 1)
            

        }


    }, [selectedTech]);

    useEffect(() => {
        if (scrollRef) {
            const osInstance = scrollRef.current.osInstance();
            if (osInstance) {
                let info = osInstance.scroll()
                osInstance.scroll({ y: "100%" }, 100)  
            }
        }
        setScroll(false)
    }, [scroll]);

    useEffect(() => {
        if (arrayToRender.length >= technologiesArray.length) return;
        if (arrayCount >= 1) {
            const delay = setTimeout(() => {
                setArrayToRender(arrayToRender => [...arrayToRender, technologiesArray[arrayCount]]);
            }, 300);
            setTimeout(() => {
                let id = `tech${technologiesArray[arrayCount].tech}`
                let el = document.getElementById(id).childNodes[0]
                el.classList.remove("techFlipStart")
                console.log(consoleCount)
            }, 450);
            setArrayCount(arrayCount + 1)
            return () => clearTimeout(delay);
        }
    }, [arrayToRender]);

    function getTech(e) {
        setSelectedTech(e.target.getAttribute("value"))
    }




    return (
        <div ref={techRef} className={(!props.showing ? "collapse" : "")}>
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
                            <Row noGutters className="p-1 mb-5 d-flex justify-content-around">

                                {technologiesArray.map((item) => {

                                    return (
                                        <Techflip
                                            key={item.tech}
                                            id={"tech" + item.tech}
                                            getTech={getTech}
                                            thisTech={item}
                                            windowSize={props.windowSize}
                                        />
                                    )
                                })}




                            </Row>
                        </div>
                        <div id="scrollConsole" className="d-flex mt-auto mb-2">
                            <OverlayScrollbarsComponent
                                ref={scrollRef}
                                className={"os-theme-dark"}
                                options={{ scrollbars: { autoHide: 'never' } }}
                                style={{
                                    height: "100%",
                                    width: "100%"
                                }} >
                                <Console>



                                    {consoleChildren}
                                </Console>
                            </OverlayScrollbarsComponent>
                        </div>
                    </div>

                </Col>
            </Row>
        </div>
    );
}

export default Tech;



// <div id="console" className="d-flex mx-auto mt-auto mb-2">
//                             <div className="pl-2 mt-auto mb-0">
//                                 <ConsoleReturn />
//                                 <p className="m-0">$<span id="consoleText"></span><span className="ml-1" id="figure">&#8199;</span></p>

//                             </div>
//                         </div>