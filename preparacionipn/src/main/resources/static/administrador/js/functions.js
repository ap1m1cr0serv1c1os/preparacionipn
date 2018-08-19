(function() {
	var result = errors({
		//valid : [ "strNoTarjeta", "strNombreTarj", "stdate" ],
		normalstyle : { "border-bottom" : "solid 1px #ddd" },
		errors : true,
		errorstyle : { "border-bottom" : "solid 1px red" },
		otherconf : { "confemail" : false,"elements":true },
		lstelements: $(".valid-errors").find("input").filter(function( item ){
			return $(this).attr("id") != "strpassre";
			})
	});
	clearElements($(".valid-errors").find("input").filter(function( item ){
		return $(this).attr("id") != "strpassre";
	}));

})();