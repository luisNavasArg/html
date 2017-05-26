<?php
	class Facebook{
	
	//public podemos acceder desde los metodos y atributos
	//private sólo puede ser llamado desde otro metodo del clase, no desde donde instanciamos un objeto
	//protected puede ser accedido por la clase, subclases, pero no por los objetos 
		//Atributos
		public $nombre;
		public $edad;
		private $pass;//contraseña

		//Metodos
		public function __construct($nombre, $edad, $pass){
			$this->nombre=$nombre;
			$this->edad=$edad;
			$this->pass=$pass;
		}
		public function verInformacion(){
			echo "Nombre: ".$this->nombre."<br>";
			echo "Edad: ".$this->edad."<br>";
			self::cambiarPass("1234");
			echo "Password: ".$this->pass."<br>";
		}
		private function cambiarPass($pass){
			$this->pass = $pass;
		}
	}
	
	$facebook = new Facebook("Luis Navas",45,"123456");
	
	//podemos acceder a la contraseña pero el atributo no
	$facebook->verInformacion();
	//$facebook->cambiarPass no accedemos ya que el metodo es de tipo private accedemos desde otro metodo
	

?>