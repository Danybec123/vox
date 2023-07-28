var comando=webkitSpeechRecognition
var recognition=new comando()
recognition.lang="es-MX"
var content=""
var avion=""
function setup(){
    canvas=createCanvas(400,400)
    background("red")
}
function start(){
    recognition.start();
}
recognition.onresult=function(results){
    console.log(results);
     content=results.results[0][0].transcript
     document.getElementById("resultado").innerHTML=content
}
function draw(){
    randomX=Math.floor(Math.random() *700-100)
    randomY=Math.floor(Math.random()* 500-100)
    if (content=="círculo") {
        fill("blue");
        circle(randomX,randomY,100);
        content="";
    }
    if (content=="avión") {
        content="";
        image(avion,randomX,randomY,100,100)
    }   
}
function preload(){
    avion=loadImage("avión.png")
    
}
