
let textCanvas;

function setup(){
  createCanvas(1200,628);

  textCanvas = new TextCanvas();
  }


function draw(){

  background(120,60,90);
    //grid for debug
    line(0.075*width,0,0.075*width,height);
    line(0.5*width,0,0.5*width , height);
    line((1-0.075)*width,0,(1-0.075)*width,height);
    line(0,0.075*height,width,0.075*height);
    line(0,0.5*height,width,0.5*height);
    line(0,(1-0.075)*height,width,(1-0.075)*height);

    textCanvas.display();
}
