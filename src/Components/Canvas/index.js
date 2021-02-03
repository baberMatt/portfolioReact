
import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)
    
    const mid = props.width / 2;
    const scaleY = props.height;
    const scaleX = props.width;

    console.log(mid)
    // const branchLine = {

    //     downStartX: mid,
    //     downStartY: 0,
    //     downFinishX: mid,
    //     downFinishY: 750,
    //     branch1X1: mid,
    //     branch1Y1: 180,
    //     branch1X2: mid - 80,
    //     branch1Y2: 240,
    //     branch1X3: mid - 240,
    //     branch1Y3: 240,
    //     branch1X4: mid - 120,
    //     branch1Y4: 240,
    //     branch1X5: mid - 170,
    //     branch1Y5: 270,
    //     branch1X6: mid - 200,
    //     branch1Y6: 270,
    //     branch2X1: mid,
    //     branch2Y1: 280,
    //     branch2X2: mid + 100,
    //     branch2Y2: 320,
    //     branch2X3: mid + 100,
    //     branch2Y3: 390,
    //     branch2X4: mid + 240,
    //     branch2Y4: 390,
    //     branch2X5: mid + 130,
    //     branch2Y5: 390,
    //     branch2X6: mid + 160,
    //     branch2Y6: 420,
    //     branch2X7: mid + 210,
    //     branch2Y7: 420
    // }
    const branchLine = {

        downStartX: mid,
        downStartY: 0,
        downFinishX: mid,
        downFinishY: scaleY / 1.49,
        branch1: {
            X1: mid,
            Y1: scaleY / 3.22,
            X2: mid - ( scaleX / 25.52 ),
            Y2: scaleY / 2.78,
            X3: mid - ( scaleX / 5.84 ),
            Y3: scaleY / 2.78,
            X4: mid - ( scaleX / 9.68 ),
            Y4: scaleY / 2.78,
            X5: mid - ( scaleX / 8.24 ),
            Y5: scaleY / 2.61,
            X6: mid - ( scaleX / 6.91 ),
            Y6: scaleY / 2.61,
        },
        branch2: {  
            X1: mid,
            Y1: scaleY / 2.22,
            X2: mid + ( scaleX / 3.52 ),
            Y2: scaleY / 2.22,
            X3: mid + ( scaleX / 5.84 ),
            Y3: scaleY / 2.22,
            X4: mid + (scaleX / 5.18),
            Y4: scaleY / 2.12,
            X5: mid + (scaleX / 4.24),
            Y5: scaleY / 2.12,
        },
        branch3: {
            X1: mid,
            Y1: scaleY / 1.49,
            X2: mid - (scaleX / 25.52),
            Y2: scaleY / 1.36,
            X3: mid - (scaleX / 3.84),
            Y3: scaleY / 1.36,
            X4: mid - (scaleX / 6.18),
            Y4: scaleY / 1.36,
            X5: mid - (scaleX / 5.24),
            Y5: scaleY / 1.32,
            X6: mid - (scaleX / 4.51),
            Y6: scaleY / 1.32,
        }  
    }
    // const draw = (ctx, frameCount) => {
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //     console.log("canvas width" + ctx.canvas.width)
    //     ctx.fillStyle = '#000000'
    //     ctx.beginPath()
    //     ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    //     ctx.fill()
    // }

    function mainLine( ctx, bL, ratio ){
        let animatedX=0;
        let animatedY=0
        ctx.moveTo(bL.downStartX, bL.downStartY);
        animatedX = bL.downStartX + ratio * ( bL.downFinishX - bL.downStartX );
        animatedY = bL.downStartY + ratio * ( bL.downFinishX - bL.downStartX );
        ctx.lineTo(animatedX, animatedY);
        ctx.stroke()
    }

    function drawLine( ctx, bL ) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#8d949c";
        // ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(bL.downStartX, bL.downStartY);
        ctx.lineTo(bL.downFinishX, bL.downFinishY);
        ctx.stroke();
        ctx.moveTo(bL.branch1.X1, bL.branch1.Y1);
        ctx.lineTo(bL.branch1.X2, bL.branch1.Y2);
        ctx.stroke();
        ctx.moveTo(bL.branch1.X2, bL.branch1.Y2);
        ctx.lineTo(bL.branch1.X3, bL.branch1.Y3);
        ctx.stroke();
        ctx.arc(bL.branch1.X3 - 3, bL.branch1.Y3, 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(bL.branch1.X4, bL.branch1.Y4);
        ctx.lineTo(bL.branch1.X5, bL.branch1.Y5);
        ctx.stroke();
        ctx.moveTo(bL.branch1.X5, bL.branch1.Y5);
        ctx.lineTo(bL.branch1.X6, bL.branch1.Y6);
        ctx.stroke();
        ctx.arc(bL.branch1.X6 - 3, bL.branch1.Y6, 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(bL.branch2.X1, bL.branch2.Y1);
        ctx.lineTo(bL.branch2.X2, bL.branch2.Y2);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(bL.branch2.X2 + 6, bL.branch2.Y2)
        ctx.arc(bL.branch2.X2 +3, bL.branch2.Y2, 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(bL.branch2.X3, bL.branch2.Y3);
        ctx.lineTo(bL.branch2.X4, bL.branch2.Y4);
        ctx.stroke();
        ctx.moveTo(bL.branch2.X4, bL.branch2.Y4);
        ctx.lineTo(bL.branch2.X5, bL.branch2.Y5);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(bL.branch2.X5 + 6, bL.branch2.Y5)
        ctx.arc(bL.branch2.X5 + 3, bL.branch2.Y5, 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(bL.branch3.X1, bL.branch3.Y1);
        ctx.lineTo(bL.branch3.X2, bL.branch3.Y2);
        ctx.stroke();
        ctx.moveTo(bL.branch3.X2, bL.branch3.Y2);
        ctx.lineTo(bL.branch3.X3, bL.branch3.Y3);
        ctx.stroke();
        ctx.arc(bL.branch3.X3 - 3, bL.branch3.Y3, 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(bL.branch3.X4, bL.branch3.Y4);
        ctx.lineTo(bL.branch3.X5, bL.branch3.Y5);
        ctx.stroke();
        ctx.moveTo(bL.branch3.X5, bL.branch3.Y5);
        ctx.lineTo(bL.branch3.X6, bL.branch3.Y6);
        ctx.stroke();
        ctx.arc(bL.branch3.X6 - 3, bL.branch3.Y6, 3, 0, 2 * Math.PI);
        ctx.stroke();
       
        
        console.log("branch " + bL.branch1X3)
        // And if we intend to start new things after
        // this, and this is part of an outline, 
        // we probably also want a ctx.closePath()
      }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        

        //Our draw came here
        const render = (ratio) => {
            ratio = ratio || 0;
            mainLine(context, branchLine, ratio )
            if (ratio<1) {
            window.requestAnimationFrame(function() {
                render(ratio + 0.01 );
                });
            }
        }
        render()

        // return () => {
        //     window.cancelAnimationFrame(animationFrameId)
        // }
    }, [mainLine])

    return <canvas id="canvas" width={props.width} height={props.height} ref={canvasRef} {...props} />
}

export default Canvas