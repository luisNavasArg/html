<?php
trait Persona2{
//ATributos

public $nombre;
//Metodos

public function mostrarNombre(){
echo $this->nombre;
}
abstract function asignarNombre($nombre);
}

trait Trabajador{
protected function mensaje(){
echo "Y soy un trabajador";
} 
}
class Persona{
use Persona2, Trabajador;

public function asignarNombre($nombre){
//llamado de la funcion protected de mensaje da prioridad a la variable nombre
$this->nombre = self::mensaje().$nombre;
}
}

$persona = new Persona();
$persona->asignarNombre("Luis");
$persona->mostrarNombre();
//no podemos llamar a un metodo protectec deforma directa
/*$persona->mensaje();*/

?>
