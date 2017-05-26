<?php
class EntidadBase{
	private $table;
	private $db;
	private $conectar;
	
	public function __construct($table){
		$this->table = (string) $table;

	require_once 'Conectar.php';
	$this->conectar = new Conectar();
	$this->db=$this->conectar->conexion();	
	}
	
	public function getConectar(){
		return $this->conectar;
	}

	public function db(){
		return $this->db;
	}
	
	public function getAll(){
		$query=$this->db->query("SELECT * FROM $this->table ORDER BY  id DESC");
		
		//devolvemos el resultado en forma de arreglo de objeto
		while($row = $query->fech_object()){
			$resultSet[]=$row;
		}
		
		return $resultSet;
	}
	
	public function getById($id){
		$query=$this->db->query("SELECT * FROM $this->table WHERE id=$id");
		
		if($row=$query->fetch_object()){
			$resultSet=$row;
		}

			return $resultSet;
	}
	
	public function getBy($column, $value){		
		$query=$this->db->query("SELECT * FROM $this->table WHERE $column='$value'");
		
		while($row = $query->fetch_object()){
			$resultSet[]=$row;
		}
		return $resultSet;
	}
	

	public function deleteBiId($id){		
		$query = $this->db->query("DELETE FROM $this->table WHERE id=$id");
		return $query
	}
	
	public function deleteBy($column, $value){
		$query = $this->db->query("DELETE FROM $this->table WHERE $column = $value");
		return $query;
	}
	
	
}

?>
