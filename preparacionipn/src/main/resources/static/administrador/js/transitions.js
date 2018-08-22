function getItem(id) {
	var hrefs = $(id).attr("data-href-to-view");
	if ($(id).attr("data-href-to-menu") != undefined) {
		var contenido = $(id).attr("data-href-to-menu");
		$(".change-menu").find(".has-sub").removeClass("has-sub");
		$(".change-menu").find(".active").removeClass("active");
		$(".change-menu li span[data-href*='" + contenido + "']").parent("li").addClass("active has-sub");
		document.title = contenido;
	}

	var idelement = {
		id : 0
	};
	if ($(id).attr("data-href-to-view-data") != undefined) {
		idelement.id = $(id).attr("data-href-to-view-data");
		$.ajax({
			type : "get",
			url : hrefs + "/" + idelement.id,
			cache : false,
			success : function(dato) {
				$(".main-content").fadeOut("slow", function() {
					$(this).html(dato).slideDown("slow");
				});
			},
			error : function(XMLHttpRequest, textStatus, errorthrows) {
				alert('Error: ' + errorthrows);
			}
		});
	}else{
		$.ajax({
			type : "get",
			url : hrefs,
			cache : false,
			success : function(dato) {
				$(".main-content").fadeOut("slow", function() {
					$(this).html(dato).slideDown("slow");
				});
			},
			error : function(XMLHttpRequest, textStatus, errorthrows) {
				alert('Error: ' + errorthrows);
			}
		});
	}
	
}