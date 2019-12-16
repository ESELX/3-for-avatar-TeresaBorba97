//Variáveis tipo let nomeDaVar;
let numDiv;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

  function draw() {
    background(250);
    numDiv = 4;//map(mouseX,0,width,5,50);

    for (i = 0; i < numDiv-1; i++){
      for (j = 0; j <numDiv-1; j++){
        avatar((i+1)*width/numDiv,(j+1)*height/numDiv, 60);

      }
    }
  }

  function avatar(posX, posY, diam){
     //cabelo
    fill(249, 236, 147 )
    ellipse(posX,posY+diam/15,diam+15);
     //cabelo
    fill(0, 0, 240 )
    ellipse(posX,posY+diam/2,diam/2);

    //orelhas
    fill(254, 220, 189)
    ellipse(posX-diam/2,posY-diam/9,diam/6);
    fill(254, 220, 189)
    ellipse(posX+diam/2,posY-diam/9,diam/6);

    //CARA
    fill(254, 220, 189)
    ellipse(posX,posY,diam);
    //OLHOS parte branca
    fill(250)
    ellipse(posX-diam/4,posY-diam/5,diam/5);
    fill(250)
    ellipse(posX+diam/4,posY-diam/5,diam/5);

    //OLHOS pupila
    fill(0)
    ellipse(posX-diam/4,posY-diam/5,diam/20);
    fill(0)
    ellipse(posX+diam/4,posY-diam/5,diam/20);
    //nariz
      fill(254, 220, 189)
    ellipse(posX+diam/70,posY-diam/50,diam/10);

    //boca
     fill(254, 30, 10)
    ellipse(posX-diam/100,posY+diam/5,diam/5);






  }
