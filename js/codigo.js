
function regalo(){
	this.tipo = 0;
	this.estado = 0;
}


var tiempo = 31;
var score = 0;
var cajas = [new regalo(),new regalo(),new regalo(),new regalo(),new regalo(),new regalo(),new regalo()];
var music = false;
var estadoMovimiento = 0;
var bono = 0;

function isSafari(){
	return navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") == -1;
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
	carga();
});

var getFacebookSDK = function(){
		var js, fjs = document.getElementsByTagName('script')[0];
		if (document.getElementById('facebook-jssdk')) return;
		js = document.createElement('script'); js.id = 'facebook-jssdk';
		js.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.8&appId=201874970265013";
		fjs.parentNode.insertBefore(js, fjs);
	}
	
getFacebookSDK();

function compartirFacebook(){

	if(bono == 0){
		FB.ui({
			method: 'feed',
			display: 'popup',
			link: (window.location.href + '').replace('/juego.php', ''),
			name: 'Mar de pelotas',
			picture: 'http://piscina.playlovejeans.com/estilos/imagenes/compartirface.jpg',
			caption: '',
			description: 'Yo ya jugué con @SantaféMedellínMiMundo y estoy listo para nadar en el #MarDePelotas ¡Juega y prepárate tú también!',
			ref:'facebook',
		}, function(response){
			score+= ( 'undefined' != typeof response.post_id ) ? 100:0;
			IrRegistro();
		});
	}

}

function carga() {

	document.getElementById('cargando').style.display = 'none';
	document.getElementById('mejor').style.display = 'block';

	declaracionEvento();
	timerCajas();
	/*timerCollision();*/
	timerTiempo();
	//timerMovimiento(1);
}

function timerTiempo(){

	tiempo--;
	if(tiempo > 9){
		document.getElementById('segundos').innerHTML = tiempo;
	}else{
		document.getElementById('segundos').innerHTML = "0" + tiempo;
	}

	if(tiempo != 0){
		setTimeout(function(){ timerTiempo(); }.bind(this), 1000);
	}else{
		removerRegalos();
		$('#telon').addClass("bajar");
	}
}

function volverJugar(){
	desaparecerContenido();
	cajas = [new regalo(),new regalo(),new regalo(),new regalo(),new regalo(),new regalo(),new regalo()];
	tiempo = 31;
	score = 0;
	document.getElementById('puntaje').innerHTML = "Puntaje " + score;
}

var IrRegistro = function (){
			 
	var miVariable = score;
	document.cookie ='variable='+miVariable+'; expires=Thu, 2 Aug 2021 20:47:11 UTC; path=/';

	window.location = "registro.php";
}

function getScore(){
	return score;
}

function removerRegalos(){

	var caja;
	var width;
	var anchoPantalla = window.innerWidth;

	for (var i = 0; i < cajas.length; i++) {

		caja = document.getElementById('caja' + (i + 1));
		caja.style.display = 'none';
		$("#caja" + (i + 1)).removeClass("mover");
	}

}

function aparecerContenido(){

	var width;
	var anchoPantalla = window.innerWidth;

	width = $('#puntajeFinal').width();
	
	document.getElementById('puntajeFinal').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px";
	

	document.getElementById('btnVolver').style.display = 'block';
	document.getElementById('btnCompartir').style.display = 'block';
	document.getElementById('btnRegistrar').style.display = 'block';
	document.getElementById('logo1').style.display = 'block';
	document.getElementById('logo2').style.display = 'block';
	document.getElementById('puntajeFinal').style.display = 'block';
	document.getElementById('puntajeLogo').style.display = 'block';

	$('#puntajeFinal').addClass("aparecer");
	$('#puntajeLogo').addClass("aparecer");
	/*$('#texto01').addClass("aparecer");
	$('#izqcopo').addClass("aparecer");
	$('#dercopo').addClass("aparecer");*/
}

function desaparecerContenido(){

	var width;
	var anchoPantalla = window.innerWidth;

	document.getElementById('btnVolver').style.display = 'none';
	document.getElementById('btnCompartir').style.display = 'none';
	document.getElementById('btnRegistrar').style.display = 'none';
	document.getElementById('logo1').style.display = 'none';
	document.getElementById('logo2').style.display = 'none';
	document.getElementById('puntajeFinal').style.display = 'none';
	document.getElementById('puntajeLogo').style.display = 'none';


	$('#puntajeFinal').addClass("desaparecer");
	$('#telon').addClass("subir");
	/*$('#texto01').addClass("desaparecer");
	$('#izqcopo').addClass("desaparecer");
	$('#dercopo').addClass("desaparecer");*/
}


function colocarTexto(valor, caja, e){

	posX = e.clientX;
	posY = e.clientY;
    width = caja.width();
    height = caja.height();

    console.log(posX + 'px - ' + posY + 'px');

    switch(valor){
    	case -25:
    		score -= 25;
    		document.getElementById('texto').style.backgroundImage = "url('estilos/imagenes/juego/puntaje_25.png')";
    	break;

    	case 30:
    		score += 30;
    		document.getElementById('texto').style.backgroundImage = "url('estilos/imagenes/juego/puntaje_30.png')";
    	break;

    	case 40:
    		score += 40;
    		document.getElementById('texto').style.backgroundImage = "url('estilos/imagenes/juego/puntaje_40.png')";
    	break;

    	case 50:
    		score += 50;
    		document.getElementById('texto').style.backgroundImage = "url('estilos/imagenes/juego/puntaje_50.png')";
    	break;
    }
    document.getElementById('texto').style.left = (posX - (width/3)) + 'px';
    document.getElementById('texto').style.top = (posY - (height/3)) + 'px';
    document.getElementById('texto').style.opacity = '1';
    document.getElementById('texto').style.display = 'block';
	$('#texto').addClass("desaparecer");


	document.getElementById('puntaje').innerHTML = "Puntaje " + score;
	document.getElementById('puntajeFinal').innerHTML = score;
}

/*function timerCollision(){

	var caja;
	var random;

	for (var i = 0; i < cajas.length; i++) {

		caja = document.getElementById('caja' + (i + 1));
		random = Math.floor((Math.random() * 2));

		if(overlaps(document.getElementById('personaje'),document.getElementById('caja' + (i + 1)))){
			
			if(cajas[i].tipo == 0){
				score += 20;
				document.getElementById('texto').style.color = '#45bb35';
				colocarTexto("20pts");
				document.getElementById('puntaje').innerHTML = "Puntaje " + score;
				document.getElementById('puntajeFinal').innerHTML = score;
			}else{
				if(cajas[i].tipo == 1){
					score -= 10;
					document.getElementById('texto').style.color = '#ff0000';
					colocarTexto("-10pts");
					document.getElementById('puntaje').innerHTML = "Puntaje " + score;
					document.getElementById('puntajeFinal').innerHTML = score;
				}else{
					if(cajas[i].tipo == 2){
						if(random == 0){
							score += 40;
							document.getElementById('texto').style.color = '#ff7200';
							colocarTexto("40pts");
							document.getElementById('puntaje').innerHTML = "Puntaje " + score;
							document.getElementById('puntajeFinal').innerHTML = score;
						}else{
							tiempo += 5;
							document.getElementById('texto').style.color = '#001eff';
							colocarTexto("5s");
							if(tiempo > 9){
								document.getElementById('segundos').innerHTML = tiempo;
							}else{
								document.getElementById('segundos').innerHTML = "0" + tiempo;
							}

						}
					}
				}
			}

			caja.style.display = 'none';
			$("#caja" + (i + 1)).removeClass("mover");
			cajas[i].estado = 0;
			cajas[i].tipo = 0;
		}
	}

	if(tiempo != 0){
		setTimeout(function(){ timerCollision(); }.bind(this), 100);
	}else{
		removerRegalos();
	}
}*/

function timerCajas(){

	var caja;
	var random;
	var cajaR;
	var bandera;

	do{
		random = Math.floor((Math.random() * 7));

		caja = document.getElementById('caja' + (random + 1));

		if (cajas[random].estado == 0) {
			caja.style.display = 'block';
			$("#caja" + (random + 1)).addClass("mover");
			cajas[random].estado = 1;

			cajaR = Math.floor((Math.random() * 11));

			if(cajaR == 0){
				caja.style.backgroundImage = "url('estilos/imagenes/juego/pez01.png')";
				cajas[random].tipo = 1;
			}else{
				if(cajaR == 1){
					caja.style.backgroundImage = "url('estilos/imagenes/juego/pez02.png')";
					cajas[random].tipo = 0;
				}else{
					if(cajaR == 2){
						caja.style.backgroundImage = "url('estilos/imagenes/juego/pez03.png')";
						cajas[random].tipo = 1;
					}else{
						if(cajaR == 3){
							caja.style.backgroundImage = "url('estilos/imagenes/juego/pez04.png')";
							cajas[random].tipo = 1;
						}else{
							if(cajaR == 4){
								caja.style.backgroundImage = "url('estilos/imagenes/juego/pez05.png')";
								cajas[random].tipo = 1;
							}else{
								if(cajaR == 5){
									caja.style.backgroundImage = "url('estilos/imagenes/juego/pez06.png')";
									cajas[random].tipo = 1;
								}else{
									if(cajaR == 6){
										caja.style.backgroundImage = "url('estilos/imagenes/juego/pez07.png')";
										cajas[random].tipo = 2;
									}else{
										if(cajaR == 7){
											caja.style.backgroundImage = "url('estilos/imagenes/juego/pez09.png')";
											cajas[random].tipo = 2;
										}else{
											if(cajaR == 8){
												caja.style.backgroundImage = "url('estilos/imagenes/juego/pinguino.png')";
												cajas[random].tipo = 3;
											}else{
												if(cajaR == 9){
													caja.style.backgroundImage = "url('estilos/imagenes/juego/pez10.png')";
													cajas[random].tipo = 2;
												}else{
													if(cajaR == 10){
														caja.style.backgroundImage = "url('estilos/imagenes/juego/pez08.png')";
														cajas[random].tipo = 2;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}

			bandera = false;
		}else{
			bandera = true;
		}

	}while(bandera == true);
	
	if(tiempo != 0){
		setTimeout(function(){ timerCajas(); }.bind(this), 700);
	}else{
		removerRegalos();
	}
}

function reSize(){

	var altoPantalla = window.innerHeight;
	var anchoPantalla = window.innerWidth;

	var width;

	if(anchoPantalla >= altoPantalla){
		/*document.getElementById('cabecera').style.backgroundImage = "url('estilos/imagenes/juego/cabecera.png')";
		/*document.getElementById('lateral_der').style.backgroundImage = "url('estilos/imagenes/juego/lateral02.png')";
		document.getElementById('lateral_izq').style.backgroundImage = "url('estilos/imagenes/juego/lateral01.png')";
		document.getElementById('lateral_der').style.height = altoPantalla * 0.70 + 'px';
		document.getElementById('lateral_izq').style.height = altoPantalla * 0.70 + 'px';
		document.getElementById('lateral_der').style.top = altoPantalla * 0.30 + 'px';
		document.getElementById('lateral_izq').style.top = altoPantalla * 0.30 + 'px';*/

		/*document.getElementById('personaje').style.width = anchoPantalla * 0.10 + 'px';
		document.getElementById('personaje').style.height = anchoPantalla * 0.13 + 'px';*/
		document.getElementById('logo1').style.display = 'none';
		document.getElementById('logo2').style.display = 'none';
		document.getElementById('reloj').style.width = anchoPantalla * 0.40 + 'px';
		document.getElementById('reloj').style.height = anchoPantalla * 0.080 + 'px';
		document.getElementById('logo1').style.width = anchoPantalla * 0.067 + 'px';
		document.getElementById('logo1').style.height = anchoPantalla * 0.070 + 'px';
		document.getElementById('logo2').style.width = anchoPantalla * 0.067 + 'px';
		document.getElementById('logo2').style.height = anchoPantalla * 0.070 + 'px';
		/*document.getElementById('dercopo').style.width = anchoPantalla * 0.10 + 'px';
		document.getElementById('dercopo').style.height = anchoPantalla * 0.11 + 'px';
		document.getElementById('izqcopo').style.width = anchoPantalla * 0.10 + 'px';
		document.getElementById('izqcopo').style.height = anchoPantalla * 0.11 + 'px';*/
		document.getElementById('btnMusica').style.width = anchoPantalla * 0.045 + 'px';
		document.getElementById('btnMusica').style.height = anchoPantalla * 0.045 + 'px';
		document.getElementById('btnCompartir').style.width = anchoPantalla * 0.13 + 'px';
		document.getElementById('btnCompartir').style.height = anchoPantalla * 0.045 + 'px';
		document.getElementById('btnVolver').style.width = anchoPantalla * 0.13 + 'px';
		document.getElementById('btnVolver').style.height = anchoPantalla * 0.035 + 'px';
		document.getElementById('btnRegistrar').style.width = anchoPantalla * 0.16 + 'px';
		document.getElementById('btnRegistrar').style.height = anchoPantalla * 0.045 + 'px';
		document.getElementById('segundos').style.fontSize = anchoPantalla * 0.03 + 'px';
		document.getElementById('puntaje').style.fontSize = anchoPantalla * 0.02 + 'px';
		/*document.getElementById('texto01').style.fontSize = anchoPantalla * 0.028 + 'px';*/
		document.getElementById('puntajeFinal').style.fontSize = anchoPantalla * 0.11 + 'px';
		document.getElementById('mejor').style.fontSize = anchoPantalla * 0.02 + 'px';
		document.getElementById('texto').style.width = anchoPantalla * 0.15 + 'px';
		document.getElementById('texto').style.height = anchoPantalla * 0.15 + 'px';
		document.getElementById('caja1').style.width = anchoPantalla * 0.15 + 'px';
		document.getElementById('caja1').style.height = anchoPantalla * 0.085 + 'px';
		document.getElementById('caja2').style.width = anchoPantalla * 0.15 + 'px';
		document.getElementById('caja2').style.height = anchoPantalla * 0.085 + 'px';
		document.getElementById('caja3').style.width = anchoPantalla * 0.15 + 'px';
		document.getElementById('caja3').style.height = anchoPantalla * 0.085 + 'px';
		document.getElementById('caja4').style.width = anchoPantalla * 0.15 + 'px';
		document.getElementById('caja4').style.height = anchoPantalla * 0.085 + 'px';
		document.getElementById('caja5').style.width = anchoPantalla * 0.15 + 'px';
		document.getElementById('caja5').style.height = anchoPantalla * 0.085 + 'px';
		document.getElementById('caja6').style.width = anchoPantalla * 0.15 + 'px';
		document.getElementById('caja6').style.height = anchoPantalla * 0.085 + 'px';
		document.getElementById('caja7').style.width = anchoPantalla * 0.15 + 'px';
		document.getElementById('caja7').style.height = anchoPantalla * 0.085 + 'px';
		document.getElementById('imagenCarga').style.width = altoPantalla * 0.85 + 'px';
		document.getElementById('imagenCarga').style.height = altoPantalla * 0.70 + 'px';
		document.getElementById('textoCarga').style.fontSize = altoPantalla * 0.07 + 'px';

		document.getElementById('personaje').style.top = (altoPantalla * 0.98) - anchoPantalla * 0.13 + "px";
		document.getElementById('personaje').style.left = (anchoPantalla * 0.6) + "px";
		document.getElementById('logo1').style.top = (altoPantalla * 0.04) + "px	";
		document.getElementById('logo1').style.left = (anchoPantalla * 0.03) + "px	";
		document.getElementById('logo2').style.top = (altoPantalla * 0.035) + "px	";
		document.getElementById('logo2').style.left = (anchoPantalla * 0.14) + "px	";
		document.getElementById('btnCompartir').style.top = (altoPantalla * 0.85)  + "px";
		document.getElementById('btnCompartir').style.left = (anchoPantalla * 0.20) + "px";
		document.getElementById('btnVolver').style.top = (altoPantalla * 0.85)  + "px";
		document.getElementById('btnVolver').style.left = (anchoPantalla * 0.44) + "px";
		document.getElementById('btnRegistrar').style.top = (altoPantalla * 0.85)  + "px";
		document.getElementById('btnRegistrar').style.left = (anchoPantalla * 0.66) + "px";
		/*document.getElementById('izqcopo').style.top = (altoPantalla * 0.40)  + "px";
		document.getElementById('izqcopo').style.left = (anchoPantalla * 0.20) + "px";
		document.getElementById('dercopo').style.top = (altoPantalla * 0.40)  + "px";
		document.getElementById('dercopo').style.left = (anchoPantalla * 0.70) + "px";*/
		document.getElementById('btnMusica').style.top = (altoPantalla * 0.88)  + "px";
		document.getElementById('btnMusica').style.left = (anchoPantalla * 0.94) + "px";
		document.getElementById('segundos').style.top = (anchoPantalla * 0.03) + "px";
		document.getElementById('puntaje').style.top = (altoPantalla * 0.0095)  + "px";
		document.getElementById('puntaje').style.left = (anchoPantalla * 0.35) + "px";
		document.getElementById('mejor').style.top = (altoPantalla * 0.0095)  + "px";
		document.getElementById('mejor').style.left = (anchoPantalla * 0.57) + "px";
		/*document.getElementById('texto01').style.top = (altoPantalla * 0.35)  + "px";
		document.getElementById('texto01').style.left = (anchoPantalla * 0.41) + "px";*/
		document.getElementById('puntajeFinal').style.top = (altoPantalla * 0.40)  + "px";
		document.getElementById('puntajeFinal').style.left = (anchoPantalla * 0.600) + "px";
		/*document.getElementById('puntajeFinal').style.width = anchoPantalla * 0.55 + 'px';
		document.getElementById('puntajeFinal').style.height = anchoPantalla * 0.30 + 'px';*/
		document.getElementById('puntajeLogo').style.top = (altoPantalla * 0.20)  + "px";
		document.getElementById('puntajeLogo').style.left = (anchoPantalla * 0.385) + "px";
		document.getElementById('puntajeLogo').style.width = anchoPantalla * 0.55 + 'px';
		document.getElementById('puntajeLogo').style.height = anchoPantalla * 0.30 + 'px';
		document.getElementById('textoCarga').style.top = ($('#imagenCarga').height()) + "px";

		
	}else{
		//document.getElementById('cabecera').style.backgroundImage = "url('estilos/imagenes/juego/cabecerap.png')";
		/*document.getElementById('lateral_der').style.backgroundImage = "url('estilos/imagenes/juego/lateral04.png')";
		document.getElementById('lateral_izq').style.backgroundImage = "url('estilos/imagenes/juego/lateral03.png')";
		document.getElementById('lateral_der').style.height = altoPantalla * 0.30 + 'px';
		document.getElementById('lateral_izq').style.height = altoPantalla * 0.30 + 'px';
		document.getElementById('lateral_der').style.top = altoPantalla * 0.65 + 'px';
		document.getElementById('lateral_izq').style.top = altoPantalla * 0.65 + 'px';*/

		document.getElementById('logo1').style.display = 'none';
		document.getElementById('logo2').style.display = 'none';
		document.getElementById('personaje').style.width = altoPantalla * 0.16 + 'px';
		document.getElementById('personaje').style.height = altoPantalla * 0.19 + 'px';
		document.getElementById('reloj').style.width = anchoPantalla * 0.8 + 'px';
		document.getElementById('reloj').style.height = anchoPantalla * 0.2 + 'px';
		document.getElementById('logo1').style.width = altoPantalla * 0.11 + 'px';
		document.getElementById('logo1').style.height = altoPantalla * 0.12 + 'px';
		document.getElementById('logo2').style.width = altoPantalla * 0.11 + 'px';
		document.getElementById('logo2').style.height = altoPantalla * 0.12 + 'px';
		/*document.getElementById('dercopo').style.width = anchoPantalla * 0.23 + 'px';
		document.getElementById('dercopo').style.height = anchoPantalla * 0.24 + 'px';
		document.getElementById('izqcopo').style.width = anchoPantalla * 0.23 + 'px';
		document.getElementById('izqcopo').style.height = anchoPantalla * 0.24 + 'px';*/
		document.getElementById('btnMusica').style.width = altoPantalla * 0.075 + 'px';
		document.getElementById('btnMusica').style.height = altoPantalla * 0.075 + 'px';
		document.getElementById('btnCompartir').style.width = anchoPantalla * 0.44 + 'px';
		document.getElementById('btnCompartir').style.height = altoPantalla * 0.065 + 'px';
		document.getElementById('btnVolver').style.width = anchoPantalla * 0.25 + 'px';
		document.getElementById('btnVolver').style.height = altoPantalla * 0.055 + 'px';
		document.getElementById('btnRegistrar').style.width = anchoPantalla * 0.35 + 'px';
		document.getElementById('btnRegistrar').style.height = altoPantalla * 0.060 + 'px';
		document.getElementById('segundos').style.fontSize = anchoPantalla * 0.075 + 'px';
		document.getElementById('puntaje').style.fontSize = anchoPantalla * 0.04 + 'px';
		document.getElementById('texto01').style.fontSize = anchoPantalla * 0.07 + 'px';
		document.getElementById('puntajeFinal').style.fontSize = anchoPantalla * 0.18 + 'px';
		document.getElementById('mejor').style.fontSize = anchoPantalla * 0.04 + 'px';
		/*document.getElementById('texto').style.width = altoPantalla * 0.80 + 'px';
		document.getElementById('texto').style.height = altoPantalla * 1 + 'px';*/
		document.getElementById('caja1').style.width = altoPantalla * 0.2 + 'px';
		document.getElementById('caja1').style.height = altoPantalla * 0.15 + 'px';
		document.getElementById('caja2').style.width = altoPantalla * 0.2 + 'px';
		document.getElementById('caja2').style.height = altoPantalla * 0.15 + 'px';
		document.getElementById('caja3').style.width = altoPantalla * 0.2 + 'px';
		document.getElementById('caja3').style.height = altoPantalla * 0.15 + 'px';
		document.getElementById('caja4').style.width = altoPantalla * 0.2 + 'px';
		document.getElementById('caja4').style.height = altoPantalla * 0.15 + 'px';
		document.getElementById('caja5').style.width = altoPantalla * 0.2 + 'px';
		document.getElementById('caja5').style.height = altoPantalla * 0.15 + 'px';
		document.getElementById('caja6').style.width = altoPantalla * 0.2 + 'px';
		document.getElementById('caja6').style.height = altoPantalla * 0.15 + 'px';
		document.getElementById('caja7').style.width = altoPantalla * 0.2 + 'px';
		document.getElementById('caja7').style.height = altoPantalla * 0.15 + 'px';
		document.getElementById('derecha').style.width = anchoPantalla * 0.3 + 'px';
		document.getElementById('derecha').style.height = anchoPantalla * 0.4 + 'px';
		document.getElementById('izquierda').style.width = anchoPantalla * 0.3 + 'px';
		document.getElementById('izquierda').style.height = anchoPantalla * 0.4 + 'px';
		document.getElementById('imagenCarga').style.width = anchoPantalla * 0.80 + 'px';
		document.getElementById('imagenCarga').style.height = anchoPantalla * 0.65 + 'px';
		document.getElementById('textoCarga').style.fontSize = anchoPantalla * 0.07 + 'px';

		document.getElementById('personaje').style.top = (altoPantalla * 0.98) - altoPantalla * 0.19 + "px";
		document.getElementById('personaje').style.left = (anchoPantalla * 0.6) + "px";
		document.getElementById('logo1').style.top = (altoPantalla * 0.04) + "px	";
		document.getElementById('logo1').style.left = (anchoPantalla * 0.08) + "px	";
		document.getElementById('logo2').style.top = (altoPantalla * 0.035) + "px	";
		document.getElementById('logo2').style.left = (anchoPantalla * 0.74) + "px	";
		document.getElementById('btnCompartir').style.top = (altoPantalla * 0.819)  + "px";
		document.getElementById('btnVolver').style.top = (altoPantalla * 0.92)  + "px";
		document.getElementById('btnRegistrar').style.top = (altoPantalla * 0.82)  + "px";
		/*document.getElementById('izqcopo').style.top = (altoPantalla * 0.40)  + "px";
		document.getElementById('izqcopo').style.left = (anchoPantalla * 0.0) + "px";
		document.getElementById('dercopo').style.top = (altoPantalla * 0.40)  + "px";
		document.getElementById('dercopo').style.left = (anchoPantalla * 0.77) + "px";*/
		document.getElementById('btnMusica').style.top = altoPantalla * 0.90 + 'px';
		document.getElementById('btnMusica').style.left = anchoPantalla * 0.84 + 'px';
		document.getElementById('segundos').style.top = (anchoPantalla * 0.075)+ "px";
		/*if(validarDispositivo()){
			document.getElementById('segundos').style.top = (altoPantalla * 0.04) + ($('#reloj').height()*0.31) + "px";
		}*/
		document.getElementById('puntaje').style.top = (altoPantalla * 0.015) + "px";
		document.getElementById('puntaje').style.left = (anchoPantalla * 0.18) + "px";
		document.getElementById('mejor').style.top = (altoPantalla * 0.015) + "px";
		document.getElementById('mejor').style.left = (anchoPantalla * 0.65) + "px";
		/*document.getElementById('texto01').style.top = (altoPantalla * 0.35)  + "px";*/
		document.getElementById('puntajeFinal').style.top = (altoPantalla * 0.43)  + "px";
		document.getElementById('puntajeFinal').style.left = (anchoPantalla * 0.686) + "px";
		document.getElementById('puntajeLogo').style.top = (altoPantalla * 0.30)  + "px";
		document.getElementById('puntajeLogo').style.left = (anchoPantalla * 0.686) + "px";
		document.getElementById('puntajeLogo').style.width = anchoPantalla * 0.95 + 'px';
		document.getElementById('puntajeLogo').style.height = anchoPantalla * 0.60 + 'px';
		document.getElementById('imagenCarga').style.top = (anchoPantalla * 0.20) + "px";
		document.getElementById('textoCarga').style.top = (anchoPantalla * 0.20) + ($('#imagenCarga').height()) + "px";

		width = $('#btnVolver').width();
		document.getElementById('btnVolver').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

		width = $('#btnCompartir').width();
		document.getElementById('btnCompartir').style.left = (anchoPantalla * 0.65) - (width * 1.4) + "px	";

		width = $('#btnRegistrar').width();
		document.getElementById('btnRegistrar').style.left = (anchoPantalla * 0.4) + (width * 0.5) + "px	";
	}

	width = $('#personaje').width();
	if (document.getElementById('personaje').offsetLeft + (width) > anchoPantalla) {

		var posFinal = ((anchoPantalla - (width/2))/anchoPantalla)*100;
		 
		document.getElementById('personaje').style.left = posFinal + "%";
	}

	width = $('#puntajeFinal').width();
	document.getElementById('puntajeFinal').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	"; 

	width = $('#puntajeLogo').width();
	document.getElementById('puntajeLogo').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	"; 

	width = $('#reloj').width();
	document.getElementById('reloj').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px";	

	width = $('#segundos').width();
	document.getElementById('segundos').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px";	

	/*width = $('#texto01').width();
	document.getElementById('texto01').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";*/

	width = $('#textoCarga').width();
	document.getElementById('textoCarga').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

	width = $('#imagenCarga').width();
	document.getElementById('imagenCarga').style.left = (anchoPantalla * 0.5) - (width * 0.5) + "px	";

}

function validarDispositivo(){

var device = navigator.userAgent

return (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| 
	device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| 
	device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| 
	device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| 
	device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i));

}


function declaracionEvento(){

	var caja;

		caja = document.getElementById('caja1');

		caja.addEventListener("animationend", function(){ 
			caja.style.display = 'none';
			$("#caja1").removeClass("mover");
			cajas[0].estado = 0;
			cajas[0].tipo = 0;
		});

		caja.addEventListener("click", function(e){

			let valor;

			switch(cajas[0].estado){
				case 0:
					valor = -25;
				break;
				case 1:
					valor = 30;
				break;
				case 2:
					valor = 40;
				break;
				case 3:
					valor = 50;
				break;
			}

			caja.style.display = 'none';
			$("#caja1").removeClass("mover");
			cajas[0].estado = 0;
			cajas[0].tipo = 0;
			colocarTexto(valor, $('#caja1'),e);
		});

		caja = document.getElementById('caja2');

		caja.addEventListener("animationend", function(){ 
			caja.style.display = 'none';
			$("#caja2").removeClass("mover");
			cajas[1].estado = 0;
			cajas[1].tipo = 0
		});

		caja.addEventListener("click", function(e){

			let valor;

			switch(cajas[1].tipo){
				case 0:
					valor = -25;
				break;
				case 1:
					valor = 30;
				break;
				case 2:
					valor = 40;
				break;
				case 3:
					valor = 50;
				break;
			}

			caja.style.display = 'none';
			$("#caja2").removeClass("mover");
			cajas[1].estado = 0;
			cajas[1].tipo = 0;
			colocarTexto(valor, $('#caja2'),e);
		});

		caja = document.getElementById('caja3');

		caja.addEventListener("animationend", function(){ 
			caja.style.display = 'none';
			$("#caja3").removeClass("mover");
			cajas[2].estado = 0;
			cajas[2].tipo = 0
		});

		caja.addEventListener("click", function(e){

			let valor;

			switch(cajas[2].tipo){
				case 0:
					valor = -25;
				break;
				case 1:
					valor = 30;
				break;
				case 2:
					valor = 40;
				break;
				case 3:
					valor = 50;
				break;
			}

			caja.style.display = 'none';
			$("#caja3").removeClass("mover");
			cajas[2].estado = 0;
			cajas[2].tipo = 0;
			colocarTexto(valor, $('#caja3'),e);
		});

		caja = document.getElementById('caja4');

		caja.addEventListener("animationend", function(){ 
			caja.style.display = 'none';
			$("#caja4").removeClass("mover");
			cajas[3].estado = 0;
			cajas[3].tipo = 0
		});

		caja.addEventListener("click", function(e){

			let valor;

			switch(cajas[3].tipo){
				case 0:
					valor = -25;
				break;
				case 1:
					valor = 30;
				break;
				case 2:
					valor = 40;
				break;
				case 3:
					valor = 50;
				break;
			}

			caja.style.display = 'none';
			$("#caja4").removeClass("mover");
			cajas[3].estado = 0;
			cajas[3].tipo = 0;
			colocarTexto(valor, $('#caja4'),e);
		});

		caja = document.getElementById('caja5');

		caja.addEventListener("animationend", function(){ 
			caja.style.display = 'none';
			$("#caja5").removeClass("mover");
			cajas[4].estado = 0;
			cajas[4].tipo = 0
		});

		caja.addEventListener("click", function(e){

			let valor;

			switch(cajas[4].tipo){
				case 0:
					valor = -25;
				break;
				case 1:
					valor = 30;
				break;
				case 2:
					valor = 40;
				break;
				case 3:
					valor = 50;
				break;
			}

			caja.style.display = 'none';
			$("#caja5").removeClass("mover");
			cajas[4].estado = 0;
			cajas[4].tipo = 0;
			colocarTexto(valor, $('#caja5'),e);
		});

		caja = document.getElementById('caja6');

		caja.addEventListener("animationend", function(){ 
			caja.style.display = 'none';
			$("#caja6").removeClass("mover");
			cajas[5].estado = 0;
			cajas[5].tipo = 0;
		});

		caja.addEventListener("click", function(e){

			let valor;

			switch(cajas[5].tipo){
				case 0:
					valor = -25;
				break;
				case 1:
					valor = 30;
				break;
				case 2:
					valor = 40;
				break;
				case 3:
					valor = 50;
				break;
			}

			caja.style.display = 'none';
			$("#caja6").removeClass("mover");
			cajas[5].estado = 0;
			cajas[5].tipo = 0;
			colocarTexto(valor, $('#caja6'),e);
		});

		caja = document.getElementById('caja7');

		caja.addEventListener("animationend", function(){ 
			caja.style.display = 'none';
			$("#caja7").removeClass("mover");
			cajas[6].estado = 0;
			cajas[6].tipo = 0
		});

		caja.addEventListener("click", function(e){

			let valor;

			switch(cajas[6].tipo){
				case 0:
					valor = -25;
				break;
				case 1:
					valor = 30;
				break;
				case 2:
					valor = 40;
				break;
				case 3:
					valor = 50;
				break;
			}

			caja.style.display = 'none';
			$("#caja7").removeClass("mover");
			cajas[6].estado = 0;
			cajas[6].tipo = 0;
			colocarTexto(valor, $('#caja7'),e);
		});

		var text = document.getElementById('texto');

		text.addEventListener("animationend", function(){ 
			text.style.opacity = '0';
			text.style.display = 'block';
			text.style.top = '0px';
			$("#texto").removeClass("desaparecer");
		});

		var telon = document.getElementById('telon');

		telon.addEventListener("animationend", function(){
			if (tiempo == 0) {
				telon.style.top = '0%';
				$("#telon").removeClass("bajar");
				aparecerContenido();
			}else{
				telon.style.top = '-100%';
				$("#telon").removeClass("subir");
				timerCajas();
				/*timerCollision();*/
				timerTiempo();
			}
		});

		var puntos = document.getElementById('puntajeFinal');
		var logo = document.getElementById('puntajeLogo');

		puntos.addEventListener("animationend", function(){ 
			if(tiempo == 0){
				puntos.style.opacity = '1';
				$("#puntajeFinal").removeClass("aparecer");

				logo.style.opacity = '1';
				$("#puntajeLogo").removeClass("aparecer");
				
			}else{
				puntos.style.opacity = '0';
				$("#puntajeFinal").removeClass("desaparecer");

				logo.style.opacity = '0';
				$("#puntajeLogo").removeClass("desaparecer");
				
				$("#telon").addClass("subir");
				alert('hola');
			}
		});

		var texto01 = document.getElementById('texto01');

		texto01.addEventListener("animationend", function(){ 
			if(tiempo == 0){
				texto01.style.opacity = '1';
				$("#texto01").removeClass("aparecer");
			}else{
				texto01.style.opacity = '0';
				$("#texto01").removeClass("desaparecer");
			}

		});

		/*var icopo = document.getElementById('izqcopo');

		icopo.addEventListener("animationend", function(){ 
			if(tiempo == 0){
				icopo.style.opacity = '1';
				$("#izqcopo").removeClass("aparecer");
			}else{
				icopo.style.opacity = '0';
				$("#izqcopo").removeClass("desaparecer");
			}

		});

		var dcopo = document.getElementById('dercopo');

		dcopo.addEventListener("animationend", function(){ 
			if(tiempo == 0){
				dcopo.style.opacity = '1';
				$("#dercopo").removeClass("aparecer");
			}else{
				dcopo.style.opacity = '0';
				$("#dercopo").removeClass("desaparecer");

			}

		});	*/

}

/* function timerMovimiento(di){

	if (estadoMovimiento == 1) {
				di = 1;
				document.getElementById('personaje').style.backgroundImage = "url('estilos/imagenes/juego/zorro02.png')";
		   		movimientoIzquierda(di);
		}else{
		   	if (estadoMovimiento == 2) {
		   		di = 1;
		   		document.getElementById('personaje').style.backgroundImage = "url('estilos/imagenes/juego/zorro.png')";
	 			movimientoDerecha(di);
		   	}else{
		   		if (estadoMovimiento == 3) {
		   			di = di *1.1;
					document.getElementById('personaje').style.backgroundImage = "url('estilos/imagenes/juego/zorro02.png')";
			   		movimientoIzquierda(di);
				}else{
					if (estadoMovimiento == 4) {
						di = di *1.1;
				   		document.getElementById('personaje').style.backgroundImage = "url('estilos/imagenes/juego/zorro.png')";
			 			movimientoDerecha(di);
		   			}
				}
		   	}
		}

	setTimeout(function(){ timerMovimiento(di); }.bind(this), 30);
}*/

function callkeydownhandler(evnt) {

	var ev = (evnt) ? evnt : event;
	var code=(ev.which) ? ev.which : event.keyCode;

	if(tiempo != 0){		
		if (code == 37) {
				estadoMovimiento = 1;
		   }else{
		   		if (code == 39) {
		   			estadoMovimiento = 2;
		   		}
		   }
	}
}

function callkeyuphandler(evnt) {

	var ev = (evnt) ? evnt : event;
	var code=(ev.which) ? ev.which : event.keyCode;

	if(tiempo != 0){		
		if (code == 37) {
				estadoMovimiento = 3;
		   }else{
		   		if (code == 39) {
		   			estadoMovimiento = 4;
		   		}
		   }
	}
}

function movCam(n){
	if(tiempo !=0)
		estadoMovimiento = n;
}

if (window.document.addEventListener) {
   window.document.addEventListener("keydown", callkeydownhandler, false);
} else {
   window.document.attachEvent("onkeydown", callkeydownhandler);
}

if (window.document.addEventListener) {
   window.document.addEventListener("keyup", callkeyuphandler, false);
} else {
   window.document.attachEvent("onkeydup", callkeyuphandler);
}

var overlaps = (function () {
    function getPositions( elem ) {
        var pos, width, height;
        pos = $( elem ).position();
        width = $( elem ).width();
        height = $( elem ).height();
        return [ [ pos.left + (width*0.3), pos.left + width ], [ pos.top + (height*0.6), pos.top + (height) ] ];
    }

    function comparePositions( p1, p2 ) {
        var r1, r2;
        r1 = p1[0] < p2[0] ? p1 : p2;
        r2 = p1[0] < p2[0] ? p2 : p1;
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function ( a, b ) {
        var pos1 = getPositions( a ),
            pos2 = getPositions( b );
        return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
    };
})();