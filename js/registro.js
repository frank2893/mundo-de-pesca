
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

var form = document.getElementById('form'); 
form.noValidate = true;
form.addEventListener('submit', function(event) {
	
	        if (!event.target.checkValidity()) {
	            event.preventDefault(); 
	            alert('Por favor, rellene el formulario correctamente.'); 
	        }
		
    }, false);


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

$('input[name="telefono"], input[name="cedula"]').keyup(function () { 
	this.value = this.value.replace(/[^0-9\.]/g,'');
});

$('input[name="nombre"]').keyup(function () { 
	this.value = this.value.replace(/[^A-zÁ-ú\.\s]/g,'');
});



$('#checkbox').click(function(){

	if ($("#check").attr("checked")) {
		$("#check").attr("checked", false);
		document.getElementById('checkbox').style.backgroundColor = '#fff';
		document.getElementById('checkbox').style.border = '3px solid #FF4136';
		
	}else{
		$("#check").attr("checked", true);
		document.getElementById('checkbox').style.backgroundColor = '#FF4136';
		document.getElementById('checkbox').style.border = '3px solid #fff';
		
	}

});


function reSize(){

	var altoPantalla = window.innerHeight;
	var anchoPantalla = window.innerWidth;
	var width;

	if(anchoPantalla >= altoPantalla){

		if (validarDispositivo()) {
			document.getElementById('aviso_movil').style.display = 'block';
		}else {
			/*document.getElementById('oso').style.display = 'block';
		document.getElementById('ave').style.display = 'block';
		document.getElementById('osoAve').style.display = 'none';*/
		document.body.style.backgroundImage = "url('estilos/imagenes/registro/fondo.png')";
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
		document.getElementById('terminos').style.fontSize = anchoPantalla * 0.011 + 'px';
		document.getElementById('titulo').style.width = anchoPantalla * 0.27 + 'px';
		document.getElementById('titulo').style.height = anchoPantalla * 0.05 + 'px';
		document.getElementById('text01').style.width = anchoPantalla * 0.40 + 'px';
		document.getElementById('text01').style.fontSize = altoPantalla * 0.022 + 'px';
		document.getElementById('btnEnviar').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('btnEnviar').style.height = altoPantalla * 0.065 + 'px';
		document.getElementById('boton').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('boton').style.height = altoPantalla * 0.065 + 'px';
		document.getElementById('nombre').style.height = altoPantalla * 0.03 + 'px';
		document.getElementById('nombre').style.width = altoPantalla * 0.25 + 'px';
		document.getElementById('nombre').style.fontSize = altoPantalla * 0.02 + 'px';
		document.getElementById('cedula').style.height = altoPantalla * 0.03 + 'px';
		document.getElementById('cedula').style.width = altoPantalla * 0.25 + 'px';
		document.getElementById('cedula').style.fontSize = altoPantalla * 0.02 + 'px';
		document.getElementById('telefono').style.height = altoPantalla * 0.03 + 'px';
		document.getElementById('telefono').style.width = altoPantalla * 0.25 + 'px';
		document.getElementById('telefono').style.fontSize = altoPantalla * 0.02 + 'px';
		document.getElementById('correo').style.height = altoPantalla * 0.03 + 'px';
		document.getElementById('correo').style.width = altoPantalla * 0.25 + 'px';
		document.getElementById('correo').style.fontSize = altoPantalla * 0.02 + 'px';
		document.getElementById('barrio').style.height = altoPantalla * 0.03 + 'px';
		document.getElementById('barrio').style.width = altoPantalla * 0.25 + 'px';
		document.getElementById('barrio').style.fontSize = altoPantalla * 0.02 + 'px';
		document.getElementById('fecha').style.height = altoPantalla * 0.03 + 'px';
		document.getElementById('fecha').style.width = altoPantalla * 0.25 + 'px';
		document.getElementById('fecha').style.fontSize = altoPantalla * 0.02 + 'px';
		document.getElementById('text02').style.width = anchoPantalla * 0.40 + 'px';
		document.getElementById('text02').style.fontSize = altoPantalla * 0.022 + 'px';
		document.getElementById('error').style.fontSize = altoPantalla * 0.020 + 'px';
		document.getElementById('btnRegresar').style.width = anchoPantalla * 0.12 + 'px';
		document.getElementById('btnRegresar').style.height = anchoPantalla * 0.035 + 'px';
		document.getElementById('textoTerminos').style.fontSize = altoPantalla * 0.022 + 'px';
		document.getElementById('textoTerminos').style.width = altoPantalla * 1 + 'px';
		document.getElementById('textoTerminos').style.height = altoPantalla * 0.45 + 'px';
		document.getElementById('tituloPanel').style.width = anchoPantalla * 0.45 + 'px';
		document.getElementById('tituloPanel').style.height = anchoPantalla * 0.04 + 'px';


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
		document.getElementById('titulo').style.top = altoPantalla * 0.10 + 'px';
		document.getElementById('text01').style.top = altoPantalla * 0.15 + $('#titulo').height() + 'px';
		document.getElementById('error').style.top = altoPantalla * 0.11 + $('#titulo').height() + 'px';
		document.getElementById('boton').style.top = altoPantalla * 0.88 + 'px';
		document.getElementById('boton').style.left = anchoPantalla * 0.35 + 'px';
		document.getElementById('nombre').style.top = altoPantalla * 0.15 + $('#titulo').height() +
		 $('#text01').height()*2 + 'px';
		document.getElementById('cedula').style.top = altoPantalla * 0.15 + $('#titulo').height() +
		 $('#text01').height()*2 + 'px';
		document.getElementById('telefono').style.top = altoPantalla * 0.15 + $('#titulo').height() +
		 $('#text01').height()*2 + ($('#nombre').height()*3) + 'px';
		document.getElementById('correo').style.top = altoPantalla * 0.061 + $('#titulo').height() +
		 $('#text01').height()*2 + ($('#nombre').height()*3) + 'px';
		 document.getElementById('barrio').style.top = altoPantalla * 0.15 + $('#titulo').height() +
		 $('#text01').height()*2 + ($('#nombre').height()*3) + 'px';
		document.getElementById('fecha').style.top = altoPantalla * 0.15 + $('#titulo').height() +
		 $('#text01').height()*2 + ($('#nombre').height()*3) + 'px';
		document.getElementById('text02').style.top = altoPantalla * 0.15 + $('#titulo').height() +
		 $('#text01').height()*2 + ($('#nombre').height()*8) + 'px';
		document.getElementById('terminos').style.top = altoPantalla * 0.82 + 'px';
		document.getElementById('check').style.top = altoPantalla * 0.82 + 'px';
		document.getElementById('checkbox').style.top = altoPantalla * 0.82 + 'px';
		document.getElementById('btnRegresar').style.top = altoPantalla * 0.88 + 'px';
		document.getElementById('tituloPanel').style.top = altoPantalla * 0.15 + 'px';
		document.getElementById('textoTerminos').style.top = altoPantalla * 0.18 + $('#tituloPanel').height()*1.2 + 'px';

			width = $('#nombre').width();
	document.getElementById('nombre').style.left = (anchoPantalla * 0.42) - (width * 0.25 + width) + "px	";

	width = $('#cedula').width();
	document.getElementById('cedula').style.left = (anchoPantalla * 0.39) + (width * 0.25) + "px	";

	width = $('#telefono').width();
	document.getElementById('telefono').style.left = (anchoPantalla * 0.42) - (width * 0.25 + width) + "px	";

	width = $('#correo').width();
	document.getElementById('correo').style.left = (anchoPantalla * 0.535) + (width * 0.25) + "px	";

	width = $('#barrio').width();
	document.getElementById('barrio').style.left = (anchoPantalla * 0.39) + (width * 0.25) + "px	";

	width = $('#fecha').width();
	document.getElementById('fecha').style.left = (anchoPantalla * 0.535) + (width * 0.25) + "px	";

		}

	}else{
		/*document.getElementById('oso').style.display = 'none';
		document.getElementById('ave').style.display = 'none';
		document.getElementById('osoAve').style.display = 'block';*/
		document.body.style.backgroundImage = "url('estilos/imagenes/registro/fondo.jpg')";
		document.getElementById('aviso_movil').style.display = 'none';
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
		document.getElementById('terminos').style.fontSize = anchoPantalla * 0.030 + 'px';
		document.getElementById('titulo').style.width = anchoPantalla * 0.45 + 'px';
		document.getElementById('titulo').style.height = anchoPantalla * 0.10 + 'px';
		document.getElementById('btnEnviar').style.width = anchoPantalla * 0.30 + 'px';
		document.getElementById('btnEnviar').style.height = altoPantalla * 0.065 + 'px';
		document.getElementById('boton').style.width = anchoPantalla * 0.30 + 'px';
		document.getElementById('boton').style.height = altoPantalla * 0.065 + 'px';
		document.getElementById('nombre').style.height = anchoPantalla * 0.05 + 'px';
		document.getElementById('nombre').style.width = anchoPantalla * 0.30 + 'px';
		document.getElementById('nombre').style.fontSize = anchoPantalla * 0.035 + 'px';
		document.getElementById('cedula').style.height = anchoPantalla * 0.05 + 'px';
		document.getElementById('cedula').style.width = anchoPantalla * 0.30 + 'px';
		document.getElementById('cedula').style.fontSize = anchoPantalla * 0.035 + 'px';
		document.getElementById('telefono').style.height = anchoPantalla * 0.05 + 'px';
		document.getElementById('telefono').style.width = anchoPantalla * 0.30 + 'px';
		document.getElementById('telefono').style.fontSize = anchoPantalla * 0.035 + 'px';
		document.getElementById('correo').style.height = anchoPantalla * 0.05 + 'px';
		document.getElementById('correo').style.width = anchoPantalla * 0.30 + 'px';
		document.getElementById('correo').style.fontSize = anchoPantalla * 0.035 + 'px';
		document.getElementById('barrio').style.height = anchoPantalla * 0.05 + 'px';
		document.getElementById('barrio').style.width = anchoPantalla * 0.30 + 'px';
		document.getElementById('barrio').style.fontSize = anchoPantalla * 0.035 + 'px';
		document.getElementById('fecha').style.height = anchoPantalla * 0.05 + 'px';
		document.getElementById('fecha').style.width = anchoPantalla * 0.30 + 'px';
		document.getElementById('fecha').style.fontSize = anchoPantalla * 0.035 + 'px';
		document.getElementById('text01').style.width = anchoPantalla * 0.70 + 'px';
		document.getElementById('text01').style.fontSize = altoPantalla * 0.022 + 'px';
		document.getElementById('text02').style.width = anchoPantalla * 0.70 + 'px';
		document.getElementById('text02').style.fontSize = altoPantalla * 0.022 + 'px';
		document.getElementById('error').style.fontSize = altoPantalla * 0.020 + 'px';
		document.getElementById('tituloPanel').style.width = altoPantalla * 0.45 + 'px';
		document.getElementById('textoTerminos').style.fontSize = anchoPantalla * 0.025 + 'px';
		document.getElementById('textoTerminos').style.width = anchoPantalla * 0.80 + 'px';
		document.getElementById('textoTerminos').style.height = altoPantalla * 0.40 + 'px';
		document.getElementById('tituloPanel').style.height = altoPantalla * 0.08 + 'px';
		document.getElementById('btnRegresar').style.width = anchoPantalla * 0.28 + 'px';
		document.getElementById('btnRegresar').style.height = altoPantalla * 0.060 + 'px';

		document.getElementById('logo1').style.top = (altoPantalla * 0.04) + "px	";
		document.getElementById('logo1').style.left = (anchoPantalla * 0.08) + "px	";
		document.getElementById('logo2').style.top = (altoPantalla * 0.035) + "px	";
		document.getElementById('logo2').style.left = (anchoPantalla * 0.74) + "px	";
		document.getElementById('btnFacebook').style.top = (altoPantalla * 0.92) + "px";
		document.getElementById('btnFacebook').style.left = (anchoPantalla * 0.325) + "px";
		document.getElementById('btnInstagram').style.top = (altoPantalla * 0.92) + "px	";
		document.getElementById('btnInstagram').style.left = (anchoPantalla * 0.600) + "px	";
		document.getElementById('btnTwitter').style.top = (altoPantalla * 0.92) + "px	";
		document.getElementById('btnTwitter').style.left = (anchoPantalla * 0.465) + "px	";
		document.getElementById('btnMusica').style.top = altoPantalla * 0.90 + 'px';
		document.getElementById('btnMusica').style.left = anchoPantalla * 0.84 + 'px';
		document.getElementById('terminos').style.top = (altoPantalla * 0.97) + "px	";
		document.getElementById('titulo').style.top = altoPantalla * 0.10 + 'px';
		document.getElementById('boton').style.top = altoPantalla * 0.83 + 'px';
		document.getElementById('boton').style.left = anchoPantalla * 0.35 + 'px';
		document.getElementById('text01').style.top = altoPantalla * 0.12 + $('#titulo').height() + 'px';
		document.getElementById('error').style.top = altoPantalla * 0.03 + $('#titulo').height() + 'px';
		document.getElementById('nombre').style.top = altoPantalla * 0.10 + $('#titulo').height() +
		 $('#text01').height()*1.4 + 'px';
		document.getElementById('cedula').style.top = altoPantalla * 0.10 + $('#titulo').height() +
		 $('#text01').height()*1.4 + 'px';
		document.getElementById('telefono').style.top = altoPantalla * 0.10 + $('#titulo').height() +
		 $('#text01').height()*1.4 + ($('#nombre').height()*3) + 'px';
		document.getElementById('correo').style.top = altoPantalla * 0.10 + $('#titulo').height() +
		 $('#text01').height()*1.4 + ($('#nombre').height()*3) + 'px';
		 document.getElementById('barrio').style.top = altoPantalla * 0.10 + $('#titulo').height() +
		 $('#text01').height()*1.4 + ($('#nombre').height()*6) + 'px';
		 document.getElementById('fecha').style.top = altoPantalla * 0.10 + $('#titulo').height() +
		 $('#text01').height()*1.4 + ($('#nombre').height()*6) + 'px';
		document.getElementById('text02').style.top = altoPantalla * 0.14 + $('#titulo').height() +
		 $('#text01').height()*1.4 + ($('#nombre').height()*8) + 'px';
		document.getElementById('terminos').style.top = altoPantalla * 0.78 + 'px';
		document.getElementById('check').style.top = altoPantalla * 0.78 + 'px';
		document.getElementById('checkbox').style.top = altoPantalla * 0.78 + 'px';
		document.getElementById('btnRegresar').style.top = altoPantalla * 0.80 + 'px';
		document.getElementById('tituloPanel').style.top = altoPantalla * 0.15 + 'px';
		document.getElementById('textoTerminos').style.top = altoPantalla * 0.12 + $('#logo1').height()*1.2 + 'px';

			width = $('#nombre').width();
	document.getElementById('nombre').style.left = (anchoPantalla * 0.49) - (width * 0.25 + width) + "px	";

	width = $('#cedula').width();
	document.getElementById('cedula').style.left = (anchoPantalla * 0.46) + (width * 0.25) + "px	";

	width = $('#telefono').width();
	document.getElementById('telefono').style.left = (anchoPantalla * 0.49) - (width * 0.25 + width) + "px	";

	width = $('#correo').width();
	document.getElementById('correo').style.left = (anchoPantalla * 0.46) + (width * 0.25) + "px	";

	width = $('#barrio').width();
	document.getElementById('barrio').style.left = (anchoPantalla * 0.49) - (width * 0.25 + width) + "px	";

	width = $('#fecha').width();
	document.getElementById('fecha').style.left = (anchoPantalla * 0.46) + (width * 0.25) + "px	";

	}

	width = $('#terminos').width();
	document.getElementById('terminos').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#error').width();
	document.getElementById('error').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#tituloPanel').width();
	document.getElementById('tituloPanel').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#btnRegresar').width();
	document.getElementById('btnRegresar').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#textoTerminos').width();
	document.getElementById('textoTerminos').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#terminos').width();
	document.getElementById('check').style.left = (anchoPantalla * 0.5) - (width * 0.80) + "px	";

	width = $('#terminos').width();
	document.getElementById('checkbox').style.left = (anchoPantalla * 0.5) - (width * 0.65) + "px	";

	width = $('#titulo').width();
	document.getElementById('titulo').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#boton').width();
	document.getElementById('boton').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#text01').width();
	document.getElementById('text01').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#text02').width();
	document.getElementById('text02').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";
}

function mostrarTerminos(){
        document.getElementById('terminosPanel').style.display = 'block';
}

function ocultarTerminos(){
        document.getElementById('terminosPanel').style.display = 'none';
}

function irJuego(){
	window.location = "listo";
}