<?php
//utilizamos el operador implements, todos los metodos de una i terfaz deben se implementados dentro de la clase , se pueden implementar mas de una clase separada por comas
//las interfaces pueden heredar de las clases
interface Automovil{
	//metodos
	public function encender();
	public function apagar();
}
interface Gasolina extends Automovil{
	public function vaciarTanque();
	public function llenarTanque($cant);
}

class Deportivo implements Gasolina{
//Atributos 
private $estado = false;
public $tanque = 0;
//Metodos
	public function estado(){
		if($this->estado){
			echo "El Auto está encendido y tiene  ".$this->tanque." de litros en el tanque";
		}else {
			echo "El auto está apagado<br>";
		}
	}
	public function encender(){
		if($this->estado){
			echo "No puedes encender dos veces el auto<br>";
		}else{
			if($this->tanque<=0){
				echo "Usted no puede encender el auto no tiene gasolina<br>";
			}else{
			echo "Auto encendido<br>";
			$this->estado=true;
			}
		}
	}
	public function apagar(){
			if($this->estado){
			echo "El auto está apagado";
			$this->estado=false;
		}else{
			echo "El auto ya está apagado<br>";
			
		}
	}
	public function vaciarTanque(){
		$this->tanque=0;
	}
	public function llenarTanque($cant){
		$this->tanque=$cant;
	}
		public function usar($km){
			if($this->estado){
				$reducir = $km/3;
				$this->tanque = $this->tanque - $reducir;
				if($this->tanque<=0)
					$this->estado =false;
			}else{
				echo "El auto está apagado por eso no se puede usar<br>";
			}
		}
}


$obj = new Deportivo();
//$obj->ver();/*si no tenemos todos los metodos de la interface no mostraria nada*/
$obj->estado();
$obj->llenarTanque(34);
$obj->encender();
$obj->estado();
$obj->usar(100);

$obj->estado();
$obj->apagar();
$obj->estado();
//$obj->apagar();
//$obj->usar();
?>