window.onload=function ejecuta(){

//document.getElementById("men").onclick = muestraMensaje;
//document.querySelector("p").style.backgroundColor = "gren";
//document.querySelector("#principal p:last-child").style.backgroundColor = "green";
//document.querySelector("div p:last-child").style.backgroundColor = "green";

var elem = document.querySelectorAll("#principal p");//[1].onclick=saludo;
for (var i = 0; i < elem.length; i++) {
  elem[i].onclick=saludo;
}
/*
for (var i = 0; i < 3; i++) {
  document.getElementsByTagName("p")[i].style.backgroundColor = "red";

}*/
//x.getElementsByTagName("P")[0].style.backgroundColor = "red";
// Asignar la función externa al elemento
//document.getElementById("pinchable");
  //document.getElementsByTagName("p")[2].onmouseover=this.style.color='silver';
//document.getElementsByTagName("p")[2].onclick=saludo;
  //itera en el documento y crea arreglo de pas etiquetas p
 //document.getElementsByTagName('p')[0] =saludo;
//document.getElementById("men").onclick = saludo;
}
function saludo(){
  alert('Hola mundo!');
}
// Función externa
function muestraMensaje() {
  alert('Gracias por hacer click');
//document.querySelector(#men).style.backgroundColor = "gren";
}
function asignarValor(){


      document.getElementById(“txtTabla”).value = “Tutorial Javascript”;
}
