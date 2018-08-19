var values = [];
var arraylst = [];
var stylenormal = {};
var styleerror = {};
var type = false;
var mailmesage = {
	"confemail" : false,
	"element": false
};
var lstelements = undefined;

var validators = {
		required: {
				name: 'required',
				type: 'required',
				message: 'Campo requerido'
		},
		minlength: {
				name: 'minlength',
				type: 'minlength',
				message: 'El campo es menor que {0} caracteres'
		},
		maxlength: {
				name: 'maxlength',
				type: 'maxlength',
				message: 'El campo es mayor que {0} caracteres'
		},
		date: {
				name: 'date',
				type: 'regex',
				regex: new RegExp([
						'^',
						'(19|20)[0-9]{2}',
						'-',
						'(0[1-9]|1[012])',
						'-',
						'(0[1-9]|[12][0-9]|3[01])',
						'$'
				].join('')),
				message: 'El campo no es correcto'
		},
		email: {
				name: '',
				type: 'regex',
				regex: new RegExp([
						'^',
						'[a-zA-Z0-9._%+-]+',
						'@',
						'[a-zA-Z0-9.-]+',
						'[.][a-zA-Z]{2,4}',
						'$'
				].join('')),
				message: 'El contenido no es un correo válido'
		},
		integer: {
				name: 'integer',
				type: 'regex',
				regex: '^(0|[-]?[1-9]([0-9]+)?)$',
				message: 'El campo no es un valor válido'
		},
		integerpositive: {
				name: 'integerpositive',
				type: 'regex',
				regex: '^[1-9]([0-9]+)?$',
				message: 'El campo no es un numero positivo'
		},
		integernegative: {
				name: 'integernegative',
				type: 'regex',
				regex: '^[-][1-9]([0-9]+)?$',
				message: 'El campo no es un numero negativo'
		}
};

var errors = function(objectConfg) {
	if (objectConfg != undefined) {

		arraylst = objectConfg.valid != undefined ? objectConfg.valid : [];
		stylenormal = objectConfg.normalstyle != undefined ? objectConfg.normalstyle : { "border" : "1px solid #eee" };
		type = objectConfg.errors !== undefined ? objectConfg.errors : false;
		styleerror = objectConfg.errorstyle != undefined ? objectConfg.errorstyle : { "border" : "1px solid red" };
		mailmesage = objectConfg.otherconf != undefined ? objectConfg.otherconf : { "confemail" : false, "elements": false };
		lstelements = objectConfg.lstelements != undefined ? objectConfg.lstelements : undefined;
		var elementsfist;
		if(lstelements != undefined){
			jQuery.each(lstelements, function ( key, value ) {
				jQuery(value).css(stylenormal);
				if (type) {
					jQuery("#err" + jQuery(value).attr("id") ).hide("slow");
				}
				if (mailmesage.confemail) {
					jQuery("#err-email-" + jQuery(value).attr("id") ).hide("slow");
				}
			});
			var validationes = new Validacion(true);
			return validationes.getType();
		}
		for (var _i = 0, arraylst_2 = arraylst; _i < arraylst_2.length; _i++) {
			var valoritem = arraylst_2[_i];
			jQuery("#" + valoritem).css(stylenormal);
			if (type) {
				jQuery("#err" + valoritem).hide("slow");
			}
			if (mailmesage.confemail) {
				jQuery("#err-email-" + valoritem).hide("slow");
			}
		}
		var validationes = new Validacion(false);
		return validationes.getType();
	}
	return false;
};

var Validacion = /** @class */ (function() {
	function Validacion(isElement) {
        this.isElement = isElement;
    }
	Validacion.prototype.getType = function() {
		var i = 0;
		var operations = new OperationsValidation();
		var operationselements = new OperationsValidationElements();

		if (this.isElement) {
			jQuery.each(lstelements, function (key, value) {
				var atributoId = jQuery(value).attr("id");
				switch (jQuery(value).get(0).nodeName) {
					case "INPUT":{
						switch (jQuery(value).attr("type")) {
							case "email":{
								values[i] = operationselements.getIEmail(value, atributoId);
							}
              break;
              case "text":{
              	values[i] = operationselements.getValueText(value, atributoId);
              }
            	break;
							case "tel": {
								values[_i] = operationselements.getValueText(value, type);
							}
							break;
							case "date": {
								values[_i] = operations.getExpresion(jQuery(value).val(), "f");
							}
							break;
            }
          }
          break;
					case "TEXTAREA":{
						values[i] = operationselements.getValueText(value, atributoId);
					}
					break;
					case "SELECT":{
						values[i] = operationselements.getValueSelect(value, atributoId);
					}
					break;
					default: break;
				}
				i++;
			});
		}

		for (var _i = i, arraylst_1 = arraylst; _i < arraylst_1.length; _i++) {
			var datoItem = arraylst_1[_i];
			switch (jQuery("#" + datoItem).get(0).nodeName) {
			case "INPUT": {
				switch (jQuery("#" + datoItem).attr("type")) {
				case "email": {
					values[_i] = operations.getIEmail(datoItem, type,
							mailmesage.confemail);
				}
					break;
				case "text": {
					values[_i] = operations.getValueText(datoItem, type);
				}
				break;
				case "tel": {
					values[_i] = operations.getValueText(datoItem, type);
				}
				break;
				case "date": {
					values[_i] = operations.getExpresion(jQuery("#" + datoItem).val(), "f");
				}
					break;
				}
			}
				break;
			case "TEXTAREA": {
				values[_i] = operations.getValueText(datoItem, type);
			}
				break;
			case "SELECT": {
				values[_i] = operations.getValueSelect(datoItem, type);
			}
				break;
			default:
				break;
			}
		}

		var desition = values.filter(function(item) {
			return item == false;
		});
		console.log("valor desition => "+values);
		return desition.length > 0 ? false : true;
	};
	return Validacion;
}());

var OperationsValidation = /** @class */ (function() {
	function OperationsValidation() {
	}
	OperationsValidation.prototype.getIEmail = function(datoItem, type,
			confemail) {
		var valoritem = jQuery("#" + datoItem).val();
		if (valoritem === "") {
			jQuery("#" + datoItem).css(styleerror);
			if (type) {
				jQuery("#err" + datoItem).show("slow");
			}
			return false;
		}
		if (this.getExpresion(valoritem, "c") === false) {
			jQuery("#" + datoItem).css(styleerror);
			if (confemail) {
				jQuery("#err-email-" + datoItem).show("slow");
			} else {
				if (type) {
					jQuery("#err" + datoItem).show("slow");
				}
			}
			return false;
		}
		return true;
	};
	OperationsValidation.prototype.getExpresion = function(texto, type) {
		if (jQuery.trim(type) === "n") {
			if (!/^([1-9])*$/.exec(texto)) {
				return true;
			}
			return false;
		} else if (jQuery.trim(type) === "d") {
			if (!/^[1-9]+([.])?([0-9]+)?$/.exec(texto)) {
				return true;
			}
			return false;
		} else if (jQuery.trim(type) === "c") {
			if (!/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/.exec(texto)) {
				return false;
			}
			return true;
		}	else if (jQuery.trim(type) === "f"){
			if(!/^(19|20)[0-9]{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.exec( texto )){
				return false;
			}
			return true;
		}
	};
	OperationsValidation.prototype.getValueText = function(item, type) {
		var valoritem = jQuery("#" + item).val();
		if (valoritem === "") {
			jQuery("#" + item).css(styleerror);
			if (type) {
				jQuery("#err" + item).show("slow");
			}
			return false;
		}
		return true;
	};
	OperationsValidation.prototype.getValueSelect = function(item, type) {
		var valoritem = jQuery("#" + item).val();
		if (valoritem === "" || valoritem === "0" || valoritem === undefined) {
			jQuery("#" + item).css(styleerror);
			if (type) {
				jQuery("#err" + item).show("slow");
			}
			return false;
		}
		return true;
	};
	return OperationsValidation;
}());

var OperationsValidationElements = /** @class */ (function () {
    function OperationsValidationElements() {
    }
		var operations = new OperationsValidation();
    OperationsValidationElements.prototype.getIEmail = function (value, atributoId) {
        var valoritem = jQuery(value).val();
        if (valoritem === "") {
            jQuery(value).css(styleerror);
            if (type) {
                jQuery("#err" + atributoId).show("slow");
            }
            return false;
        }
        if (operations.getExpresion(valoritem, "c") === false) {
            jQuery(value).css(styleerror);
            if (mailmesage.confemail) {
                jQuery("#err-email-" + atributoId).show("slow");
            }
            else if (type) {
                jQuery("#err" + atributoId).show("slow");
            }
            return false;
        }
        return true;
    };
    OperationsValidationElements.prototype.getValueText = function (value, atributoId) {
        var valoritem = jQuery(value).val();
        if (valoritem === "") {
            jQuery(value).css(styleerror);
            if (type) {
                jQuery("#err" + atributoId).show("slow");
            }
            return false;
        }
        return true;
    };
    OperationsValidationElements.prototype.getValueSelect = function (value, atributoId) {
        var valoritem = jQuery(value).val();
        if (valoritem === "" || valoritem === "0" || valoritem === undefined) {
            jQuery(value).css(styleerror);
            if (type) {
                jQuery("#err" + atributoId).show("slow");
            }
            return false;
        }
        return true;
    };
    return OperationsValidationElements;
}());


var clear = function(arraylst) {
	for (var _i = 0, arraylst_3 = arraylst; _i < arraylst_3.length; _i++) {
		var itemClear = arraylst_3[_i];
		switch (jQuery("#" + itemClear).get(0).nodeName) {
		case "INPUT":
			jQuery("#" + itemClear).val("");
			break;
		case "SELECT":
			jQuery("#" + itemClear)[0].selectedIndex = 0;
			break;
		case "TEXTAREA":
			jQuery("#" + itemClear).val("");
			break;
		}
	}
};

var clearElements = function(lstements) {
	jQuery.each(lstements, function ( key, value ) {
		switch ( jQuery(value).get(0).nodeName ){
		case "INPUT":
			jQuery(value).val("");
			break;
		case "SELECT":
			jQuery(value).selectedIndex = 0;
			break;
		case "TEXTAREA":
			jQuery(value).val("");
			break;
		}
	});
}

var convertToClass = function(classtoConvert, objeto){
	jQuery.each(objeto, function ( key, value ) {
		classtoConvert[key] = value;
	});
	return classtoConvert;
}

var convertToObject = function(lstements){
	var objetoCreado={};
	jQuery.each(lstements, function ( key, value ) {
		switch ( jQuery(value).get(0).nodeName ){
		case "INPUT":
			objetoCreado[jQuery(value).attr("id")] = jQuery(value).val();
			break;
		case "SELECT":
			objetoCreado[jQuery(value).attr("id")] = jQuery(value).selectedIndex;
			break;
		case "TEXTAREA":
			objetoCreado[jQuery(value).attr("id")] = jQuery(value).val();
			break;
		}
	});
	return objetoCreado;
}

jQuery(".data-numeric").keypress(function() {
	var operations = new OperationsValidation();
	if (operations.getExpresion(jQuery(".data-numeric").val(), "n")) {
		jQuery(".data-numeric").val("");
	}
});

jQuery(".data-decimal").keypress(function() {
	var operations = new OperationsValidation();
	if (operations.getExpresion(jQuery(".data-decimal").val(), "n")) {
		jQuery(".data-decimal").val("");
	}
});
