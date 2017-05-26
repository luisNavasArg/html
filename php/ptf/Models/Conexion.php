<?php namespace Models;

	class Conexion{
		private $datos = array(
			"host" => "localhost",
			"user" => "root",
			"pass" => "123456",
			"db"   => "programatf"
		);
	private $con;

	public function __construct(){
		//$this->con = new \mysqli($this->datos['host'],$this->datos['user'],$this->datos['pass'],$this->datos['db']);

		$con = new mysqli("localhost","root","123456","programatf");
    if ($mysql->connect_error)
      die("Problemas con la conexión a la base de datos");  		
	}

	public function consultaSimple($sql){
		$this->con->query($sql);
	}
	
	public function consultaRetorno($sql){
		$datos->con->query($sql);
	return $datos;
	
	}


}



?>
