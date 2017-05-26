<?
include("controlador/Controlador.php");
    if (isset($_POST['Submit'])) {echo "Se envio el formulario";}
?>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Inicio</title>
	</head>
<body>
	<h1>Título</h1>
 <footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:lpipnavas@gmail.com">
  lpipnavas@gmail.com</a>.</p>
</footer> 
	<form id="form1" name="form1" method="post" action="">
    <input type="text" name="texto" id="texto" />
    <input name="Submit" type="submit" value="Submit" />
	</form>
	<a href="agregarProducto.php?id=12&nombre=silla+modelo+jupiter&precio=80">Agregar</a>
		<br>
		<br>
	<a href="agregarProducto.php?id=16&nombre=mesa+camilla+oferta&precio=29">Agregar</a>
		<br>
		<br>
	<a href="agregarProducto.php?id=18&nombre=Silla+oficina&precio=102">Agregar</a>
		<br>
		<br>
	<a href="agregarProducto.php?id=98&nombre=Aparador+cocina+blanco&precio=200">Agregar</a>
		<br>
		<br>
		<br>
	<a href="verCarrito.php">Ver carrito</a>
</body>
</html> 



