var values = [];
var arraylst = [];
var stylenormal = {};
var styleerror = {};
var type = false;
var mailmesage = {
	"confemail" : true
};

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
		mailmesage = objectConfg.otherconf != undefined ? objectConfg.otherconf : { "confemail" : true };

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
		var validationes = new Validacion();
		return validationes.getType();
	}
	return false;
};

var Validacion = /** @class */ (function() {
	function Validacion() {
	}
	Validacion.prototype.getType = function() {
		var i = 0;
		var operations = new OperationsValidation();
		for (var _i = 0, arraylst_1 = arraylst; _i < arraylst_1.length; _i++) {
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
