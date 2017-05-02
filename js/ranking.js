
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

function reSize(){

	var altoPantalla = window.innerHeight;
	var anchoPantalla = window.innerWidth;
	var width;

	if(anchoPantalla >= altoPantalla){
		if (validarDispositivo()) {
			document.getElementById('aviso_movil').style.display = 'block';
		}else{

			document.body.style.backgroundImage = "url('estilos/imagenes/inicio/fondo.png')";
		document.getElementById('lateral_izq').style.display = 'block';
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
		document.getElementById('titulo').style.width = anchoPantalla * 0.35 + 'px';
		document.getElementById('titulo').style.height = anchoPantalla * 0.04 + 'px';
		document.getElementById('lateral_izq').style.width = anchoPantalla + 'px';
		document.getElementById('lateral_izq').style.height = anchoPantalla * 0.40 + 'px';
		document.getElementById('tabla').style.width = altoPantalla * 0.70 + 'px';
		document.getElementById('tabla').style.fontSize = altoPantalla * 0.022 + 'px';
		document.getElementById('texto').style.fontSize = altoPantalla * 0.030 + 'px';
		document.getElementById('btnRegresar').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('btnRegresar').style.height = anchoPantalla * 0.035 + 'px';
		document.getElementById('btnJugar').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('btnJugar').style.height = anchoPantalla * 0.035 + 'px';
		document.getElementById('btnMusica').style.width = anchoPantalla * 0.045 + 'px';
		document.getElementById('btnMusica').style.height = anchoPantalla * 0.045 + 'px';

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
		document.getElementById('fondo_tabla').style.top = altoPantalla * -0.35 + $('#fondo_tabla').height() +'px';
		document.getElementById('titulo').style.top = altoPantalla * 0.10 + 'px';
		document.getElementById('texto').style.top = altoPantalla * 0.12 + 'px';
		document.getElementById('lateral_izq').style.bottom = 0 + 'px';
		document.getElementById('lateral_izq').style.left = 0 + 'px';
		document.getElementById('tabla').style.top = (altoPantalla * 0.22) + "px";
		document.getElementById('btnRegresar').style.top = altoPantalla * 0.88 + 'px';
		document.getElementById('btnRegresar').style.left = anchoPantalla * 0.35 + 'px';
		document.getElementById('btnJugar').style.top = altoPantalla * 0.88 + 'px';
		document.getElementById('btnJugar').style.left = anchoPantalla * 0.53 + 'px';
		document.getElementById('btnMusica').style.top = altoPantalla * 0.88 + 'px';
		document.getElementById('btnMusica').style.left = anchoPantalla * 0.94 + 'px';
		}

	}else{

		document.body.style.backgroundImage = "url('estilos/imagenes/inicio/fondo.jpg')";
		document.getElementById('aviso_movil').style.display = 'none';
		document.getElementById('lateral_izq').style.display = 'none';
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
		document.getElementById('titulo').style.width = anchoPantalla * 0.60 + 'px';
		document.getElementById('titulo').style.height = anchoPantalla * 0.10 + 'px';
		document.getElementById('fondo_tabla').style.width = anchoPantalla * 1 + 'px';
		document.getElementById('fondo_tabla').style.height = altoPantalla * 0.53 + 'px';
		document.getElementById('tabla').style.width = anchoPantalla * 0.85 + 'px';
		document.getElementById('tabla').style.height = altoPantalla * 0.10 + 'px';
		document.getElementById('tabla').style.fontSize = altoPantalla * 0.020 + 'px';
		document.getElementById('texto').style.fontSize = anchoPantalla * 0.060 + 'px';
		document.getElementById('textopequeno').style.fontSize = altoPantalla * 0.018 + 'px';
		document.getElementById('lateral_izq').style.width = altoPantalla * 0.75 + 'px';
		document.getElementById('lateral_izq').style.height = altoPantalla * 0.75 + 'px';
		document.getElementById('btnRegresar').style.width = anchoPantalla * 0.28 + 'px';
		document.getElementById('btnRegresar').style.height = altoPantalla * 0.060 + 'px';
		document.getElementById('btnJugar').style.width = anchoPantalla * 0.28 + 'px';
		document.getElementById('btnJugar').style.height = altoPantalla * 0.060 + 'px';
		document.getElementById('btnMusica').style.width = altoPantalla * 0.075 + 'px';
		document.getElementById('btnMusica').style.height = altoPantalla * 0.075 + 'px';

		document.getElementById('logo1').style.top = (altoPantalla * 0.04) + "px	";
		document.getElementById('logo1').style.left = (anchoPantalla * 0.08) + "px	";
		document.getElementById('logo2').style.top = (altoPantalla * 0.035) + "px	";
		document.getElementById('logo2').style.left = (anchoPantalla * 0.74) + "px	";
		document.getElementById('btnFacebook').style.top = (altoPantalla * 0.93) + "px";
		document.getElementById('btnFacebook').style.left = (anchoPantalla * 0.325) + "px";
		document.getElementById('btnInstagram').style.top = (altoPantalla * 0.93) + "px	";
		document.getElementById('btnInstagram').style.left = (anchoPantalla * 0.600) + "px	";
		document.getElementById('btnTwitter').style.top = (altoPantalla * 0.93) + "px	";
		document.getElementById('btnTwitter').style.left = (anchoPantalla * 0.465) + "px	";
		document.getElementById('titulo').style.top = altoPantalla * 0.18 + 'px';
		document.getElementById('tabla').style.top = altoPantalla * -0.25 + $('#fondo_tabla').height() + "px";
		/*document.getElementById('fondo_tabla').style.top = altoPantalla * -0.23 + $('#fondo_tabla').height() +'px';
		document.getElementById('lateral_izq').style.top = altoPantalla * -0.18 + 'px';
		document.getElementById('lateral_izq').style.left = altoPantalla * -0.07 + 'px';
		document.getElementById('lateral_der').style.top = altoPantalla * 0.13 + 'px';
		document.getElementById('lateral_der').style.left = altoPantalla * 0.04 + 'px';*/
		document.getElementById('lateral_izq').style.top = altoPantalla * -0.18 + 'px';
		document.getElementById('lateral_izq').style.left = altoPantalla * -0.07 + 'px';
		document.getElementById('btnRegresar').style.top = altoPantalla * 0.84 + 'px';
		document.getElementById('btnRegresar').style.left = anchoPantalla * 0.14 + 'px';
		document.getElementById('btnJugar').style.top = altoPantalla * 0.84 + 'px';
		document.getElementById('btnJugar').style.left = anchoPantalla * 0.58 + 'px';
		document.getElementById('btnMusica').style.top = altoPantalla * 0.90 + 'px';
		document.getElementById('btnMusica').style.left = anchoPantalla * 0.84 + 'px';
	}

	width = $('#titulo').width();
	document.getElementById('titulo').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#fondo_tabla').width();
	document.getElementById('fondo_tabla').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px";

	width = $('#tabla').width();
	document.getElementById('tabla').style.left = (anchoPantalla * 0.5) - (width * 0.56) + "px	";

	width = $('#texto').width();
	document.getElementById('texto').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";
}

function irJuego(){
	window.location = "juego.php";
}

function irHome(){
	window.location = "index.html";
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
