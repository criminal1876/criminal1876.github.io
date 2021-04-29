let tasto;
var testo = "pagina personagi famosi ";
var indirizzo = "MORBIDELLI2.html";
var testo2 = "pagina della scuadra di calcio ";
var indirizzo2 ="morbidellivincenzo.html";
var testo3 = "acchiappaPalline";
var indirizzo3 = "acchiappaPalline.html";
let rectY=0;

                let cX=100;
                let cY=30;

                let incrementoX=1;
                let incrementoY=1;

                let frameRate;


  function setup() {
 setFrameRate(60);
createCanvas(1366,768);
  }
function draw() {
tasto=key;
background(0,120,0);
frameRate = getFrameRate(60);

  switch(tasto){
    case "p" :
    textSize(40);
text("pausa",600,200);

break;

case "g":
text("avvio gioco",100, 50);

                  fill(0, 255, 0)

                  rectY=mouseY-50;

                  if(rectY<=0){
                    rectY=0;
                  }

                  if(cX>=1366){
                    incrementoX=-incrementoX;
                  }
                  if(cY>=768){

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
text("menu",100, 50);



fill(0,0,0);
textSize(30);
text("Premi g per giocare a pong", 50, 100);
text("Premi p per metere in pausa ",50, 200);
text("Premi o per accedere alla pagina degli angoli",50, 300);
text("premi r per accedere alla pagina dei personagi famosi ",50, 400);
text("premi s per accedere alla scuadra di calcio  ",50, 500);
text("Premi z per accedere al gioco acchiappaPalline",50, 600)
 break;

 case "o":

  textSize(15);
   background(220, 0, 0);

   fill(255, 255, 255);
   circle(450, 100, 70);

   fill(0, 255, 0);
   arc(450, 100, 70, 70, 0, 30);
   text("30",445, 150);

   fill(255, 255, 255);
   circle(450, 200, 70);

   fill(0, 255, 0);
   arc(450, 200, 70, 70, 0, 45);
   text("45",445, 250);

   fill(255, 255, 255);
   circle(450, 300, 70);

   fill(0, 255, 0);
   arc(450, 300, 70, 70, 0, 60);
   text("60",445, 350);

   fill(255, 255, 255);
   circle(450, 400, 70);

   fill(0, 255, 0);
   arc(450, 400, 70, 70, 0, 90);
   text("90",445, 450);

   fill(255, 255, 255);
   circle(450, 500, 70);

   fill(0, 255, 0)
   arc(450, 500, 70, 70, 0, 180);
   text("180",440, 550);

   fill(255, 255, 255);
   circle(450, 600, 70);

   fill(0, 255, 0);
   arc(450, 600, 70, 70, 0, 270);
   text("270",440, 650);


   fill(255, 255, 255);
   circle(450, 700, 70);

   fill(0, 255, 0);
   arc(450, 700, 70, 70, 0, 360);
   text("360",440, 750);

   fill(255, 255, 255);
   circle(850, 100, 70);

   fill(0, 255, 0);
   arc(850, 100, 70, 70, 330, 360);
   text("-30",840, 150);

   fill(255, 255, 255);
   circle(850, 200, 70);

   fill(0, 255, 0);
   arc(850, 200, 70, 70, 315, 360);
   text("-45",840, 250);

   fill(255, 255, 255);
   circle(850, 300, 70);

   fill(0, 255, 0);
   arc(850, 300, 70, 70, 300, 360);
   text("-60",840, 350);

   fill(255, 255, 255);
   circle(850, 400, 70);

   fill(0, 255, 0);
   arc(850, 400, 70, 70, 270, 360);
   text("-90",840, 450);

   fill(255, 255, 255);
   circle(850, 500, 70);

   fill(0, 255, 0);
   arc(850, 500, 70, 70, 180, 360);
   text("-180",840, 550);

   fill(255, 255, 255);
   circle(850, 600, 70);

   fill(0, 255, 0);
   arc(850, 600, 70, 70, 90, 360);
   text("-270",840, 650);

   fill(255, 255, 255);
   circle(850, 700, 70);

   fill(0, 255, 0);
   arc(850, 700, 70, 70, 0, 360);
   text("-360",840, 750);

break;

case "r":

document.write(testo.link(indirizzo));
//prof quando premera r uscira il link per la pagina che si moltiplica al infiito e non so come si risolve il problema


break;

case "s":

document.write(testo2.link(indirizzo2));

//la stesa cosa che succede nel altro link (per riusare il menu ricaricare la pagina)
break;

case "z":

document.write(testo3.link(indirizzo3));

break;

default:
 
  text("menu",100, 50);
  
  fill(0,0,0);
  textSize(30);
  text("Premi g per giocare a pong", 50, 100);
  text("Premi p per metere in pausa ",50, 200);
  text("Premi o per accedere alla pagina degli angoli",50, 300);
  text("premi r per accedere alla pagina dei personagi famosi ",50, 400);
  text("premi s per accedere alla scuadra di calcio  ",50, 500);
  text("Premi z per accedere al gioco acchiappaPalline",50, 600)

break;
  

}



}
