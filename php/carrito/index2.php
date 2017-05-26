<?php/*
class compras{
	//Atributos
	var $fecha;
	var $total;
	var $productos;
	//$f=date(DD/MM/YY);
	//constructor
	public function __construct($f){
		//inicializamos
		$this->fecha = $f;
		$this->productos=null;
	}
	//metodos
	
	public function getTotal(){
		return $this->total;
	}
	public setProductos($prod,$cant,$precio){
		if($this->productos != null){
			if(array_key_exists($prod,$this->productos)){
				$this->producto[$prod]["cantidad"]+=$cant;
			}else{
				$this->productos[$pro]["cantidad"]=$cant;
				$this->productos[$pro]["precio"]=$precio;
			}
		}else {
			$this->productos[$prod]["cantidad"]=$cant;
			$this->productos[$prod]["precio"]=$precio;
			}
	}
/*
	public function getProductos(){
		foreach($this->productos as $key => $valor){
			print "Producto: ".$key."Cantidad: ".$valor["$cantidad"]."Precio: ".$valor["precio"]."<br>"
		}
	}*/
}/*
$compra =new Compras("Martes 14 de Marzo 2017");
$compra->setProductos("jabon",1,35);*/echo "hsfhfhsj";
//$compra->getProductos();
?>
