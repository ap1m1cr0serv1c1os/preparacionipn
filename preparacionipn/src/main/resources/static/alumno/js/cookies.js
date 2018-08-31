$(document).ready(function(){
	"use strict";
	var lstCursoCart = getCookie( "_lstproduct" ).split(",");
	$.each(lstCursoCart, function(key, value) {
		$("body").find("button").filter(function(item){
			if($(this).attr("data-cart-add") == value){
				$(this).prop( "disabled", true );
				$(this).text("Agregado");
			}
		});
	});
	$(".cart").text(lstCursoCart[0] == "" ? "0" : lstCursoCart.length);
	
	$("a[data-cart-remove]").click(function(){
		var idHiper = $(this).attr("data-cart-remove");
		$(".lst-cart-details").find("tr").filter(function(item){
			if( $(this).attr("data-item-remove") == idHiper){
				var lstproduct = getCookie( "_lstproduct" );
				var newlst = lstproduct.split(",").filter(function(item){
					return item != idHiper;
				});
				$(".cart").text(newlst.length);
				document.cookie = "_lstproduct=" + newlst.toString() + ";" + getExpiresCookie() + ";path=/";
				$(this).remove();
			}
		});
	});
	
	$("button[data-cart-add]").click(function(){
		var idProduct = $(this).attr("data-cart-add");
		if( idProduct == undefined || idProduct == "")
			return;
		var lstproduct = getCookie( "_lstproduct" );
		if( lstproduct != "" ){ // hay productos en linea
			var existencia = lstproduct.split(",").filter(function(item){
				return item == idProduct;
			});
			if(existencia.length == 0){
				var newProduct = idProduct + "," + lstproduct;
				$(".cart").text(newProduct.split(",").length);
				document.cookie = "_lstproduct=" + newProduct + ";" + getExpiresCookie() + ";path=/";
			}else{
				$(".cart").text(lstproduct.split(",").length);
			}
			$(this).prop( "disabled", true );
			$(this).text("Agregado");
		}else{
			$(".cart").text("1");
			document.cookie = "_lstproduct=" + idProduct + ";" + getExpiresCookie() + ";path=/";
		}
	});
	
	function getExpiresCookie(){
		var d = new Date();
        d.setTime(d.getTime() + (13 * 24 * 60 * 60 * 1000));
        return "expires=" + d.toUTCString();
	}
	
	function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
	
});