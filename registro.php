<?php
session_start();

if (!isset($_SESSION["jugo"])) {
    ?>
    <script type="text/javascript">
        document.location = "index";
    </script>

    <?php
}

?>
<!DOCTYPE html>
<html lang="es">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
	<title>Mar de Pelotas</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="estilos/registro.css">

</head>
<body onunload="reSize();" onload="reSize();" onresize="reSize();">
    <div id="error"></div>
	<?php
        include 'conexion.php';
        if (isset($_POST["boton"])) {

            $con = new conexion();

            $con->conectar();


            $sql = "select * from participante_b"; 

            $res = mysqli_query($con->getcon(),$sql);

            $exite = 0;

            while ($vec = mysqli_fetch_array($res)) {
          
                if ($vec[0] == $_POST["cedula"]) {
                	$existe = 1;
                }
            }

            if($existe == 1){

            	$sql = "select * from participante_b where cedula = ". $_POST["cedula"];
            	$res = mysqli_query($con->getcon(),$sql);

            	$participante = mysqli_fetch_array($res);

            	$intentos = $participante[4];
            	$ganador = $participante[7];
            	$puntos = $participante[5];

            	if($intentos < 3000 && $ganador == 0){

            		$sql = 'update participante_b set intentos = '. ($intentos + 1) .' where cedula = '. $_POST["cedula"];
            		mysqli_query($con->getcon(),$sql);


                    $sql = "select * from participante"; 

                    $res = mysqli_query($con->getcon(),$sql);

                    $ex = 0;

                    while ($vec = mysqli_fetch_array($res)) {
                  
                        if ($vec[0] == $_POST["cedula"]) {
                            $ex = 1;
                        }
                    }

                    echo $ex;

                    if($ex == 1){

                        $sql = 'update participante set intentos = '. ($intentos + 1) .' where cedula = '. $_POST["cedula"];
                        mysqli_query($con->getcon(),$sql);

                    }else{

                        $sql = "insert into participante (cedula, nombre, telefono, correo, intentos, puntaje, fecha, ganador, barrio, nacimiento)"
                        . " values('" . $_POST["cedula"] . "','" . $_POST["nombre"] . "','" . $_POST["telefono"] . "','"
                        . $_POST["correo"] . "','". ($intentos + 1) ."','" . $_COOKIE['variable'] ."',". time() .",'0','". $_POST['barrio'] ."','". $_POST['fecha'] ."')";        

                        mysqli_query($con->getcon(),$sql);

                    }

            		if($_COOKIE['variable'] > $puntos){
            			$sql = 'update participante_b set puntaje = '. $_COOKIE['variable'] .' where cedula = '. $_POST["cedula"];
	            		mysqli_query($con->getcon(),$sql);

	            		$sql = 'update participante set puntaje = '. $_COOKIE['variable'] .' where cedula = '. $_POST["cedula"];
	            		mysqli_query($con->getcon(),$sql);
            		}

                    $_SESSION["listo"] = true;
                    $_SESSION["jugo"] = null;
                    ?>
                    <script type="text/javascript">
                        document.location = "listo.php";
                    </script>
                    
                    <?php

            	}else{
            		if ($ganador != 0) {
                         ?>
                            <script type="text/javascript">
                                document.getElementById('error').innerHTML = '¡Este documento resulto ganador en semanas anteriores, no puede participar nuevamente!';
                            </script>
                        <?php
            		}else{
                        ?>
                            <script type="text/javascript">
                                document.getElementById('error').innerHTML = '¡Este documento ya participo 3 veces, no puede participar nuevamente!';
                            </script>
                        <?php
            		}
            	}

            }else{
            	$sql = "insert into participante (cedula, nombre, telefono, correo, intentos, puntaje, fecha, ganador, barrio, nacimiento)"
	                    . " values('" . $_POST["cedula"] . "','" . $_POST["nombre"] . "','" . $_POST["telefono"] . "','"
	                    . $_POST["correo"] . "','1','" . $_COOKIE['variable'] ."',". time() .",'0','". $_POST['barrio'] ."','". $_POST['fecha'] ."')";        

	            mysqli_query($con->getcon(),$sql);

	            $sql = "insert into participante_b (cedula, nombre, telefono, correo, intentos, puntaje, fecha, ganador, barrio, nacimiento)"
	                    . " values('" . $_POST["cedula"] . "','" . $_POST["nombre"] . "','" . $_POST["telefono"] . "','"
	                    . $_POST["correo"] . "','1','" . $_COOKIE['variable'] ."',". time() .",'0','". $_POST['barrio'] ."','". $_POST['fecha'] ."')";        

	            mysqli_query($con->getcon(),$sql);

                $_SESSION["listo"] = true;
                $_SESSION["jugo"] = null;
                ?>
                <script type="text/javascript">
                    document.location = "listo.php";
                </script>
                
                <?php
            }    
            
        }
    ?>
	<!--<div id="oso"></div>
    <div id="ave"></div>
    <div id="osoAve"></div>-->
    <div id="aviso_movil">
        <div id="imagen_aviso"></div>
    </div>
	<div id="bienvenida"></div>
    <a href="http://www.centrocomercialsantafe.com/medellin" target="_blank"><div id="logo1"></div></a>
    <a href="http://www.centrocomercialsantafe.com/medellin/eventos/eventodetalle/250/mar_de_pelotas" target="_blank"><div id="logo2"></div></a>
    <a href="https://www.facebook.com/SantafeMedellinMiMundo/" target="_blank"><div id="btnFacebook"></div></a>
    <a href="https://twitter.com/SantafeMedellin" target="_blank"><div id="btnTwitter"></div></a>
    <a href="https://www.instagram.com/santafemedellin/" target="_blank"><div id="btnInstagram"></div></a>
	<div id="btnMusica" action="sound-switch"></div>
	<div id="titulo"></div>
	<a id="terminos" href="#" onclick="mostrarTerminos();"><b>Acepta Términos y condiciones</b></a> 
	<div id="text01"><b>Registra tus datos para entrar a nuestro ranking y si tienes uno de los 20 mejores puntajes al finalizar la semana, ¡recibirás una cortesía doble para disfrutar de la piscina de pelotas!</b></div>

    
	<form id="form" name="form" method="post">

        <input type="text" placeholder="Nombre" maxlength="15" name="nombre" id="nombre" class="barra" required="true" />

        <input type="text" placeholder="Cedula"  maxlength="11" name="cedula" id="cedula" class="barra" required="true"/> 

        <input type="text" placeholder="Telefono" maxlength="11" name="telefono" id="telefono" class="barra" required="true"/> 

        <input type="email" placeholder="Correo" maxlength="40" name="correo" id="correo" class="barra" required="true"/>

        <input type="text" placeholder="Barrio" maxlength="40" name="barrio" id="barrio" class="barra" required="true"/>

        <input type="Text" placeholder="Fecha de Nacimiento" onfocus="(this.type='date')" maxlength="40" name="fecha" id="fecha" class="barra" style="color: black;" required="true"/>

        <div id="checkbox">
            <input type="checkbox" name="terminos" value="" id="check" required="true"> 
        </div>
			
		</input>

        <button type="submit" name="boton" value="" id="boton">
            <div id="btnEnviar"></div>
        </button>

    </form>

    <div id="text02"><b>Recuerda que sólo podrás ganar una vez. Al momento de reclamar tu premio en el Centro Comercial Santafé Medellín deberás presentarte con tu documento de identidad.</b></div>

    <div id="terminosPanel">
		<div id="tituloPanel"></div>
		<div id="textoTerminos">

            El concurso “Atrapa-Peces”  (en adelante “el concurso”) se realizará desde el lunes 24 de abril de 2017 hasta el viernes 19 de mayo de 2017, en la ciudad de Medellín mediante el sitio web del Centro Comercial Santafé Medellín.</br><br>

            La finalidad del concurso es entregar semanalmente 10 boletas dobles para el Mar de Pelotas.</br><br>

            <strong>1.  Participantes</strong></br>

            1.1. Deben ser titular de los datos suministrados.</br>
            1.2. Deben contar con las destrezas necesarias para realizar la mecánica del juego.</br>
            1.3. Pueden participar menores de edad, pero con autorización de los padres y en caso de ser ganador, debe ser el padre de familia o acudiente el encargado de reclamar el premio.</br>
            1.4. No podrán participar empleados del Centro Comercial Santafé Medellín, ni empleados de los locales del mismo.</br></br>

            <strong>2.  Mecánica</strong></br>

			2.1.	Los participantes deben ingresar a nuestro sitio web y participar en el juego que se estará promocionando.</br>
			2.2. Deben atrapar la mayor cantidad de peces en 30 segundos. Los peces negros quitan 25 puntos, los otros peces dan 30 y 40 puntos y el pinguino da 50 puntos.</br>
			2.3. Los participantes podrán participar las veces que quieran, pero solo podrán ser elegidos como ganadores una sola vez.</br> 
			2.4. El concurso se cierra los jueves de cada semana a las 6 p.m., para anunciar a los ganadores el viernes siguiente a las 12 m.</br>
			2.5. Los participantes deberán registrarse para que así su puntaje pueda entrar al ranking.</br> 
			2.6. Las personas deberán llenar toda la información requerida para registrarse, ya que estos son los datos que se utilizarán para notificar a los ganadores. En caso de ingresar datos inválidos y no poder ser contactada la persona ganadora perderá su premio.</br>
			2.7. Las (10) personas ganadoras semanales serán aquellas con los 10 puntajes más altos. Las personas ganadoras serán notificadas por correo electrónico ó mediante una llamada telefónica.</br>
			2.8. La caducidad para reclamar el premio es hasta el día sábado 20 de mayo a las 12 m.</br>
			2.9. El premio no podrá ser canjeado por el valor de las boletas. Solo se entregarán las entradas físicas.</br>
			3.0. Cada boleta es válida desde el viernes 28 de abril de 2017 hasta el domingo 21 de mayo de 2017.</br>
			3.1. Para ingresar al mar de pelotas, es obligatorio tener afiliación a EPS y/o Sisbén.</br>
			3.2. Al ingresar al evento Mar de Pelotas se acepta el reglamento del evento y se realiza de manera voluntaria y opcional.</br>
            3.3. El Centro Comercial Santafé Medellín no se hace responsable por las lesiones ocurridas en las actividades del Mar de Pelotas, pues son un riego inherente a la actividad.</br>
            3.4. La disponibilidad de los turnos está sujeta al número de usuarios.</br>
            3.5. Al participar en el concurso aceptas nuestra política para tratamiento de datos personales, consignado en nuestro sitio web http://www.centrocomercialsantafe.com/medellin/politicasdeprivacidad. Los datos suministrados serán utilizados para contactar los ganadores.</br>
		</div>
		<div id="btnRegresar" onclick="ocultarTerminos();"></div>
	</div>


	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/registro.js"></script>
	<script type="text/javascript"> reSize(); </script>
</body>
</html>