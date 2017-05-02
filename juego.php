<?php
session_start();
?>
<!DOCTYPE html>
<html>
<html lang="es">
	<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="icon" href="favicon.ico" type="image/x-icon" />
	<title>Mar de Pelotas</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="estilos/juego.css">
	

</head>
<body onload="reSize();" onresize="reSize();">

	<div id="cargando">
		<div id="imagenCarga"></div>
		<div id="textoCarga">Cargando...</div>
	</div>
	
	<div id="contenedor">
		<!--<div id="zorro"></div>-->

		<div id="personaje"></div> 
		<div id="caja1"></div>
		<div id="caja2"></div>
		<div id="caja3"></div>
		<div id="caja4"></div>
		<div id="caja5"></div>
		<div id="caja6"></div>
		<div id="caja7"></div>
		<!--<div id="cabecera"></div>-->
		<div id="telon"></div>
		<div id="reloj"></div>
		<div id="texto01">Tu puntaje es de</div>
		<div id="puntajeFinal">0</div>
		<div id="puntajeLogo"></div>
		<!--<div id="izqcopo"></div>
		<div id="dercopo"></div>-->
		<div id="btnCompartir" onclick="compartirFacebook();"></div>
		<div id="btnVolver" onclick="volverJugar();"></div>
		<div id="btnRegistrar" onclick="IrRegistro(); <?php $_SESSION["jugo"] = true; ?>"></div>
		<div id="puntaje">Puntaje <strong>0</strong></div>
		<div id="bienvenida"></div>
		<a href="http://www.centrocomercialsantafe.com/medellin" target="_blank"><div id="logo1"></div></a>
		<a href="http://www.centrocomercialsantafe.com/medellin/eventos/eventodetalle/250/mar_de_pelotas" target="_blank"><div id="logo2"></div></a>
		<div id="btnMusica" action="sound-switch"></div>
		<div id="segundos">00</div>
		<div onmousedown="movCam(2);"  id="derecha"></div>
		<div onmousedown="movCam(1);"  id="izquierda"></div>
		<div id="texto"></div>
	</div>

	<?php 
			include 'conexion.php';

            $con = new conexion();

            $con->conectar();


			$sql = "select puntaje from participante order by puntaje desc LIMIT 1";
			$consulta = mysqli_query($con->getcon(),$sql);

			$fila = mysqli_fetch_array($consulta);

			$puntajeMejor = 'Mejor '.$fila["puntaje"];
			echo '<div id="mejor">'.$puntajeMejor.'</div>';
        	
	?>

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/codigo.js"></script>
	<script type="text/javascript"> reSize();</script>

</body>
</html>