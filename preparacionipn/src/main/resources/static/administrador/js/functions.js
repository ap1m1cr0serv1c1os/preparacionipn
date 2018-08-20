function sendData( idElement ) {
	var lstElements = $(".valid-errors").find("input");
	if( validate( idElement, lstElements ) ){
		var objetoAdmin = convertToObject(lstElements.filter(function( item ){
			return listSend( idElement ).includes( $(this).attr("id") ) ? false : true;
			}));
		$.post( $(idElement).attr("href-post"), objetoAdmin);
		if( $(idElement).attr("onclear") == "true"){
			clearElements($(".valid-errors").find("input").filter(function( item ){
				return listValid( idElement).includes( $(this).attr("id") ) ? false : true;
			}));
		}
	}

}

$("input[type='file']").on("change",function(){
	var filePath = $(this).val();
    var lstExtensions = $(this).attr("accept").trim().split(",").filter(function(item){
      return item == (filePath.substring(filePath.lastIndexOf("."))).toLowerCase();
    });
    if(lstExtensions.length == 0){
        $(this).val("");
        return false;
    }else{
        if ($(this)[0].files && $(this)[0].files[0] && $(this).attr("preview") != undefined) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img class="rounded-circle mx-auto d-block" src="'+e.target.result+'">';
            };
            reader.readAsDataURL($(this)[0].files[0]);
        }
    }
});

$(".sendDataMeta").on("submit", function(e){
    e.preventDefault();
    var f = $(this);
    var formData = new FormData(document.getElementsByClassName("sendDataMeta"));
    var lstElements = $(".valid-errors").find("input");
    var idElement = $(".sendmeta");
    if( validate( idElement, lstElements ) ){
    	$.ajax({
            url: $(idElement).attr("href-post"),
            type: "post",
            dataType: "html",
            data: formData,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(res){
            
        });
    	if( $(idElement).attr("onclear") == "true"){
			clearElements($(".valid-errors").find("input").filter(function( item ){
				return listValid( idElement).includes( $(this).attr("id") ) ? false : true;
			}));
		}
    }
    
});

function listSend( idElement ){
	return $(idElement).attr("onsend") != "[]" ? JSON.parse( $(idElement).attr("onsend") ) : [];
}

function listValid( idElement ){
	return $(idElement).attr("onvalid") != "[]" ? JSON.parse( $(idElement).attr("onvalid") ) : [];
}

function validate( idElement, lstElements ){	
	var result = errors({
		normalstyle : { "border" : "solid 1px #eee" },
		errors : true,
		errorstyle : { "border" : "solid 1px red" },
		otherconf : { "confemail" : false, "elements":true },
		lstelements: lstElements.filter(function( item ){
			return listValid( idElement ).includes( $(this).attr("id") ) ? false : true;
			})
	});
	return result;
}

function isValidType( idElement ){
	$(idElement).attr("pattern");
}

