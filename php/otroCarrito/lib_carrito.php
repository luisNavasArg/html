<?php

class Carrito{
	public $num_productos;
	public $id_prod;
	public $nombre_prod;
	public $precio_prod;

	public function introduce_producto($id,$nombre,$pre){
    $this->id_prod=$id;
    $this->nombre_prod=$nombre;
    $this->precio_prod=$pre;
    $this->num_productos=$this->num_productos+1;
echo "Id ".$this->id_prod." nombre: ".$this->nombre_prod." Precio: ".$this->precio_prod.$this->num_productos;
	}

	public function elimina_producto($linea){
    $this->id_prod[$linea]=0;
}
	public function imprime_carrito(){
    /*
$suma = 0;
    echo '<table border=1 cellpadding="3">
    <tr>
    <td><b>Nombre producto</b></td>
    <td><b>Precio</b></td>
    <td> </td>
    </tr>';
    for ($i=0;$i<$this->num_productos;$i++){
       if($this->id_prod[$i]!=0){
          echo '<tr>';
          echo "<td>" . $this->nombre_prod[$i] . "</td>";
          echo "<td>" . $this->precio_prod[$i] . "</td>";
          echo "<td><a href='eliminar_producto.php?linea=$i'>Eliminar producto</td>";
          echo '</tr>';
          $suma += $this->precio_prod[$i];
       }
    }
    //muestro el total
    echo "<tr><td><b>TOTAL:</b></td><td> <b>$suma</b></td><td> </td></tr>";
    //total más IVA
    echo "<tr><td><b>IVA (16%):</b></td><td> <b>" . $suma * 1.16 . "</b></td><td> </td></tr>";
    echo "</table>";*/
	for($i=0; $i<$this->num_productos;$i++){
echo "asdjsajdhsjdhaj";

}
		

}





}

if (!isset($_SESSION["carrito"])){
    $_SESSION["carrito"] = new Carrito();

} 

?>

 
