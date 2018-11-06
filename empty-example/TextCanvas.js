//Etienne Montenegro.2 Nov 2018

//TEXT DISPLAY MANAGEMENT
// MANAGE THE DIFFERENT SETTINGS OF VARIOUS TEXT ELEMENT
// STORED IN GRAPHICS

class TextCanvas {

constructor(){

  this.g = createGraphics(width,height);
  this.margin = 0.075;
  this.size = random(32,50);
  this.possibleSize = [ "BIG" , "MEDIUM" , "SMALL" ];
  this.possibleStyle = [ "BOLD" , "THIN" , "ITALIC" , "UNDERLINED"];
  this.possiblePositions = [createVector(this.margin*this.g.width , this.margin*this.g.height),
                            createVector(0.5*this.g.width, this.margin*this.g.height),
                            createVector((1-this.margin) * this.g.width , this.margin*this.g.height ),
                            createVector(this.margin*this.g.width , 0.5*this.g.height),
                            createVector(0.5*this.g.width , 0.5*this.g.height),
                            createVector((1-this.margin)*this.g.width , 0.5*this.g.height),
                            createVector(this.margin*this.g.width , ( 1 - this.margin)*this.g.height),
                            createVector(0.5*this.g.width , (1 - this.margin)*this.g.height),
                            createVector((1 - this.margin)*this.g.width , ( 1 - this.margin)*this.g.height)];
  this.textElements=[];
  this.g.textSize(this.size);
  this.addTitle("my.Event()");
  this.addDate("21/12/12");
}

  addTitle(text){
    let pickedPos = this.possiblePositions[floor(random(6))];
    let t = new Title (text ,pickedPos);
    this.textElements.push(t)
  }

  addSubTitle(text){
    let pickedPos = this.possiblePositions[floor(random(6))];
    let t = new SubTitle (text ,pickedPos);
    this.textElements.push(t)
  }

  addDate(text){
    let possiblePos = [ 0 , 2 , 8];
    let pickedPos = this.possiblePositions[possiblePos[floor(random(3))]];
    if( pickedPos == this.textElements[0].pos){      //compare pos with title pos
      while( pickedPos == this.textElement[0].pos){ //every time the pos is == pick a new random one
         this.possiblePositions[possiblePos[floor(random(possiblePos.lenght))]];
      }
    }

    let t = new Date (text ,pickedPos);
    this.textElements.push(t)
  }


  display(){

    for( let t of this.textElements ){
      t.display();
    }
    image(this.g,0,0);
  }

}
