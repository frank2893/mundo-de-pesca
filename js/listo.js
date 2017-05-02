
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

			/*document.getElementById('centro').style.backgroundImage = 
			"url('estilos/imagenes/listo/centro.png')";*/
		document.body.style.backgroundImage = "url('estilos/imagenes/inicio/fondo.png')";
		document.getElementById('centro').style.display = 'block';
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
		document.getElementById('titulo').style.width = anchoPantalla * 0.20 + 'px';
		document.getElementById('titulo').style.height = anchoPantalla * 0.040 + 'px';
		document.getElementById('btnJugar').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('btnJugar').style.height = altoPantalla * 0.065 + 'px';
		/*document.getElementById('centro').style.width = altoPantalla * 1.2 + 'px';
		document.getElementById('centro').style.height = altoPantalla * 0.60 + 'px';*/
		document.getElementById('texto').style.width = altoPantalla * 0.96 + 'px';
		document.getElementById('texto').style.height = altoPantalla * 0.35 + 'px';
		document.getElementById('texto').style.fontSize = altoPantalla * 0.04 + 'px';
		document.getElementById('btnRanking').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('btnRanking').style.height = altoPantalla * 0.065 + 'px';

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
		document.getElementById('titulo').style.top = altoPantalla * 0.17 + 'px';
		document.getElementById('btnJugar').style.top = altoPantalla * 0.65 + 'px';
		document.getElementById('btnJugar').style.left = anchoPantalla * 0.52 + 'px';
		document.getElementById('btnRanking').style.top = altoPantalla * 0.65 + 'px';
		document.getElementById('btnRanking').style.left = anchoPantalla * 0.37 + 'px';	
		document.getElementById('centro').style.bottom = 0 + 'px';
		document.getElementById('centro').style.left = 0 + 'px';
		document.getElementById('centro').style.width = anchoPantalla + 'px';
		document.getElementById('centro').style.height = anchoPantalla * 0.35 + 'px';	
		/*document.getElementById('centro').style.top = altoPantalla * 0.10 + $('#titulo').height() +'px';*/
		document.getElementById('texto').style.top = altoPantalla * 0.25 + + $('#titulo').height() +'px';
		}
		
	}else{

		/*document.getElementById('centro').style.backgroundImage = 
			"url('estilos/imagenes/listo/centrop.png')";*/
		document.body.style.backgroundImage = "url('estilos/imagenes/inicio/fondo.jpg')";
		document.getElementById('aviso_movil').style.display = 'none';
		document.getElementById('centro').style.display = 'none';
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
		document.getElementById('titulo').style.width = anchoPantalla * 0.80 + 'px';
		document.getElementById('titulo').style.height = anchoPantalla * 0.15 + 'px';
		document.getElementById('btnJugar').style.width = anchoPantalla * 0.28 + 'px';
		document.getElementById('btnJugar').style.height = altoPantalla * 0.060 + 'px';
		/*document.getElementById('centro').style.width = anchoPantalla * 0.9 + 'px';
		document.getElementById('centro').style.height = altoPantalla * 0.50 + 'px';*/
		document.getElementById('texto').style.width = anchoPantalla * 0.7 + 'px';
		document.getElementById('texto').style.height = altoPantalla * 0.60 + 'px';
		document.getElementById('texto').style.fontSize = altoPantalla * 0.03 + 'px';
		document.getElementById('btnRanking').style.width = anchoPantalla * 0.28 + 'px';
		document.getElementById('btnRanking').style.height = altoPantalla * 0.060 + 'px';

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
		document.getElementById('titulo').style.top = altoPantalla * 0.18 + 'px';
		document.getElementById('btnJugar').style.top = altoPantalla * 0.72 + 'px';
		document.getElementById('btnJugar').style.left = anchoPantalla * 0.58 + 'px';
		/*document.getElementById('centro').style.top = altoPantalla * 0.18 + $('#titulo').height() +'px';*/
		document.getElementById('texto').style.top = altoPantalla * 0.23 + + $('#titulo').height() +'px';
		document.getElementById('btnRanking').style.top = (altoPantalla * 0.72) + "px	";
		document.getElementById('btnRanking').style.left = anchoPantalla * 0.14 + 'px';
	}

	width = $('#titulo').width();
	document.getElementById('titulo').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px";

	/*width = $('#centro').width();
	document.getElementById('centro').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px";*/

	width = $('#texto').width();
	document.getElementById('texto').style.left = (anchoPantalla * 0.5) - (width * 0.465) + "px";
}

function irJuego(){
	window.location = "juego.php";
}

function irRanking(){
	window.location = "ranking.php";
}