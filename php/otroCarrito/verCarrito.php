<?php
include("lib_carrito.php");
?>

<html>
<head>
    <title>Ver Producto</title>
</head>

<body>

<?php
$_SESSION["carrito"]->imprime_carrito();
?>
<br>
<br>
<a href="index.php">Volver</a>

</body>
</html>

