let tasto;
let rectY=0;

                let cX=100;
                let cY=30;

                let incrementoX=1;
                let incrementoY=1;

                let frameRate;


  function setup() {
 setFrameRate(60);
createCanvas(800,600);
  }
function draw() {
tasto=key;
background(0,120,0);
frameRate = getFrameRate(60);

  switch(tasto){
    case "p" :
text("pausa",50,50);
textSize(40)
text("gioco in pausa",400, 300);
break;

case "g":
text("avvio gioco",100, 50);

                  rectY=mouseY-50;

                  if(rectY<=0){
                    rectY=0;
                  }

                  if(cX>=800){
                    incrementoX=-incrementoX;
                  }
                  if(cY>=600){

                    incrementoY=-incrementoY;
                  }

                  if(cY<=0){

                    incrementoY=-incrementoY;
                  }

                  if(cX<=0){

                    incrementoX=-incrementoX;
                  }

                  if(cX<50){
                    if(cY>rectY){


                    }
                    incrementoX=-incrementoX;
                  }
                  cX=cX+incrementoX;
                  cY=cY+incrementoY;

                  background(220,0,0);
                  rect(50,rectY,20,100);
                  circle(cX,cY,50);
                  frameRate = getFrameRate(60);
                  text(frameRate, 20, 40);


break;


case "m":
text("menu",100, 100);



fill(0,0,0);
textSize(30);
text("Scegli la difficolta", 400, 100);
text("Facile",440, 200);
text(tasto, 440, 250);
text("Medio",440, 300);
text(tasto,440,350);
text("Difficile",440, 400);
text(tasto, 440, 450);
text("inizio il gioco",440, 500);
text(tasto,440, 550);
 break;

 case "only":
textSize(30);
text("errore premi unodei tasti indicati m g p ",200,300);
break;
  }



}
