<?php namespace claseMadre;

class Estaciones{
	//Atributos
	
	public $nombre=array("Las Heras","Hospitales","Patricios");
	//Metodos
	public function valorInicial($valorInicial){
				$cont=count($this->nombre);
		
		for($i=0; $i<$cont;$i++){		
		if($this->nombre[$i]== $valorInicial){ $valor=$i;}
		
		}
		
		for($j=$valor;$j<$cont;$j++)
		echo $this->nombre[$j]."<br>" ;
	}
	
	
	public function  recorrerEstaciones($estacionInicial,$estacionFinal){
	
	self::valorInicial($estacionInicial);
	
	
		
	}
}

?>