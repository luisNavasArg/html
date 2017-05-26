<?php
//Agregamos en el archivo la configuración global
require_once 'config/global.php';

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
