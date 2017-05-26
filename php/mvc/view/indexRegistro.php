<html>
<head>
<meta charset="utf-8">
<title>Formulario de Registro SCIII</title>
<link href="estilos.css" rel="stylesheet" type="text/css">
</head>
 
<body>
<div class="group">
  <form action="indexRegistro.php" method="post" class="col-lg-5">
            <h3>Añadir usuario</h3>
            <hr/>
            Nombre: <input type="text" name="nombre" class="form-control"/>
            Apellido: <input type="text" name="apellido" class="form-control"/>
            Email: <input type="text" name="email" class="form-control"/>
            Contraseña: <input type="password" name="password" class="form-control"/>
            <input type="submit" value="enviar" class="btn btn-success"/>
        </form>

  
</div>
<?php
 $db_host="localhost";
$db_user="root";
$db_password="123456";
$db_name="prueba";
$db_table_name="usuarios";
$db_connection = mysql_connect($db_host, $db_user, $db_password);



 if (isset($_POST['nombre']))
    {
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$email = $_POST['email'];
$pass =$_POST['password'];
	
$insert_value = "INSERT INTO usuarios (id,nombre,apellido,email,password)
                VALUES(NULL,
                       '".$nombre."',
                       '".$apellido."',
                       '".$email."',
                       '".$pass."');";

    } 
?>
</body>
</html>
