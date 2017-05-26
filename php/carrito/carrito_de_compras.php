<?php
//Declaracion de constantes
require_once "config/global.php";
require_once "config/database.php";
require_once "core/Conectar.php";
//	comprobar si hay o no carrito de compras
/*if (!isset($_SESSION["ocarrito"])){
    $_SESSION["ocarrito"] = new Carrito();
} 
*/

class Compras{
	public $fecha;
	public $total;
	public $producto;
	public $cantidad;
	public function __construct(){
		$this->fecha = date("Y-m-d");
		$total=0;
		$productos=null;
	}
	public function agregarProducto($cantidad,$prod){
	

	$this->producto[$prod]=$cantidad;

		
	}


	public function mostrarProductos(){
		while(current($this->producto["productos"])){
			echo key($this->producto["productos"])."<br>";
			next($this->producto["productos"]);
		}
		
	}


	public function mostrar(){

		echo "<table><tr><th>Producto</th><th>cantidad</th></tr>";
		foreach($this->producto as $uno => $dos )
		{
			echo "<tr><td> " . $uno." </td><td> ".$dos."</tr>";
			
		}
		echo "</td></tr></table>";
}



}


$compra = new Compras();
$compra->agregarProducto(45,"jabon");
$compra->agregarProducto(30,"nevex");
$compra->agregarProducto(34,"jabon");
$compra->agregarProducto(45,"nevex");
$compra->mostrar();
//$compra->imprime_carrito(;






?>
