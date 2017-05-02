<?php
session_start();

/*if (!isset($_SESSION["listo"])) {
    ?>
    <script type="text/javascript">
        document.location = "index";
    </script>

    <?php
}*/
$_SESSION["listo"] = null;

?>
<!DOCTYPE html>
<html lang="es">
	<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="icon" href="favicon.ico" type="image/x-icon" />
	<title>Mar de Pelotas</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="estilos/listo.css">

</head>
<body onunload="reSize();" onload="reSize();" onresize="reSize();">

	<div id="aviso_movil">
		<div id="imagen_aviso"></div>
	</div>
	<div id="bienvenida"></div>
	<a href="http://www.centrocomercialsantafe.com/medellin" target="_blank"><div id="logo1"></div></a>
	<a href="http://www.centrocomercialsantafe.com/medellin/eventos/eventodetalle/250/mar_de_pelotas" target="_blank"><div id="logo2"></div></a>
	<a href="https://www.facebook.com/SantafeMedellinMiMundo/" target="_blank"><div id="btnFacebook"></div></a>
	<a href="https://twitter.com/SantafeMedellin" target="_blank"><div id="btnTwitter"></div></a>
	<a href="https://www.instagram.com/santafemedellin/" target="_blank"><div id="btnInstagram"></div></a>
	<div id="titulo"></div>
	<div id="btnMusica" action="sound-switch"></div>
	<div id="centro"></div>
	<div id="texto">¡Ya ingresaste a nuestro ranking de posiciones! ¿Te asusta no ser el mas rápido?, No te preocupes, si no quedas entre los 20 primeros, podrás seguir participando hasta el 19 de mayo. ¡Recuerda que hay ganadores cada semana!</div>
	<div id="btnRanking" onclick="irRanking();"></div>
	<div id="btnJugar" onclick="irJuego();"></div>
	

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/listo.js"></script>
	<script type="text/javascript"> reSize(); </script>
</body>
</html>