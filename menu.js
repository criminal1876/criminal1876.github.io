let tasto;


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
text("caricamento",400, 50);

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
