<?php
require_once "clases/claseMadre.php";
$estaciones = new claseMadre\Estaciones();
//cuando usamos namespace colocamos el nombre y la barra invertida para instanciar la clase
$estaciones->recorrerEstaciones("Las Heras","Patricios");
$estaciones->valor;

?>