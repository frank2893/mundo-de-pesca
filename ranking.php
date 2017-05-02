<!DOCTYPE html>
<html lang="es">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="icon" href="favicon.ico" type="image/x-icon" />
	<title>Mar de Pelotas</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="estilos/ranking.css">
	
</head>
<body onunload="reSize();" onload="reSize();" onresize="reSize();">

	<div id="aviso_movil">
		<div id="imagen_aviso"></div>
	</div>
	<div id="bienvenida"></div>
	<a href="http://www.centrocomercialsantafe.com/medellin" target="_blank"><div id="logo1"></div></a>
	<a href="http://www.centrocomercialsantafe.com/medellin/eventos/eventodetalle/250/mar_de_pelotas" target="_blank"><div id="logo2"></div></a>
	<div id="lateral_izq"></div>
	<div id="lateral_der"></div>
	<a href="https://www.facebook.com/SantafeMedellinMiMundo/" target="_blank"><div id="btnFacebook"></div></a>
	<a href="https://twitter.com/SantafeMedellin" target="_blank"><div id="btnTwitter"></div></a>
	<a href="https://www.instagram.com/santafemedellin/" target="_blank"><div id="btnInstagram"></div></a>
	<div id="titulo"></div>
	<div id="fondo_tabla"></div>
	<div id="ganadores">
	<?php
		include 'conexion.php';

		$con = new conexion();
        $con->conectar();
        $sql = "select left(cedula,5) as cedulas, nombre, puntaje from participante order by puntaje desc LIMIT 10";
		$consulta = mysqli_query($con->getcon(),$sql);
		$nf = mysqli_num_rows($consulta);
        if ($nf > 0)
        {	
        	print("<table id='tabla' border ='0'>");
            print("<tr>");
            print("<th>Nombre</th>");
            print("<th>Cédula</th>");
            print("<th>Puntaje</th>");
            print("</tr>");
        for($x=0;$x<$nf;$x++)
        	{
            $fila = mysqli_fetch_array($consulta);
                print("<tr>");
                print ("<td>".$fila['nombre']."</td>");
                print ("<td>".$fila['cedulas']."..."."</td>");
                print ("<td>".$fila['puntaje']."</td>");
                print ("</tr>");
        	} 
           print("</table>");
       	}else{
       		print("<table id='tabla' border ='0'>");
       		print("</table>");
       	} 
  	?>
	</div>
	<div id="texto"><center><b></b></center></div>
	<div id="textopequeno"><center></center></div>
	<div id="btnRegresar" onclick="irHome()"></div>
	<div id="btnJugar" onclick="irJuego();"></div>
	<div id="btnMusica" action="sound-switch"></div>

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/ranking.js"></script> 
	<script type="text/javascript"> reSize(); </script>
	
</body>
</html>