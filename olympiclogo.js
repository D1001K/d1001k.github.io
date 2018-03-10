var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    blueYellow1();
    blueYellow2();
    yellowBlack1();
    yellowBlack2();
    blackGreen1();
    greenRed1();
    // drawBall();
    // black();
    // red();
    // yellow();
    // green();
}
function blueYellow1() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(56,50,25,1/4*Math.PI,Math.PI+1/4*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(83,73,25,1/4*Math.PI,Math.PI+1/4*Math.PI);
    ctx.stroke();
}
function blueYellow2() {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(84,73,25,0,3/2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(56,50,25,5/4*Math.PI, 1/4*Math.PI);
    ctx.stroke();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}
function yellowBlack1() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(115,50,25,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(84,72,25,3/2*Math.PI, 1/4*Math.PI);
    ctx.stroke();
}
function yellowBlack2() {
    ctx.beginPath()
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(115,50,25,0,3/4*Math.PI);
    ctx.stroke();
}
function blackGreen1() {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(146,73,25,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(116,50,25,3/2*Math.PI, 1/2*Math.PI)
    ctx.stroke();
}
function greenRed1() {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(176,50,25,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(146,73,25,3/2*Math.PI,7/4*Math.PI)
    ctx.stroke();
}
// function drawBall() {
//     ctx.beginPath();
//     ctx.strokeStyle = " blue";
//     ctx.lineWidth = 5;
//     ctx.arc(55,50,25,0,2*Math.PI);
//     ctx.stroke();
// }
// function black() {
//     ctx.beginPath();
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 5;
//     ctx.arc(115,50,25,0,2*Math.PI);
//     ctx.stroke();
// }
// function red() {
//     ctx.beginPath();
//     ctx.strokeStyle = "red";
//     ctx.lineWidth = 5;
//     ctx.arc(175,50,25,0,2*Math.PI);
//     ctx.stroke();
// }
// function yellow() {
//     ctx.beginPath();
//     ctx.strokeStyle = "yellow";
//     ctx.lineWidth = 5;
//     ctx.arc(83,73,25,0,2*Math.PI);
//     ctx.stroke();
// }
// function green() {
//     ctx.beginPath();
//     ctx.strokeStyle = "green";
//     ctx.lineWidth = 5;
//     ctx.arc(148,73,25,0,2*Math.PI);
//     ctx.stroke();
// }