<?php

$cars=array
  (
  "Volvo"=>array
  (
  "XC60",
  "XC90"
  ),
  "BMW"=>array
  (
  "X3",
  "X5"
  ),
  "Toyota"=>array
  (
  "Highlander"
  )
  );
  class autos{
  //Atributos
  public $marca; 
  public $ano;
  
  //Metodos
  public function arrancar($velocidad){
  
  }
  
  }

echo "Normal count: " . count($cars)."<br>";
echo "Recursive count: " . count($cars,1);
?>