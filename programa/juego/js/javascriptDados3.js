document.addEventListener('DOMContentLoaded', bienvenida);
//variables globales
var uno=0;
var dos=0;
var tres=0;
var cuatro=0;
var cinco=0;
var seis=0;
var total =0;
var jugadoresCant = new Array();
var arraMi = new Array(6);
var puntos = new Array();
var jugadores = new Array();
  function bienvenida(){
    //Capturo la etiqueta h1 por su id
    var c = document.getElementById('titulo');
    // le asigno elvalor
    c.innerHTML ="Juego de dados";
    //Capturo la etiqueta h2
    var d = document.getElementById('texto2');
    //Capturo la fecha en una variable
    var da = new Date();
    // declaro una variable donde voy a guardar lo que escriba en la caja de mensaje
    var cnaJugadores = prompt ("Bienvenidos,Ingresea cantidad de jugadores", "");
    //Creo un arreglo con la cantidad que escribieron en el mensaje
    var cntjg = new Array(cnaJugadores);
    //Muestro en la etiqueta h2 concateno la variable con el texto
    d.innerHTML=cnaJugadores +' Jugadores';

    document.getElementById('boton1').addEventListener('click',function() {
      for (var i = 0; i < arraMi.length; i++) {
        var a = Math.floor(Math.random() * 6+1);
        arraMi[i] = a;
        document.getElementsByTagName('td').item(i).innerHTML = arraMi[i];
      }
    });
  }





  var numVeces=0;

  function GuardarValores(){
      var nombre = prompt ("Guardar resultados", "");
        if(nombre){
          var nombres = nombre.split(" ");
        }
      numVeces = nombres.length ;
      for (name in nombres){
        document.getElementsByTagName('li').item(name).innerHTML = nombres[name];
      }
      jugarOtra(numVeces);
    }

    function jugarOtra(numVeces) {
      for (var i = numVeces; i < 5; i++) {
        var a = Math.floor(Math.random() * 6+1);
        jugadoresCant.push(a);
      }
    }

    function agregarJugador(juega){
      jugador.push(juega);
    }

    function mostrarValores(){
      for (name in jugadoresCant){
        document.getElementsByTagName('h5')[name].innerHTML = jugadoresCant[name];
      }
    }

    var li=" ";
    var cla=" ";

    function agregarClase(li,cla){
      document.getElementById(li).classList.add(cla);
    }

    function limpiarValores(){
      numVeces=0;
      for (name in arraMi){
        document.getElementsByTagName('h5')[name].innerHTML = " ";
        document.getElementsByTagName('li')[name].innerHTML = " ";
        document.getElementsByTagName('td')[name].innerHTML = " ";
        jugadoresCant = new Array();
      }


    }
function juego(){
  var juag = new Array();
  function agregCantidadJug(juag){
    this.juag.push(juag);
  }

}
function mas(ali){
var llenaCampo = new juego();
llenaCampo.agregCantidadJug(ali);
alert(llenaCampo[0]);
}
