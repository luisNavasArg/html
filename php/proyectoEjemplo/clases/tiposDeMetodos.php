<?php
//El m�todo est�tico pertenece a la clase, pero no accede a los atributos de una instancia. el mismo se puede llamar sin crear un objeto
//Una propiedad declarada como static no puede ser accedida con un objeto de clase instanciado(Un m�todo est�tico si lo puede hacer)
class Pagina{
//Atributos 
public $nombre = "Programando con Luis Navas";
public static $url="www.luisnavas.com";
//Metodos
	public function bienvenida(){
		echo "Bienvenidos a <b>".$this->nombre."</b> la pagina es: <b>".
		/*$this-> de esta forma no podemos acceder a la variable  */self::$url./*con Pagina:: tambi�n*/"</b><br>";
	}
	public static function bienvenida2(){
		echo "Bienvenidos a ". self::$url ;
	}
}
//$pagina =new Pagina();
//$pagina->bienvenida();
Pagina::bienvenida2();
?>