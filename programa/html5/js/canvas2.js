function dibujarCanvas(){
  var canvas = document.getElementById('miCanvas');
  var contexto = canvas.getContext('2d');
     contexto.fillStyle = '#CCCCCC';
     contexto.fillRect (0, 0, 450, 350);
     contexto.beginPath();
     contexto.arc(95,50,40,0,2*Math.PI);
     contexto.stroke();


  }
  function mueve(var ide, var uno){
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    
  }

function dibujarCirculo(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(95,50,40,0,2*Math.PI);
  ctx.stroke();
}

function escribirTexto(){
  var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);
}

function tipodeTexto(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.font = "30px Arial";
  ctx.strokeText("Hello World",10,50);
}
function agregarClase(){
/*var h = document.getElementById('myHead');
h.addClass.add('degradado');*/
document.getElementById("myHead").classList.add('degradado');
}
/*Funciones genericas para agregar y quitar clases*/
//declaro las variables a usar
var li=" ";
var cla=" ";
function agregarClase(li,cla){
  document.getElementById(li).classList.add(cla);
}

function quitarClase(li,cla){
  document.getElementById(li).classList.remove(cla);
}
function agregarBoxShadow(li){
document.getElementById(li).classList.add('agregarShadow');
li=" ";
//alert("Hola Mundo!");
}
function quitarBoxShadow( li){
document.getElementById(li).classList.remove('agregarShadow');
li=" ";
//alert("Hola Mundo!");
}
/*
function agregarTraslate(li){
document.getElementById(li).classList.add('tranfTraslate');

}
function agregarRotate(li){
document.getElementById(li).classList.add('tranfRotate');

}
function agregarScale(li){
document.getElementById(li).classList.add('tranScale');

}
function agregarSkewX(li){
document.getElementById(li).classList.add('trasskewX');

}
*/

function divCircular(){
document.getElementById("miDiv").classList.add('circular');

}

function degradado(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

}
var ur=" ";
function redireccionar(ur){
  window.location=ur;
}
function degradadoCircular(){
  var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
}

function dibujarImagen(){
  var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("imagina");
ctx.drawImage(img,10,10);
}
