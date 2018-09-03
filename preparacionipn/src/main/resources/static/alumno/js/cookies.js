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
			$(this).prop( "disabled", true );
			$(this).text("Agregado");
		}
		
		let image=new Element('div',{class:'modal-window-image'},["<svg viewBox=\"0 0 32 32\" style=\"fill:#48DB71\"><path d=\"M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z\"></path></svg>"]);
		let title=new Element('h1',{class:'modal-window-title'},[ $(".tit").text() ]);
		let text=new Element('p',{class:'modal-window-text'},['Tu curso se agregó correctamente a tu carrito de compras.']);
		let e = new Modal('div',{class:'modal-window-content'},[image,title,text]);
		document.body.appendChild(e);
		
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
	
	$("a[data-href-card-page]").click(function(){
		var urlDetails = $.param( setObjectCookie(), true );
		if(urlDetails != "details0=")
			location.href="/detalles?" + $.param( setObjectCookie(), true );
		else
			location.href="/detalles?";
	});
	
	function setObjectCookie(){
		var lstActual = getCookie( "_lstproduct" ).split(",");
		var objCookyes = new Object();
		var i = 0;
		$.each(lstActual, function(k,v){
			objCookyes["details"+i] = v;
			i++;
		});
		return objCookyes;
	}
	
	class Element{
		constructor(type,attributes,children){
			return this.createCustomElement(type,attributes,children);
		}
		createCustomElement(type,attributes,children){
			let element=document.createElement(type);
			if(children !== undefined) this.addChildren(element,children);
			this.addAttributes(element,attributes);
			return element;
		}
		addAttributes(element,attrObj){
			for(let attr in attrObj){
				if(attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr]);
			}
		}
		addChildren(element,children){
			children.forEach(el =>{
				if(el.nodeType== 1 || el.nodetype==11) element.appendChild(el);
				else element.innerHTML+=el
			});
		}
	}
	class Modal extends Element{
		constructor(type,attributes,children){
			super('div',{class:'modal-window'},[]);
			Element.prototype.addChildren(this,[Element.prototype.createCustomElement(type,attributes,children)]);
			console.log(this)
			this.addEventListener('click',function(e){
				if(e.target === this) Modal.prototype.closeModal.call(this);
			});
		}
		closeModal(){
			document.body.removeChild(this);
		}
	}
});