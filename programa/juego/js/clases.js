function fondo(){
    var lienzo = document.getElementById('canvas');
    ctx = lienzo.getContext("2d");
    ctx.fillStyle='red';
    ctx.rect(0,0,1024,572);
    ctx.fill();

}
var valorX=30;
function enviarTexto(){
  var texto = document.getElementById('texto1').value;
  ctx.fillStyle='black';
  ctx.font="25px Verdana";
  ctx.fillText(texto,40, valorX);
  valorX=valorX+20;
}

function subir(){
  
}
function escribirCanvas(texto){
  ctx.fillStyle='black';
  ctx.fillText(texto,10, 20);
}
