<?php
class Alumno {
	//Atributos
	public $nombre = array();
	public $apellido = array();
	
	//Metodos
	/*public function guardar($nombre, $apellido){
			//$this->nombre[] = $nombre;
			//$this->apellido[] = $apellido;
	echo "Entramos";
	}
	/*public function mostrar(){
		for($i=0; $i < count($this->nombre); $i++){
		self::formato($this->nombre[$i],$this->apellido[$i]);	
		
		}
	}*/
	public function formato($nombre,$apellido){
	echo 'Nombre: '.$nombre.'Apellido: '.$apellido.'<br>';
	}
	echo "Bienvenidos a la clase";
}
	$alumno = new Alumno();
	$alumno->nombre[0]="Luis";
	$alumno->apellido[0]="Navas";
	//$alumno->guadar("Luis","Navas");
	//$alumno->guadar("Vladimir","Jerez");
	//$alumno->mostrar();
	echo 'Nombre: '.$nombre.'Apellido: '.$apellido.'<br>';
?>