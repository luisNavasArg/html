<?php
class Aprendices{
//Atributos
public $nombre = Mariana;
//metodos
public function hablar(){
 echo "Hola soy ".$this->nombre;
}
}
$persona = new Aprendices();
echo $persona->hablar();
?>
