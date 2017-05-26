<?php

class Persona{
	//Atributos
	public $nombre=array();
	public $apellido=array();
	//Metodos
	public function guardar($nombre,$apellido){
		$this->nombre[]=$nombre;
		$this->apellido[]=$apellido;
		// tres formas distintas para llamar a una funcion dentro de la misma clase
		//self::mensaje("Agregado este Nombre:".$nombre."Y Apellido: ".$apellido. "<br>");
		//$this->mensaje("Agregado este Nombre:".$nombre."Y Apellido: ".$apellido. "<br>");
		//Persona::mensaje("Agregado este Nombre:".$nombre."Y Apellido: ".$apellido. "<br>");
	}
	public function mensaje($mensaje){
	echo $mensaje;
	}
	public function mostrarNombre(){
	$int =count($this->nombre);
			for($i=0; $i < $int; $i++){
				self::formato($this->nombre[$i],$this->apellido[$i]);
			}


	}
	public function formato($nombre,$apellido){
	echo "Nombre: ".$nombre."| Apellido: ".$apellido."<br>";
	}
	
}
?>