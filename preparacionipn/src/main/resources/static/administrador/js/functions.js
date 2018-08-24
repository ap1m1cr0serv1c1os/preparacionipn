function sendData( idElement ) {
	var lstElements = $(".valid-errors").find("input");
	if( validate( idElement, lstElements ) ){
		var objetoAdmin = convertToObject(lstElements.filter(function( item ){
			return listSend( idElement ).includes( $(this).attr("id") ) ? false : true;
			}));
		$.post( $(idElement).attr("data-href-post"), objetoAdmin);
		if( $(idElement).attr("data-onclear") == "true"){
			clearElements($(".valid-errors").find("input").filter(function( item ){
				return listValid( idElement).includes( $(this).attr("id") ) ? false : true;
			}));
		}
	}

}

function getSize( input ){
	var tamanio = $(input).attr("data-image-size").trim().split(",");
    var fReader = new FileReader();
    fReader.onload = function( event ){
    	var img = new Image();
    	img.src = event.target.result;
    	img.onload = function() {
    		$(input).attr( "data-loaded", "false" );
    		if ( this.height > tamanio[1] && this.width > tamanio[0] ){
    			$(input).attr( "data-loaded", "true" );
    		}
    	}
    }
    fReader.readAsDataURL( input[0].files[0] );
}

function setArchive( fileElement ){
	var progress = $(fileElement).attr("data-progress");
    if( progress != undefined)
    	$( "#" + progress ).show("slow");
    
    if( $(fileElement).attr("data-image-size") != undefined ){
    	getSize( $(fileElement) );
	}

    var filePath = $(fileElement).val();
    var lstExtensions = $(fileElement).attr("accept").trim().split(",").filter(function(item){
    	return item == (filePath.substring(filePath.lastIndexOf("."))).toLowerCase();
    });

    if(lstExtensions.length == 0){
        $(fileElement).val("");
        return false;
    }else{
    	if( progress != undefined)
            getProgress( progress );
    	setTimeLeftImg( $(fileElement), progress );
    }
};

function getProgress( progress ){
	var width = 1;
    var id = setInterval(function () {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            $("#" + progress).val(width);
        }
    }, 30);
}

function setTimeLeftImg( reference, idprogress ){
	setTimeout( function(){
		if( reference.attr("data-loaded") == "true" ){
			if (reference[0].files && reference[0].files[0] && reference.attr("data-preview") != undefined) {
				var reader = new FileReader();
				reader.onload = function(e) {
					$("#" + reference.attr("data-preview") ).fadeIn("slow", function() {
						var dato = '<img class="rounded-circle mx-auto d-block" src="'+e.target.result+'">';
						$(this).html(dato).slideDown("slow");
					});
				};
				reader.readAsDataURL(reference[0].files[0]);
			}
			if( idprogress != undefined)
	              $("#" + idprogress).hide("slow");
		}else{
			reference.val("");
			$("#" + reference.attr("data-preview")).fadeOut("slow", function() {
				$(this).html("").slideUp("slow");
			});
			if( idprogress != undefined)
	              $("#" + idprogress).hide("slow");
			return false;
		}
	}, 3000, reference);
}

$(".sendDataMeta").on("submit", function(e){
    e.preventDefault();
    var f = $(this);
    var formData = new FormData(document.getElementsByClassName("sendDataMeta"));
    var lstElements = $(".valid-errors").find("input");
    var idElement = $(".sendmeta");
    if( validate( idElement, lstElements ) ){
    	$.ajax({
            url: $(idElement).attr("data-href-post"),
            type: "post",
            dataType: "html",
            data: formData,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(res){
            
        });
    	if( $(idElement).attr("data-onclear") == "true"){
			clearElements($(".valid-errors").find("input").filter(function( item ){
				return listValid( idElement).includes( $(this).attr("id") ) ? false : true;
			}));
		}
    }
    
});

function listSend( idElement ){
	return $(idElement).attr("data-onsend") != "[]" ? JSON.parse( $(idElement).attr("data-onsend") ) : [];
}

function listValid( idElement ){
	return $(idElement).attr("data-onvalid") != "[]" ? JSON.parse( $(idElement).attr("data-onvalid") ) : [];
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

