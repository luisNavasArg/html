<?php
$db_host="localhost";
$db_user="root";
$db_password="123456";
$db_name="prueba";
$db_table_name="usuarios";
$db_connection = mysql_connect($db_host, $db_user, $db_password);
 
isset($db_connection){
echo "bien";

}else "mal";

/* public function save(){
        $query="INSERT INTO usuarios (id,nombre,apellido,email,password)
                VALUES(NULL,
                       '".$this->nombre."',
                       '".$this->apellido."',
                       '".$this->email."',
                       '".$this->password."');";
        $save=$this->db()->query($query);
        
        return $save;
    }

if (!$db_connection) {
	die('No se ha podido conectar a la base de datos');
}
$subs_name = utf8_decode($_POST['nombre']);
$subs_last = utf8_decode($_POST['apellido']);
$subs_email = utf8_decode($_POST['email']);
$subs_pass = utf8_decode($_POST['password']);
 
	
$insert_value = "INSERT INTO usuarios (id,nombre,apellido,email,password)
                VALUES(NULL,
                       '".$subs_name."',
                       '".$subs_last."',
                       '".$subs_email."',
                       '".$subs_pass."');";
 
mysql_select_db($db_name, $db_connection);
$retry_value = mysql_query($insert_value, $db_connection);
 
if (!$retry_value) {
   die('Error: ' . mysql_error());
}
	
header('Location: index.php');

 
mysql_close($db_connection);
*/		
?>
