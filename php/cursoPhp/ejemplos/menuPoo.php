<?php
class Menu{
//Atributos o variables con argumento privado
	private $enlace = array();
	private $titulo = array();
//metodos
	public function opcion($en,$ti){
		$this->enlace[]=$en;
		$this->titulo[]=$ti;
	}
	public function mostrarMenu(){
		echo "<table><tr><td>";
		for($i=0; $i < count($this->enlace);$i++){
			
			echo '<a  href="'.$this->enlace[$i].'">'.$this->titulo[$i].'</a><hr style="hight:200px; width:250px; ">';
		}
		echo "</th></td></table>";

		
	}

	public function mostrarMenuHorizontal(){
		echo "<table><td>";
		for($i=0; $i < count($this->enlace);$i++){
			
			echo '<a href="'.$this->enlace[$i].'">'.$this->titulo[$i].'</a><hr style="hight:200px; width:250px;">';
		}

		
	}
}
echo '<h1 style="align:center;">Bienvenidos al menú</h1>';
$menu = new Menu();
$menu->opcion("index.php","Inicio");
$menu->opcion("index.php","Actividad");
$menu->mostrarMenu(); 
?>
