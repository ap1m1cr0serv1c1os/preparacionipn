$(document).ready(function(){
	"use strict";
	
	var hamb = $('.hamburger');
	var header = $('.header');
	var scroll = $(".scroll");
	var hambActive = false;
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function(){ setHeader(); });

	$(document).on('scroll', function(){ setHeader(); });

	getSlide();
	initSvg();
	getToggle();
	checkLoginState();

	/**************************/
	/*		Predefinido  	  */
	/**************************/

	function setHeader(){
		if(window.innerWidth < 992){
			if($(window).scrollTop() > 100){
				header.addClass('scrolled');
				scroll.css("display","block");
			}else{
				header.removeClass('scrolled');
				scroll.css("display","none");
			}
		}else{
			if($(window).scrollTop() > 100){
				header.addClass('scrolled');
				scroll.css("display","block");
			}else{
				header.removeClass('scrolled');
				scroll.css("display","none");
			}
		}
		if(window.innerWidth > 991 && menuActive){
			closeMenu();
		}
	}

	function getSlide(){
		if( $('.hero_slider').length ){
			var owl = $('.hero_slider');

			owl.owlCarousel({
				items: 1,
				loop: true,
				smartSpeed: 800,
				autoplay: true,
				nav: false,
				dots: false
			});

			const setAnimation = function ( _elem, _InOut ){
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				_elem.each ( function () {
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );
					$elem.addClass($animationType).one(animationEndEvent, function (){
						$elem.removeClass($animationType);
					});
				});
			}

			owl.on('change.owl.carousel', function(event){
				var $currentItem = $('.owl-item', owl).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation ($elemsToanim, 'out');
			});

			owl.on('changed.owl.carousel', function(event){
				var $currentItem = $('.owl-item', owl).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation ($elemsToanim, 'in');
			})

			if($('.hero_slider_left').length){
				var owlPrev = $('.hero_slider_left');
				owlPrev.on('click', function(){
					owl.trigger('prev.owl.carousel');
				});
			}

			if($('.hero_slider_right').length){
				var owlNext = $('.hero_slider_right');
				owlNext.on('click', function(){
					owl.trigger('next.owl.carousel');
				});
			}
		}
	}

	function initSvg(){
		jQuery('img.svg').each(function() {
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			jQuery.get(imgURL, function(data){
				var $svg = jQuery(data).find('svg');

				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}

				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				$svg = $svg.removeAttr('xmlns:a');

				$img.replaceWith($svg);
			}, 'xml');
		});
	}

	function getToggle(){
		if($('.toggle').length) {
			var toggle = $('.toggle');

			toggle.on('click', function(event){
				event.stopPropagation();

				if(!menuActive){
					openMenu();
					$(document).one('click', function cls(e){
						if($(e.target).hasClass('minim')){
							$(document).one('click', cls);
						}else{
							closeMenu();
						}
					});
				}else{
					$('.menu-container').removeClass('active');
					menuActive = false;
				}
			});
		}
	}

	function openMenu(){
		var fs = $('.menu-container');
		fs.addClass('active');
		hambActive = true;
		menuActive = true;
	}

	function closeMenu(){
		var fs = $('.menu-container');
		fs.removeClass('active');
		hambActive = false;
		menuActive = false;
	}

	/// tarjeta de credito

	$('#cardnumber').payment('formatCardNumber');
	$('#cardexpiration').payment('formatCardExpiry');
	$('#cardcvc').payment('formatCardCVC');
	$('#cardnumber').keyup(function(event) {
		$('#label-cardnumber').empty().append($(this).val());
	});

	$('#cardexpiration').keyup(function(event) {
		var data = $(this).val() + '<span>' + $('#cardcvc').val() + '</span>';
		$('#label-cardexpiration').empty().append(data);
	});

	$('#cardcvc').keyup(function(event) {
		var data = $('#cardexpiration').val() + '<span>' + $(this).val() + '</span>';
		$('#label-cardexpiration').empty().append(data);
	});

	$('.button-cta').on('click', function () {
		var proceed = true;
		$(".field input").each(function(){
			$(this).parent().find('path').each(function(){
				$(this).attr('fill', '#dddfe6');
			});

			if(!$.trim($(this).val())){
				$(this).parent().find('path').each(function(){
					$(this).attr('fill', '#f1404b');
					proceed = false;
				});

				if(!proceed){
					$(this).parent().find('svg').animate({opacity: '0.1'}, "slow");
					$(this).parent().find('svg').animate({opacity: '1'}, "slow");
					$(this).parent().find('svg').animate({opacity: '0.1'}, "slow");
					$(this).parent().find('svg').animate({opacity: '1'}, "slow");
				}
			}
		});

		if(proceed){
			$('.field').find('path').each(function(){
				$(this).attr('fill', '#3ac569');
			});
			$('.payment').fadeToggle('slow', function() {
				$('.paid').fadeToggle('slow', 'linear');
			});
		}
	});

	let intervalId = 0;
	const $scrollButton = document.querySelector('.scroll');
	function scrollStep() {
		if (window.pageYOffset === 0) {
			clearInterval(intervalId);
		}
		window.scroll(0, window.pageYOffset - 50);
	}
	function scrollToTop() {
		intervalId = setInterval(scrollStep, 16.66);
	}
	$scrollButton.addEventListener('click', scrollToTop);
	/** sesion facebook **/
	function statusChangeCallback(response) {
		if (response.status === 'connected') {
			testAPI();
		} else {
			$(".sesion a").text("Iniciar sesión");
			$(".sesion a").attr("href","/login");
			if( $(".menu-alumno").val() != undefined){
				window.location.href = './';
			}
		}
	}

	function checkLoginState() {
		FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});
	}

	window.fbAsyncInit = function() {
		FB.init({
			appId: '2099671733382944',
			cookie: true,
			xfbml: true,
			version: 'v2.8'
		});

		FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});

	};
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	function testAPI() {
		FB.api('/me', function(response) {
			$(".sesion a").html(response.name);
			$(".sesion a").attr("href","/perfil");
		});
	}

});

// existir aun despues y antes de iniciar la pagina
function logout(redirectUrl) {
	FB.getLoginStatus(function (response) {
		if (response.status == 'connected'){
			FB.logout(function (response) {
				location.href = redirectUrl;
			});
		}
	});
}

///Vista para errores
function getNumbers(numberf,numbers, numbert){
	var loop1, loop2, loop3, i = 0, number;
	loop3 = setInterval(function(){
		if(i > 40){
			clearInterval(loop3);
			$("#numberf").html(numberf);
		}else{
			$("#numberf").html( Math.floor(Math.random() * 11) + 1 );
			i++;
		}
	}, 30);
	loop2 = setInterval(function(){
		if(i > 80){
			clearInterval(loop3);
			$("#numbers").html(numbers);
		}else{
			$("#numbers").html( Math.floor(Math.random() * 11) + 1 );
			i++;
		}
	}, 30);
	loop1 = setInterval(function(){
		if(i > 100){
			clearInterval(loop3);
			$("#numbert").html(numbert);
		}else{
			$("#numbert").html( Math.floor(Math.random() * 11) + 1 );
			i++;
		}
	}, 30);
}

$("#strcp").keypress(function(){
	if ($(this).val().length != 0)
		sendAjax( $(this).val() );
});

function sendAjax( value ){
	$.ajax({
		type: "get",
		url: "https://api-codigos-postales.herokuapp.com/v2/buscar",
		data: { codigo_postal: value },
		success: function(response){
			$.get(
				"https://api-codigos-postales.herokuapp.com/v2/codigo_postal/" + response.codigos_postales[0],
				function( objeto ){
					sendDataCode( objeto );
				}
			);
		},
		error: function ( XMLHttpRequest, textStatus, errorthrows ){
			alert( getCodeStatus( XMLHttpRequest ) );
		}
	});
}

function sendDataCode( objeto ){
	$("#strEstado").val( objeto.estado );
	$("#strMunicipio").val( objeto.municipio );
	var select = document.getElementById("strColonia");
	while (select.firstChild) {
		select.removeChild(select.firstChild);
	}
	$.each(objeto.colonias, function( k, v ){
		var option = document.createElement("option");
		option.text = v;
		select.appendChild( option );
	});
}

function getCodeStatus( jqXHR ){
	if (jqXHR.status === 0)
	    return 'Error de conexióm.';
	else if (jqXHR.status == 404)
		return 'Página no encontrada.';
	else if (jqXHR.status == 500)
		return 'Error interno en servidor.';
	else if (textStatus === 'parsererror')
		return 'El análisis JSON solicitado fracasó.';
	else if (textStatus === 'timeout')
		return 'Tiempo de espera terminado.';
	else if (textStatus === 'abort')
		return 'Solicitud ajax cancelada.';
	else
		return 'Error desconocido: ' + jqXHR.responseText;
}