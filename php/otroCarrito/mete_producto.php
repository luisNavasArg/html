<?php
include('lib_carrito.php');
$_SESSION["carrito"]->introduce_producto($_GET["id"], $_GET["nombre"], $_GET["precio"]);
?>

<html>
<head>
    <title>Introduce Producto</title>
</head>
<body>

Producto introducido.
<br>
<br>
<a href="index.php">- Volver</a>
<br>
<br>
<a href="verCarrito.php">- Ver carrito</a>

</body>
</html>

