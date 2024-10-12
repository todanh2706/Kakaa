var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false, isErasing = false;

var paint_Mode = false, erase_Mode = false;

function setWidth(value) {
    var canvas = document.getElementById("canvas1");
    if (isNumeric(value)) {
        canvas.width = value;
    }
}

function setHeight(value) {
    var canvas = document.getElementById("canvas1");
    if (isNumeric(value)) {
        canvas.height = value;
    }
}

function clearCanvas() {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

function eraseCircle(x, y) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = 'white';
    context.fill();
}

// verify the given value is actually a number
function isNumeric(value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}

function startPaint() {
    if (paint_Mode)
        isPainting = true;
}

function startErase() {
    if (erase_Mode) isErasing = 1;
}

function endPaint() {
    if (paint_Mode)
        isPainting = false;
}

function endErase() {
    if (erase_Mode) isErasing = 0;
}

function doPaint(x, y) {
    if (paint_Mode && isPainting) {
        paintCircle(x, y);
    }
}

function erase(x, y) {
    if (erase_Mode && isErasing) {
        eraseCircle(x, y);
    }
}

function changeColor(newColor) {
    color = newColor;
}

function resizeBrush(newSize) {
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize;
}

function paintMode() {
    if (document.getElementById("EraseModeNode").className == "bgToBlue") {
        document.getElementById("EraseModeNode").className = "backtowhite";
        erase_Mode = 0;
    }
    if (!paint_Mode) {
        document.getElementById("PaintModeNode").className = "bgToBlue";
        paint_Mode = 1;
    }
    else {
        document.getElementById("PaintModeNode").className = "backtowhite";
        paint_Mode = 0;
    }
}

function eraseMode() {
    if (document.getElementById("PaintModeNode").className = "bgToBlue") {
        document.getElementById("PaintModeNode").className = "backtowhite";
        paint_Mode = 0;
    }
    if (!erase_Mode) {
        document.getElementById("EraseModeNode").className = "bgToBlue";
        erase_Mode = 1;
    }
    else {
        document.getElementById("EraseModeNode").className = "backtowhite";
        erase_Mode = 0;
    }
}

function upload()
{
    var dd1 = document.getElementById("canvas1");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    image.drawTo(dd1);
}