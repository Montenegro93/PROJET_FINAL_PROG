//Etienne Montenegrp 2018


class Text{
  constructor(text ,pos ){

    this.text = text;
    this.pos =  pos.copy();
    this.angle=0; //to make text layer rotate


  }



  display(){
    textCanvas.g.push();
    textCanvas.g.translate(this.pos.x,this.pos.y);
    //  rotate(this.angle+=0.01);
    //  scale(10,30);
    //  shearY(this.angle+=0.01)
    textCanvas.g.text(this.text, 0 , 0 );
    textCanvas.g.pop();

  }

  align(pos){

    if( pos == textCanvas.possiblePositions[0] ){
      textCanvas.g.textAlign(LEFT,TOP);
    } else if( pos == textCanvas.possiblePositions[1] ){
      textCanvas.g.textAlign(CENTER,TOP);
    } else if( pos == textCanvas.possiblePositions[2] ){
      textCanvas.g.textAlign(RIGHT,TOP);
    } else if( pos == textCanvas.possiblePositions[3] ){
      textCanvas.g.textAlign(LEFT,CENTER);
    } else if( pos == textCanvas.possiblePositions[4] ){
      textCanvas.g.textAlign(CENTER,CENTER);
    } else if( pos == textCanvas.possiblePositions[5] ){
      textCanvas.g.textAlign(RIGHT,CENTER);
    } else if( pos == textCanvas.possiblePositions[6] ){
      textCanvas.g.textAlign(LEFT,BOTTOM);
    } else if( pos == textCanvas.possiblePositions[7] ){
      textCanvas.g.textAlign(CENTER,BOTTOM);
    } else if( pos == textCanvas.possiblePositions[8] ){
      textCanvas.g.textAlign(RIGHT,BOTTOM);
    }

  }

}

//-----------------------------TITLE CLASS------------------------------//
class Title extends Text {


  constructor(text, pos ){

    super(text , pos );
    this.titleSize = textCanvas.possibleSize[floor(random(textCanvas.possibleSize.lenght))];
    this.titleStyle = textCanvas.possibleStyle[floor(random(textCanvas.possibleStyle.lenght))];
    this.align(this.pos); //WDO I ALIGN HERE?
    //this.evaluateSize(this.titleSize);

  }

  evaluateSize( titleSize){

    if( titleSize == "BIG" ){ //REFERENCE TO ARRAY?
      scale( 3 , 3);
    } else if( titleSize == "MEDIUM" ){ //REFERENCE TO ARRAY?
      scale( 1.75 , 1.75);
    } else   if( titleSize == "SMALL" ){ //REFERENCE TO ARRAY?
      scale( 1.25 , 1.25);
    }

  }


}

//-----------------------------DATE CLASS------------------------------//
class Date extends Text {


  constructor(text, pos ){

    super(text , pos );
    textCanvas.g.push();
    //this.align(this.pos); //WDO I ALIGN HERE?
    //  this.titleSize = textCanvas.possibleSize[floor(random(textCanvas.possibleSize.lenght))];
    //  this.evaluateSize(this.titleSize);
  }

  evaluateSize( titleSize){

    if( titleSize == "BIG" ){ //REFERENCE TO ARRAY?
      scale( 3 , 3);
    } else if( titleSize == "MEDIUM" ){ //REFERENCE TO ARRAY?
      scale( 1.75 , 1.75);
    } else   if( titleSize == "SMALL" ){ //REFERENCE TO ARRAY?
      scale( 1.25 , 1.25);
    }

  }


}
