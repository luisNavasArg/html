window.onload=function(){document.onkeydown=desplazar};
    function desplazar(objeto){
    var tecla = objeto.which;

        var situacionY = document.getElementById("canvas").offsetLeft;
         var situacionX = document.getElementById("canvas").offsetTop;
        switch (tecla){
            case 37 :
                canvas.style.left = situacionY-220+"px" ; break;
            case 38 :
                canvas.style.top = situacionX-220+"px" ;break;
            case 39 :
        canvas.style.left = situacionY-180+"px" ;break;
            case 40 :
                canvas.style.top = situacionX-180+"px" ;break;
        default :alert("Se ha equivocado, debe pulsar las flechas del teclado");
        }
    }
    </script>

<p class="aa">1</p>

<p class="bb">2</p>

<p class="bb aa">3</p>

<p class="bb cc aa">4</p>

<script>


for (name in arraMi){
//jugadoresCant.write(jugadoresCant[name]+"</br>");
var dando = document.getElementsByClassName("aa bb")[name].innerHTML = " ";

  }
}
</script>

<!-- it'll get 3 and 4. -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
  <title>
    Juego de Dados
  </title>
  <script src="../js/javascriptDados.js"></script>
 <link rel="stylesheet" href="../css/estiloDados.css">
  <script>
</script>
</head>
  <body onload="bienvenida();" >
    <header>
      <h1 id="titulo"></h1>
</header>
<img id="imagen" width="160" height="80" src="../imagenes/dado.gif">


    <script>

    </script>
<br>
<div id="tabla">
<table  >

  <tr>
    <th>
      1.Dado
      <td id="dado1">
      </td>

    </th>
  <tr>
    <tr>
      <th>
        2.Dado
        <td id="dado2">
        </td>
      </th>
    <tr>
      <tr>
        <th>
          3.Dado
          <td id="dado3">
          </td>
        </th>
      <tr>
        <tr>
          <th>
            4.Dado
            <td id="dado4">
            </td>
          </th>
        <tr>
          <tr>
            <tr>
              <th>
                5.Dado
                <td id="dado5">
                </td>
              </th>
            <tr>
      </table></div>
<input id="boton1" type="submit" onclick="tirarDados();" onmouseout="agregarClase('boton1','esconder');" value="Tirar dados"/>
<input id="boton2" type="submit" onclick="GuardarValores()" value="Guardar" onmouseout="agregarClase('boton2','esconder');"/>

<p id="texto">
</p>
<p id="texto2">
</p>
<button id="boton3" onclick="mostrarValores();">Tirar dados</button><br>
<div id="lista">
  <ul>
    <li>
      <li>
        <li>
          <li>
            <li>

            </li>
          </li>
        </li>
      </li>
    </li>
  </ul>
</div>
<div id="res">
  <h5></h5>
  <h5></h5>
  <h5></h5>
  <h5></h5>
  <h5></h5>
  <h5></h5>
</div>
<input type="submit" onclick="limpiarValores();" value="Limpiar"/>
  <div id="explica" >
    1: se coloca el número que dé la suma de 1 obtenidos.<br>
    2: se coloca el número que dé la suma de 2 obtenidos.<br>
    3: se coloca el número que dé la suma de 3 obtenidos.<br>
    4: se coloca el número que dé la suma de 4 obtenidos.<br>
    5: se coloca el número que dé la suma de 5 obtenidos.<br>
    6: se coloca el número que dé la suma de 6 obtenidos.<br>

    Doble: 15 puntos si es servida, 10 si fue armada en los dos o tres tiros del jugador. Se forman dos grupos de dos dados iguales y uno distinto.<br>

    Escalera: 25 puntos si es servida, 20 si fue armada. Se forma con una progresión de números.<br> Hay tres posibilidades: 1-2-3-4-5, 2-3-4-5-6 y 3-4-5-6-1 ("escalera al as").<br>

    Full: 35 puntos si es servido o 30 puntos si es armado. Se forma con dos grupos de dados iguales, uno de tres y otro de dos dados.<br>

    Póker: 45 puntos si es servido o 40 puntos si es armado. Se forma con cuatro dados iguales.<br>

    Generala: 50 puntos si se logra formar cinco números iguales en dos o tres tiros.<br>

    Generala Doble: 60 puntos si se logra formar dos generalas en dos tiros de tres.<br>

    Generala Servida: Cuando se logra la Generala de un solo tiro, se llama generala servida y el jugador automáticamente gana el juego.

</div>

</body>
</html>

/*var uno=0;
var dos=0;
var tres=0;
var cuatro=0;
var cinco=0;
var seis=0;
var total =0;
  function bienvenida(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    var cnaJugadores = prompt ("Bienvenidos, Ingresen la cantidad de jugadores", "");
    var cntjg = new Array(cnaJugadores);
    var h =40;
      if(cnaJugadores!=" "){
        for (var i = 1; i <= cnaJugadores; i++) {
          ctx.fillText(" jugador "+ i , 450, h);
          h=h+50;
        }
      }
  }
  function limpiar(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
ctx.rect(0, 0, 1000, 550);
ctx.fillStyle = "white";
ctx.fill();
  }
  function mostrarDadoUno(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
ctx.rect(0, 0, 100, 100);
ctx.fillStyle = "yellow";
ctx.fill();
  }
  function tirarDados() {
    var arraMi = new Array(5);
    var num =0;
    var num1=0;
    var num2=0;
    var num3=0;
    var num4=0;
    var num5=0;
    var num6=0;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";

    for (var i = 0; i < arraMi.length; i++) {
      var a = Math.floor(Math.random() * 6+1);
      //ctx.fillText("dado" + i +":  "+ a, 30, num);
    //  arraMi[i] = a;
    //  ctx.fillText("Resultado: " + i +":  "+ arraMi[i], 10, num);
    /*  if(arraMi[i]==6){
        num6=num6+1;
        ctx.fillText("6 = " + num6, 800, num);
      }
      if (arraMi[i]==5) {
        num5=num5+1;
        ctx.fillText("5 = " + num5, 750, num);
      }
      if (arraMi[i]==4) {
        num4=num4+1;
        ctx.fillText("4 = " + num4, 700, num);
      }
      if (arraMi[i]==4) {
        num3=num3+1;
        ctx.fillText("3 = " + num3, 650, num);
      }
      if (arraMi[i]==4) {
        num2=num2+1;
        ctx.fillText("2 = " + num2, 600, num);
      }
      if (arraMi[i]==4) {
        num1=num1+1;
        ctx.fillText("1 = " + num1, 550, num);
      }*/

      switch (a) {
      case 1:
           uno= uno + 1;
           total=total + 1;
           mostrarDadoUno();
          //ctx.fillText("dado con el  1 :  "+ uno, 60, num);

          break;
      case 2:
          dos = dos +1;
          total=total + 2;
          //ctx.fillText("dado con el  2 :  "+ dos, 60, num);

          break;
      case 3:
          tres = tres + 1;
          total=total + 3;
          //ctx.fillText("dado con el  3 :  "+ tres, 60, num);
          ;
          break;
      case 4:
          cuatro = cuatro + 1;
          total=total + 4;
          //ctx.fillText("dado con el  4 :  "+ cuatro, 60, num);

          break;
      case 5:
          cinco = cinco + 1;
          total=total + 5;
          //ctx.fillText("dado con el 5 :  "+ cinco, 60, num);

          break;
      case 6:
          seis = seis + 1;
          total=total + 6;
          //ctx.fillText("dado con el 6 :  "+ seis, 60, num);

          break;

      }

      num=num + 30;
  }
}
*/

function tirarDados() {
  var arraMi = new Array(6);
  var num =0;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "black";
  ctx.font = "20px Georgia";

  for (var i = 0; i < arraMi.length; i++) {
    var a = Math.floor(Math.random() * 6+1);
    //ctx.fillText("dado" + i +":  "+ a, 30, num);
    arraMi[i] = a;
    ctx.fillText("Resultado: " + i +":  "+ arraMi[i], 10, num);
    num=num + 30;
}
revisarDados();
function revisarDados(){

  var it=300;
  for (var i = 1; i < arraMi.length; i++) {

      ctx.fillText("Resultado: :  "+ arraMi[i], 10, it);
      caseMuestra(arraMi[i]);

      it=it+60;

  }
  ctx.fillText("Tienes "+total+" puntos!!! :  ", 600, 400);
/*    if(seis==5){
    ctx.fillText("Tienes generala Servida se acabo el Juego!!! :  ", 600, 400);
      if(cinco==5){
        ctx.fillText("Tienes 25 puntos!!! :  ", 600, 400);
        if(cuatro==5){
        ctx.fillText("Tienes 20 puntos!!! :  ", 600, 400);
        if (tres==5) {
        ctx.fillText("Tienes 15 puntos!!! :  ", 600, 400);
        if (dos==5) {
        ctx.fillText("Tienes 10 puntos!!! :  ", 600, 400);
        if (uno==5) {
          ctx.fillText("Tienes 5 puntos!!! :  ", 600, 400);

        }
        }
        }
        }
      }
  }
*/


}

//  preguntar();

function caseMuestra(valor){


switch (valor) {
case 1:
     uno= uno + 1;
     total=total + 1;
     //ctx.fillText("cant 1 :  "+ uno, 600, 100);

    break;
case 2:
    dos = dos +1;
    total=total + 2;
  //  ctx.fillText("cant 2 :  "+ dos, 600, 200);

    break;
case 3:
    tres = tres + 1;
    total=total + 3;
  //  ctx.fillText("cant 3 :  "+ tres, 600, 250);
    ;
    break;
case 4:
    cuatro = cuatro + 1;
    total=total + 4;
    //ctx.fillText("cant 4 :  "+ cuatro, 600, 300);

    break;
case 5:
    cinco = cinco + 1;
    total=total + 5;
    //ctx.fillText("cant 5 :  "+ cinco, 600, 350);

    break;
case 6:
    seis = seis + 1;
    total=total + 6;
    //ctx.fillText("cant 6 :  "+ seis, 600, 400);

    break;

}



}

function preguntar(){
  var num = 100;
  var nombre = prompt ("Guardar resultados", "");
    if(nombre){
      //ctx.fillText("dado" + i +":  "+ nombre, 30, num);
      var nombres = nombre.split(",");
        for (var i = 0; i < nombres.length; i++) {
          ctx.fillText("arreglo: " + i +":  "+ nombres[i], 130, num);
          num=num+25;
        }
    }
  var numVeces = nombres.length ;
  ctx.fillText("dado" + i +":  "+ numVeces, 230, num);
  jugarCantidad(numVeces);
}
/*
function jugarCantidad(cant){

  for (var i = cant + 1; i < 6; i++) {
      var b = Math.floor(Math.random() * 6+1);
    nombres[i]=b;
  }
}*/
}

/*var nombre_array =
[valor1,
valor2,
...,
valorN];
var sin_inicializar =
new
Array(5);*/
function abrirNuevaVentana(){
var ventana=open();
ventana.document.write(valor);
ventana.document.write("<p>Otro párrafo</p>");
return false;
}
//Arreglos
var miArray = new Array(3)

miArray[0] = 155
miArray[1] = 4
miArray[2] = 499

for (i=0;i<3;i++){
   	document.write("Posición " + i + " del array: " + miArray[i])
   	document.write("<br>")
}

function crearCheckbox() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
}

var img="imagenes/dado.gif";
ctx.drawImage(img, 10, 10);
/*var b = Math.floor(Math.random() * 6+1);
var c = Math.floor(Math.random() * 6+1);
var d = Math.floor(Math.random() * 6+1);
var e = Math.floor(Math.random() * 6+1);
  var imgData = ctx.getImageData(10, 10, 50, 50);
  ctx.fillText("dado 1:  "+ a, 30, 30);
  ctx.fillText("dado 2:  "+ b, 30, 60);
  ctx.fillText("dado 3:  "+ d, 30, 90);
  ctx.fillText("dado 4:  "+ e, 30, 120);
  ctx.fillText("dado 5:  "+ a, 30, 150);
*/

function crearCheckbox() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "black";
//ctx.fillRect(10, 10, 50, 50);
ctx.font = "20px Georgia";
/*
var img = document.getElementById("imagen");
ctx.drawImage(img, 10, 10);
*/



function tirarDados() {
  var arraMi = new Array(6);
  var num =0;
for (var i = 0; i < arraMi.length; i++) {
  var a = Math.floor(Math.random() * 6+1);
  //ctx.fillText("dado" + i +":  "+ a, 30, num);
  arraMi[i] = a;
  ctx.fillText("Resultado: " + i +":  "+ arraMi[i], 130, num);
  num=num + 30;
}
preguntar();


function preguntar(){
  var num = 100;
var nombre = prompt ("Guardar resultados", "");
if(nombre){
  //ctx.fillText("dado" + i +":  "+ nombre, 30, num);
var nombres = nombre.split(",");
for (var i = 0; i < nombres.length; i++) {
  ctx.fillText("arreglo: " + i +":  "+ nombres[i], 30, num);
  num=num+25;
}

}
var numVeces = nombres.length ;

  ctx.fillText("dado" + i +":  "+ numVeces, 230, num);
  jugarCantidad(numVeces);
}


function pedirNumeroAleatorio(){
var a = Math.floor(Math.random() * 6+1);

}
function jugarCantidad(cant){

  for (var i = 0; i < cant; i++) {
    var z = Math.floor(Math.random() * 6+1);
    nuevoArreglo[i]=z;
    ctx.fillText("dado" + i +":  "+ z, 430, num);
    num=num+50;
  }
}
}



ultima version

function comenzarJuego(){
  //capturo el elemento canvas por medio de su id
var canvas = document.getElementById('canvas');
//le asigno con la funcion que es contenido 2d
ctx = canvas.getContext("2d");
//le asigno color con el estilo azul
ctx.fillStyle = "blue";
//dibujo un rectangulo en la posición x en 0 y en 0
//con un ancho de 1024 pixeles, alto 572  pixeles
ctx.rect(0, 0, 1024, 572);
//relleno el rectangulo
ctx.fill();
//fondo = ctx.getImageData(0, 0, 1024, 572);
//fondo.fill();
for (var i = 0; i < 50; i++) {
  imprimeEnemigos();
}
/*
var cnv = document.getElementById('canvas');
cnv.addEventListener(alert("click",comenzarJuego,true);
document.addEventListener("touchstart", moverNave, true);*/
}
function abajo(){
var posiciony=document.getElementById("canvas").offsetTop;
//var abajo = document.getElementById("canvas").style.top=posiciony + 20+"px";
//moverYa();
}
function crearJugador(){
  //capturo el elemento canvas por medio de su id
  var canvas2 = document.getElementById('canvas2');
  //le asigno con la funcion que es contenido 2d
  ctx2 = canvas2.getContext("2d");
  //le asigno color con el estilo azul
  ctx2.fillStyle = "green";
  ctx2.beginPath();
  ctx2.rect(0, 0, 20, 20);
  ctx2.fill();
  ctx2.closePath();
  setTimeout("mueveReloj();",100);

}
function mueveReloj(){
    moverjugador();
    comenzarJuego();
    setTimeout("mueveReloj()",20);
}
var posicionX=350;
var posicionX2=450;
var posY = 250;
var posY2 = 30;
var movx=5;
var movy=3;
var puntos=0;
function moverjugador(){
    if(posicionX >= 1004 || posicionX <=20)
      movx=movx*-1;
          if(posY >= 552 || posY <= 20)
    movy=movy*-1;
    posicionX=posicionX+movx;
    posicionX2=posicionX2+movx;
    posY=posY+movy;
    posY2=posY2+movy;
 if (posY == posicionX) {
   puntos=puntos+posY*3;
   var boton=document.getElementById('muestra');
   boton.value=puntos;
   boton.style.background="red";
   boton.style.color="black";
   posY=posY+movy;
   posY2=posY2+movy;
 }
      ctx2.beginPath();
      ctx2.clearRect(0,0,1024,572);
      ctx2.fillStyle = "black";
      ctx2.rect(posicionX, posY, 20, 20);
      ctx2.fill();
      ctx2.closePath();
      ctx2.beginPath();
      ctx2.fillStyle = "yellow";
      ctx2.rect(posY, posicionX, 20, 20);
      ctx2.fill();
      ctx2.closePath();
        imprimeEnemigos();
}

function imprimeEnemigos(){
var x = Math.floor(Math.random() * 1024);
var y = Math.floor(Math.random() * 572);
var colorR = Math.floor(Math.random() * 256);
var colorG = Math.floor(Math.random() * 256);
var colorB = Math.floor(Math.random() * 256);
  //defino el color
  ctx.fillStyle = "rgb("+colorR+","+colorG+","+colorB+")";
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  ctx.fill();
ctx.closePath();
}
