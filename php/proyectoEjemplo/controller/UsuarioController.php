<?php
class UsuariosController extends ControladorBase{
	public function __construct(){
		parent::__construct();
	} 

	public function index(){
		//creamos el objeto usuario
		$usuario =new Usuario();
		
		//consegumos todos los usuarios		
		$allusers = $usuario->getAll();
		
		//Cargamos la vista y le pasamos valores
		$this->view("index",array(
			"allusers" => $allusers,
			"hola" => "Ejemplo MVC"
			));
	}

	
	
	public function crear(){
		if(isset($_POST["nombre"])){
			//creamos un usuario
			$usuario = new Usuario();			
			/*$nombre=$_POST["nombre"];
			$apellido=$_POST["apellido"];
			$Email=$_POST["Email"];
			$password=sha1($_POST["password"]);
			
			$usuario->setNombre($nombre);
			$usuario->setApellido($apellido);
			$usuario->setEmail($Email);
			$usuario->setPasword($password);
			
			$save=$usuario->save();*/
			$usuario->setNombre($_POST["nombre"]);
		        $usuario->setApellido($_POST["apellido"]);
            		$usuario->setEmail($_POST["email"]);
            		$usuario->setPassword(sha1($_POST["password"]));
            		$save=$usuario->save();
		}
		
		$this->redirect("Usuarios","index");
	}
	
	public function borrar(){
		if(isset($_GET["id"])){
			$id=(int)$_GET["id"];
			
			$usuario = new Usuario();
			$usuario->deleteById($id);
		}
		$this->redirect();

	}

	public function hola(){
		$usuarios =new UsuariosModel();
		$usu=$usuarios->getUnUsuario(),
		var_dump($usu);

	}

}

?>
