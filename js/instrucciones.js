
var instruccion = 1;
var music = false;

function isSafari(){
	return navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") == -1;
}

function validarDispositivo(){

var device = navigator.userAgent

return (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| 
	device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| 
	device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| 
	device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| 
	device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i));

}

$(window).load(function(){

	var audio;
	
	audio = $('<audio>');
	audio.attr('src', isSafari() ? 'sonido/audio.m4a':'sonido/audio.mp3');
	audio.attr('loop', 'true');
	audio.attr('style', 'display:none;');
	$('body').append(audio);

	$('[action]').css('cursor','pointer').click(function(){

		if(!music){
			document.getElementById('btnMusica').style.backgroundImage = 
			"url('estilos/imagenes/juego/musica.png')";
			audio[0].play();
			music = true;
		}else{
			document.getElementById('btnMusica').style.backgroundImage = 
			"url('estilos/imagenes/juego/musicastop.png')"
			audio[0].pause();
			music = false;
		}

	});

	reSize();
});

function reSize(){

	var altoPantalla = window.innerHeight;
	var anchoPantalla = window.innerWidth;
	var width;

	if(anchoPantalla >= altoPantalla){

		if (validarDispositivo()) {
			document.getElementById('aviso_movil').style.display = 'block';
		}else{

		document.getElementById('flechaIzq').style.backgroundImage = 
			"url('estilos/imagenes/instrucciones/flecha03.png')";
		document.getElementById('insTexto01').innerHTML = 
			"<b>¡Tienes 30 segundos para atrapar todos los regalos que puedas!</b>";

		document.body.style.backgroundImage = "url('estilos/imagenes/inicio/fond.jpg')";
		document.getElementById('ins02').style.display = 'block';
		document.getElementById('ins03').style.display = 'block';
		document.getElementById('ins04').style.display = 'block';
		document.getElementById('insTexto02').style.display = 'block';
		document.getElementById('insTexto03').style.display = 'block';
		document.getElementById('insTexto04').style.display = 'block';
		document.getElementById('flechaDer').style.display = 'none';
		document.getElementById('flechaIzq').style.display = 'none';

		document.getElementById('logo1').style.width = anchoPantalla * 0.067 + 'px';
		document.getElementById('logo1').style.height = anchoPantalla * 0.070 + 'px';
		document.getElementById('logo2').style.width = anchoPantalla * 0.067 + 'px';
		document.getElementById('logo2').style.height = anchoPantalla * 0.070 + 'px';
		document.getElementById('btnFacebook').style.width = anchoPantalla * 0.030 + 'px';
		document.getElementById('btnFacebook').style.height = anchoPantalla * 0.030 + 'px';
		document.getElementById('btnInstagram').style.width = anchoPantalla * 0.030 + 'px';
		document.getElementById('btnInstagram').style.height = anchoPantalla * 0.030 + 'px';
		document.getElementById('btnTwitter').style.width = anchoPantalla * 0.030 + 'px';
		document.getElementById('btnTwitter').style.height = anchoPantalla * 0.030 + 'px';
		document.getElementById('btnMusica').style.width = anchoPantalla * 0.045 + 'px';
		document.getElementById('btnMusica').style.height = anchoPantalla * 0.045 + 'px';
		/*document.getElementById('terminos').style.fontSize = anchoPantalla * 0.009 + 'px';*/
		document.getElementById('titulo').style.width = anchoPantalla * 0.365 + 'px';
		document.getElementById('titulo').style.height = anchoPantalla * 0.050 + 'px';
		document.getElementById('ins01').style.width = anchoPantalla * 0.16 + 'px';
		document.getElementById('ins01').style.height = anchoPantalla * 0.13 + 'px';
		document.getElementById('ins02').style.width = anchoPantalla * 0.16 + 'px';
		document.getElementById('ins02').style.height = anchoPantalla * 0.13 + 'px';
		document.getElementById('ins03').style.width = anchoPantalla * 0.16 + 'px';
		document.getElementById('ins03').style.height = anchoPantalla * 0.13 + 'px';
		document.getElementById('ins04').style.width = anchoPantalla * 0.16 + 'px';
		document.getElementById('ins04').style.height = anchoPantalla * 0.13 + 'px';
		document.getElementById('insTexto01').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('insTexto02').style.width = anchoPantalla * 0.16 + 'px';
		document.getElementById('insTexto03').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('insTexto04').style.width = anchoPantalla * 0.11 + 'px';
		document.getElementById('btnJugar').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('btnJugar').style.height = altoPantalla * 0.065 + 'px';
		/*document.getElementById('btnRegresar').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('btnRegresar').style.height = anchoPantalla * 0.035 + 'px';*/
		document.getElementById('insTexto01').style.fontSize = anchoPantalla * 0.012 + 'px';
		document.getElementById('insTexto02').style.fontSize = anchoPantalla * 0.012 + 'px';
		document.getElementById('insTexto03').style.fontSize = anchoPantalla * 0.012 + 'px';
		document.getElementById('insTexto04').style.fontSize = anchoPantalla * 0.012 + 'px';
		/*document.getElementById('textoTerminos').style.fontSize = altoPantalla * 0.022 + 'px';
		document.getElementById('textoTerminos').style.width = altoPantalla * 1 + 'px';
		document.getElementById('textoTerminos').style.height = altoPantalla * 0.45 + 'px';
		document.getElementById('tituloPanel').style.width = anchoPantalla * 0.45 + 'px';
		document.getElementById('tituloPanel').style.height = anchoPantalla * 0.04 + 'px';
		document.getElementById('btnJugar02').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('btnJugar02').style.height = anchoPantalla * 0.035 + 'px';*/

		document.getElementById('logo1').style.top = (altoPantalla * 0.04) + "px	";
		document.getElementById('logo1').style.left = (anchoPantalla * 0.03) + "px	";
		document.getElementById('logo2').style.top = (altoPantalla * 0.035) + "px	";
		document.getElementById('logo2').style.left = (anchoPantalla * 0.14) + "px	";
		document.getElementById('btnFacebook').style.top = (altoPantalla * 0.05) + "px";
		document.getElementById('btnFacebook').style.left = (anchoPantalla * 0.85) + "px";
		document.getElementById('btnInstagram').style.top = (altoPantalla * 0.05) + "px	";
		document.getElementById('btnInstagram').style.left = (anchoPantalla * 0.95) + "px	";
		document.getElementById('btnTwitter').style.top = (altoPantalla * 0.05) + "px	";
		document.getElementById('btnTwitter').style.left = (anchoPantalla * 0.90) + "px	";
		document.getElementById('btnMusica').style.top = altoPantalla * 0.88 + 'px';
		document.getElementById('btnMusica').style.left = anchoPantalla * 0.94 + 'px';
		/*document.getElementById('terminos').style.top = (altoPantalla * 0.96) + "px	";*/
		document.getElementById('titulo').style.top = altoPantalla * 0.20 + 'px';
		document.getElementById('ins01').style.top = altoPantalla * 0.42 + 'px';
		document.getElementById('ins01').style.left = anchoPantalla * 0.080 + 'px';
		document.getElementById('ins02').style.top = altoPantalla * 0.42 + 'px';
		document.getElementById('ins02').style.left = anchoPantalla * 0.31 + 'px';
		document.getElementById('ins03').style.top = altoPantalla * 0.42 + 'px';
		document.getElementById('ins03').style.left = anchoPantalla * 0.55 + 'px';
		document.getElementById('ins04').style.top = altoPantalla * 0.42 + 'px';
		document.getElementById('ins04').style.left = anchoPantalla * 0.76 + 'px';
		/*document.getElementById('btnRegresar').style.top = altoPantalla * 0.88 + 'px';
		document.getElementById('btnRegresar').style.left = anchoPantalla * 0.35 + 'px';*/
		document.getElementById('insTexto01').style.top = altoPantalla * 0.42 + $('#ins01').height() + 'px';
		document.getElementById('insTexto01').style.left = anchoPantalla * 0.10 + 'px';
		document.getElementById('insTexto02').style.top = altoPantalla * 0.42 + $('#ins02').height() + 'px';
		document.getElementById('insTexto02').style.left = anchoPantalla * 0.31 + 'px';
		document.getElementById('insTexto03').style.top = altoPantalla * 0.42 + $('#ins03').height() + 'px';
		document.getElementById('insTexto03').style.left = anchoPantalla * 0.57 + 'px';
		document.getElementById('insTexto04').style.top = altoPantalla * 0.42 + $('#ins04').height() + 'px';
		document.getElementById('insTexto04').style.left = anchoPantalla * 0.79 + 'px';
		document.getElementById('btnJugar').style.top = altoPantalla * 0.88 + 'px';
		document.getElementById('btnJugar').style.left = anchoPantalla * 0.35 + 'px';
		/*document.getElementById('tituloPanel').style.top = altoPantalla * 0.15 + 'px';
		document.getElementById('btnJugar02').style.top = altoPantalla * 0.88 + 'px';
		document.getElementById('btnJugar02').style.left = anchoPantalla * 0.53 + 'px';
		document.getElementById('textoTerminos').style.top = altoPantalla * 0.18 + $('#tituloPanel').height()*1.2 + 'px';*/
		}

	}else{

		document.body.style.backgroundImage = "url('estilos/imagenes/inicio/fond.jpg')";
		document.getElementById('aviso_movil').style.display = 'none';

		document.getElementById('ins02').style.display = 'none';
		document.getElementById('ins03').style.display = 'none';
		document.getElementById('ins04').style.display = 'none';
		document.getElementById('insTexto02').style.display = 'none';
		document.getElementById('insTexto03').style.display = 'none';
		document.getElementById('insTexto04').style.display = 'none';
		document.getElementById('flechaDer').style.display = 'block';
		document.getElementById('flechaIzq').style.display = 'block';

		document.getElementById('logo1').style.width = altoPantalla * 0.11 + 'px';
		document.getElementById('logo1').style.height = altoPantalla * 0.12 + 'px';
		document.getElementById('logo2').style.width = altoPantalla * 0.11 + 'px';
		document.getElementById('logo2').style.height = altoPantalla * 0.12 + 'px';
		document.getElementById('btnFacebook').style.width = altoPantalla * 0.05 + 'px';
		document.getElementById('btnFacebook').style.height = altoPantalla * 0.05 + 'px';
		document.getElementById('btnInstagram').style.width = altoPantalla * 0.05 + 'px';
		document.getElementById('btnInstagram').style.height = altoPantalla * 0.05 + 'px';
		document.getElementById('btnTwitter').style.width = altoPantalla * 0.05 + 'px';
		document.getElementById('btnTwitter').style.height = altoPantalla * 0.05 + 'px';
		document.getElementById('btnMusica').style.width = altoPantalla * 0.075 + 'px';
		document.getElementById('btnMusica').style.height = altoPantalla * 0.075 + 'px';
		/*document.getElementById('terminos').style.fontSize = anchoPantalla * 0.030 + 'px';*/
		document.getElementById('titulo').style.width = anchoPantalla * 0.80 + 'px';
		document.getElementById('titulo').style.height = anchoPantalla * 0.15 + 'px';
		document.getElementById('ins01').style.width = anchoPantalla * 0.42 + 'px';
		document.getElementById('ins01').style.height = anchoPantalla * 0.45 + 'px';
		document.getElementById('insTexto01').style.width = anchoPantalla * 0.52 + 'px';
		document.getElementById('insTexto01').style.fontSize = altoPantalla * 0.03 + 'px';
		document.getElementById('btnJugar').style.width = anchoPantalla * 0.30 + 'px';
		document.getElementById('btnJugar').style.height = altoPantalla * 0.065 + 'px';
		document.getElementById('flechaDer').style.width = altoPantalla * 0.08 + 'px';
		document.getElementById('flechaDer').style.height = altoPantalla * 0.10 + 'px';
		document.getElementById('flechaIzq').style.width = altoPantalla * 0.08 + 'px';
		document.getElementById('flechaIzq').style.height = altoPantalla * 0.10 + 'px';
		/*document.getElementById('tituloPanel').style.width = altoPantalla * 0.45 + 'px';
		document.getElementById('textoTerminos').style.fontSize = anchoPantalla * 0.025 + 'px';
		document.getElementById('textoTerminos').style.width = anchoPantalla * 0.80 + 'px';
		document.getElementById('textoTerminos').style.height = altoPantalla * 0.40 + 'px';
		document.getElementById('tituloPanel').style.height = altoPantalla * 0.08 + 'px';
		document.getElementById('btnRegresar').style.width = anchoPantalla * 0.28 + 'px';
		document.getElementById('btnRegresar').style.height = altoPantalla * 0.060 + 'px';
		document.getElementById('btnJugar02').style.width = anchoPantalla * 0.28 + 'px';
		document.getElementById('btnJugar02').style.height = altoPantalla * 0.060 + 'px';*/

		document.getElementById('logo1').style.top = (altoPantalla * 0.04) + "px	";
		document.getElementById('logo1').style.left = (anchoPantalla * 0.08) + "px	";
		document.getElementById('logo2').style.top = (altoPantalla * 0.035) + "px	";
		document.getElementById('logo2').style.left = (anchoPantalla * 0.74) + "px	";
		document.getElementById('btnFacebook').style.top = (altoPantalla * 0.9) + "px";
		document.getElementById('btnFacebook').style.left = (anchoPantalla * 0.325) + "px";
		document.getElementById('btnInstagram').style.top = (altoPantalla * 0.9) + "px	";
		document.getElementById('btnInstagram').style.left = (anchoPantalla * 0.600) + "px	";
		document.getElementById('btnTwitter').style.top = (altoPantalla * 0.9) + "px	";
		document.getElementById('btnTwitter').style.left = (anchoPantalla * 0.465) + "px	";
		document.getElementById('btnMusica').style.top = altoPantalla * 0.90 + 'px';
		document.getElementById('btnMusica').style.left = anchoPantalla * 0.84 + 'px';
		/*document.getElementById('terminos').style.top = (altoPantalla * 0.97) + "px	";*/
		document.getElementById('titulo').style.top = altoPantalla * 0.18 + 'px';
		document.getElementById('ins01').style.top = altoPantalla * 0.28 + 'px';
		document.getElementById('insTexto01').style.top = altoPantalla * 0.28 + $('#ins01').height() + 'px';
		document.getElementById('btnJugar').style.top = altoPantalla * 0.80 + 'px';
		document.getElementById('btnJugar').style.left = anchoPantalla * 0.35 + 'px';
		document.getElementById('flechaIzq').style.top = altoPantalla * 0.28 + $('#ins01').height()/2 + 'px';
		document.getElementById('flechaDer').style.top = altoPantalla * 0.28 + $('#ins01').height()/2 +'px';
		/*document.getElementById('btnRegresar').style.top = altoPantalla * 0.80 + 'px';
		document.getElementById('btnRegresar').style.left = anchoPantalla * 0.14 + 'px';
		document.getElementById('btnJugar02').style.top = (altoPantalla * 0.80) + "px	";
		document.getElementById('btnJugar02').style.left = anchoPantalla * 0.58 + 'px';
		document.getElementById('tituloPanel').style.top = altoPantalla * 0.15 + 'px';
		document.getElementById('textoTerminos').style.top = altoPantalla * 0.12 + $('#logo1').height()*1.2 + 'px';*/

		width = $('#ins01').width();
		document.getElementById('ins01').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";
		width = $('#insTexto01').width();
		document.getElementById('insTexto01').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";
	}

	/*width = $('#terminos').width();
	document.getElementById('terminos').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";*/

	width = $('#titulo').width();
	document.getElementById('titulo').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#btnJugar').width();
	document.getElementById('btnJugar').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	/*width = $('#textoTerminos').width();
	document.getElementById('textoTerminos').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#tituloPanel').width();
	document.getElementById('tituloPanel').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";*/
}

/*function mostrarTerminos(){
        document.getElementById('terminosPanel').style.display = 'block';
}

function ocultarTerminos(){
        document.getElementById('terminosPanel').style.display = 'none';
}*/

function irJuego(){
	window.location = "juego.php";
}

function pasarInstruccion(n){

	if ((instruccion + n) > 0 && (instruccion + n) < 5) {
		instruccion += n;
	}

	document.getElementById('ins01').style.backgroundImage = 
	"url('estilos/imagenes/instrucciones/ins0" + instruccion + ".png')";

	if(instruccion == 1){
		document.getElementById('flechaIzq').style.backgroundImage = 
			"url('estilos/imagenes/instrucciones/flecha03.png')";
		document.getElementById('insTexto01').innerHTML = 
			"<b>Tienes 30 segundos para lograr el puntaje mas alto</b>";
	}else{
		if(instruccion == 2){
			document.getElementById('flechaIzq').style.backgroundImage = 
			"url('estilos/imagenes/instrucciones/flecha01.png')";
			document.getElementById('flechaDer').style.backgroundImage = 
			"url('estilos/imagenes/instrucciones/flecha02.png')";
			document.getElementById('insTexto01').innerHTML = 
				"<b>Si estas en tu computador cliquea los peces o si estas en tu celular usa tus dedos.</b>";
		}else{
			if(instruccion == 3){
				document.getElementById('flechaIzq').style.backgroundImage = 
				"url('estilos/imagenes/instrucciones/flecha01.png')";
				document.getElementById('flechaDer').style.backgroundImage = 
				"url('estilos/imagenes/instrucciones/flecha02.png')";
				document.getElementById('insTexto01').innerHTML = 
					"<b>¡Los peces negros quitan 25pts, los otros peces dan 30 y 40 puntos y el pinguino da 50 pts!</b>";
			}else{
				if(instruccion == 4){
					document.getElementById('flechaDer').style.backgroundImage = 
						"url('estilos/imagenes/instrucciones/flecha04.png')";
					document.getElementById('insTexto01').innerHTML = 
						"<b>¡Inténtalo las veces que quieras y participa por una cortesía doble en nuestro mar de pelotas!</b>";
				}
			}
		}
	}

}