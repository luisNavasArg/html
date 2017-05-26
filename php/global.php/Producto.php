<?php
	class Producto{
		public $nombre;
		public $precio;
		public $des;
		
		public function __construct(){
		$this->nombre = " ";
		$this->precio = 0;
		$this->des =" ";
		}

    public function getNombre(){
        return $nombre;
    }

    public function setNombre($nombre){
        $this->nombre = $nombre;
    }

    public function getPrecio() {
        return $precio;
    }

    public function setPrecio($precio) {
        $this->precio = $precio;
    }

		public function getDesc() {
        return $desc;
    }

    public function setDesc($desc) {
        $this->desc = $desc;
    }


}

$producto = new Producto();
$producto->setNombre("Jabon");
$producto->setPrecio(13.00);
$producto->setDesc("por unidad");
echo "Producto ".$producto->nombre." venta por ".$producto->desc." con un precio de : ".$producto->precio;




?>
