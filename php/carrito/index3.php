<?php
//Declaramos constantes
define("CONTROLADOR_DEFECTO", "Usuarios");
define("ACCION_DEFECTO", "index");

//Agregamos también la Base para los controladores
require_once 'core/ControladorBase.php';

//las Funciones para el controlador frontal
require_once 'core/ControladorFrontal.func.php';

//Cargamos los controladores y acciones
if(isset($_GET["controller"])){
    $controllerObj=cargarControlador($_GET["controller"]);
    lanzarAccion($controllerObj);
}else{
    $controllerObj=cargarControlador(CONTROLADOR_DEFECTO);
    lanzarAccion($controllerObj);
}
?>
