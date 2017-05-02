<?php

include "conexion.php";
$con = new conexion();
$con->conectar();

        $sql = "select * from participante order by puntaje desc LIMIT 20";
		$consulta = mysqli_query($con->getcon(),$sql);
		$nf = mysqli_num_rows($consulta);
        if ($nf > 0)
        {	
        for($x=0;$x<$nf;$x++)
        	{
            $fila = mysqli_fetch_array($consulta);

            $sqlc = 'update participante_b set ganador = 1 where cedula = ' . $fila['cedula'];
            mysqli_query($con->getcon(),$sqlc);

            $sqllista = "insert into ganadores_1 (cedula, nombre, telefono, correo, intentos, puntaje, fecha, ganador, barrio, nacimiento)"
                        . " values('" . $file["cedula"] . "','" . $fila["nombre"] . "','" . $fila["telefono"] . "','"
                        . $fila["correo"] . "','". $fila["intentos"] ."','" . $fila['puntaje'] ."',". $fila["fecha"] .",'1','". $fila['barrio'] ."','". $fila['fecha'] ."')";
            mysqli_query($con->getcon(),$sqllista);
       	} 
       }

$sql = "TRUNCATE TABLE participante";
mysqli_query($con->getcon(),$sql);

?>