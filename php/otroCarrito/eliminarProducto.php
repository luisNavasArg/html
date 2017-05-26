<?php
include("lib_carrito.php");
$_SESSION["carrito"]->elimina_producto($_GET["linea"]);
?>

<html>
<head>
    <title>Introduce Producto</title>
</head>

<body>

Producto eliminado.
<br>
<br>
<br>
<a href="index.php">- Volver</a>
<br>
<br>
<a href="verCarrito.php">- Ver carrito</a>

</body>
</html> 
