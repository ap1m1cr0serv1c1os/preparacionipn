function sendData( idElement ) {
	var lstElements = $(".valid-errors").find("input");
	var listSend = [], listValid = [];
	if( $(idElement).attr("onsend") != "[]"){
		listSend = JSON.parse( $(idElement).attr("onsend") );
	}
	if( $(idElement).attr("onvalid") != "[]"){
		listValid = JSON.parse( $(idElement).attr("onvalid") );
	}
	
	var result = errors({
		normalstyle : { "border" : "solid 1px #eee" },
		errors : true,
		errorstyle : { "border" : "solid 1px red" },
		otherconf : { "confemail" : false, "elements":true },
		lstelements: lstElements.filter(function( item ){
			return listValid.includes( $(this).attr("id") ) ? false : true;
			})
	});
	if(result){
		var objetoAdmin = convertToObject(lstElements.filter(function( item ){
			return listSend.includes( $(this).attr("id") ) ? false : true;
			}));
		$.post( $(idElement).attr("href-post"), objetoAdmin);
		if( $(idElement).attr("onclear") == "true"){
			clearElements($(".valid-errors").find("input").filter(function( item ){
				return listValid.includes( $(this).attr("id") ) ? false : true;
			}));
		}
	}

}