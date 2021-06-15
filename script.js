// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let buttonDiv;
let clearButton;
let sliderDiv;
let slider;
let minSpan;
let maxSpan;


function setup() {
  // create canvas UI
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  background(65, 60, 88);
  canvas.mousePressed(drawEllipse);
  canvas.parent(canvasDiv);
  // create slider UI

  // create button UI
  buttonDiv = createDiv();
  clearButton = createButton("Clear Canvas");
  clearButton.mousePressed(function() {
    background(65, 60, 88);
  });
}

function draw() {

}

function drawEllipse() {
  fill("#ff0");
  ellipse(mouseX, mouseY, 100);
}


/******************************************************************************
                              drawSplatter()

  Creates ellipses on the canvas around where the mouse is clicked.

  Details:
   -The function creates between 10 and 14 ellipses (random).
   -Each ellipse will be a random color and have no outline.
   -Each ellipse will have a random width (5 to 14 pixels).
   -Each ellipse's x and y values are calculated like this:
     x = random value between mouseX - spread and mouseX + spread
     y = random value between mouseY - spread and mouseY + spread
   -Note that "spread" is accessed through the value of the slider:
     slider.value()
*******************************************************************************/

function drawSplatter(){
  fill(random(100, 256), random(100, 256), random(100, 256));
  noStroke();
}
