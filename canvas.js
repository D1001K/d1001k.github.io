var canvas;
var ctx;
window.onload = init;
function init() {
    canvas=document.getElementById("my-canvas");
    ctx = canvas.getContext('2d');   
    ctx.fillRect(0,0,100,100);
    ctx.fillRect(100, 100, 100, 100);
    ctx.fillstyle="red";
    ctx.fillRect=(0, 0, 100, 100);
}