<?php
	class Vehiculo{
	//Herencia significa que se pueden crear nuevas clases a partir de ella,que tendrá todos los atributos y metodos de su super clase o clase padre, la cuál sele podrá añadir nuevos atributos y clases
	//Recordemos que php no permite herencia multiple, en pocas palabras deriva de una clase única
	public $motor=false;
	public $marca;
	public $color;
	//Metodos
	public function estado(){
		if($this->motor){
			echo "El motor est&aacute; encendido. <br>";
		}else {
				echo "El motor est&aacute; apagado <br>";
			}
	
	}
	public  function encender(){
		if($this->motor){
			echo "Cuidado el motor est&aacute encendido; <br>";
			
		}else {
			echo "El motor est&aacute; encendiendo <br>";
			$this->motor=true;
			
			
		}
		self::estado();
	}
	}
	class autobus{
	
	}
	
	class moto extends Vehiculo{
		//prueba de acceso si cambiamos a private el acceso de la funcion estado
		public function estadoMoto(){
			$this->estado();
			//la única forma de acceder al 
			echo "La moto";
		}
	}
	class Cuatrimoto extends Moto{
	// la herencia es de moto pero también hereda de la clase Vehiculo 
		
	}
	
	$vehiculo =new Vehiculo();
	//$vehiculo->estado(); Siendo public funciona llamar desde otra clase
	$vehiculo->encender();
	//$vehiculo->estado();
	
	$moto =new moto();
	//$moto->estado();
	//$moto->encender();
	$moto->estadoMoto();
	$cuatrimoto = new Cuatrimoto();
	$cuatrimoto->estadoMoto();
	$cuatrimoto->encender();
	
	
?>