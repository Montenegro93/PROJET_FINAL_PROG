//Etienne Montenegro 2018
//this object create a grid filled with force vector to move objecto around

class Grid{

  constructor(x,y,width,height,res){
    this.res = res; //resolution of the grid, the smaller the number is, the more rows and columns there will be
    this.cols = floor(width / res);
    this.rows = floor(height / res);
    this.flowfield = new Array(this.cols * this.rows);

    this.pos = createVector(x,y); //position of the left top corner on the canvas

    this.zoff = 0;

    this.incX;
    this.incy;
    this.incZ;
}



  make(_lvl,incX,incY,incZ){
    //this function make a grid on the canvas
    this.incX = incX;
    this.incY = incY;
    this.incZ = incZ;
    this.xoff = 0;

    let lvl = _lvl; //level of intensity of the angle

    for( let y = 0 ; y < this.rows ; y++ ) {
      this.yoff = 0;

      for( let x = 0 ; x < this.cols ; x++ ) {

        let index = x + y *  this.cols;
        let angle =(noise(this.xoff,this.yoff,this.zoff) * TWO_PI * lvl)  ; //angle defined by perlin noise
        let v = p5.Vector.fromAngle(angle); //create a vector based on angle given
        v.setMag(0.5);  //modify magnitude of the vector0
        this.flowfield[index] = v; //store force vector in array


        this.xoff += this.incX;


      }
      this.yoff += this.incY;
    }
    this.zoff += this.incZ;

  }



display(){
  //Display grid and vectors turn off when running code. Usefull to see what flowfield looks like
  for( let y = 0 ; y < this.rows ; y++ ) {
    for( let x = 0 ; x < this.cols ; x++ ) {
      let index = x + y *  this.cols;

      // //DRAW VECTOR
      push();
      noFill();
      stroke(0,50);
      strokeWeight(1);
      //rect(x * this.res , y * this.res , this.res ,this.res);
      translate(x*this.res,y*this.res);
      rotate(this.flowfield[index].heading());
      line(0,0,this.res,0);
      pop();
      }
    }
}
}
