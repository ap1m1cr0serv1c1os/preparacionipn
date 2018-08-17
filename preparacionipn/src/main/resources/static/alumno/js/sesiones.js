var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    Alumno.prototype.getRNombre = function () {
      return this.nombre;
    }
    Alumno.prototype.setRNombre = function (rnombre) {
      return this.rnombre = rnombre;
    }
    Alumno.prototype.getRCorreo = function () {
      return this.correo;
    }
    Alumno.prototype.setRCorreo = function (correo) {
      return this.correo = correo;
    }
    Alumno.prototype.getRTelefono = function () {
      return this.telefono;
    }
    Alumno.prototype.setRTelefono = function (telefono) {
      return this.telefono = telefono;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumno.prototype.getId = function () {
        return this.id;
    };
    Alumno.prototype.setId = function (id) {
        this.id = id;
    };
    return Alumno;
}());

var alumno_1 = new Alumno();

var checkLoginStateReference = function () {
    FB.getLoginStatus(function (response) {
        if (response.status == 'connected') {
            //var alumno_1 = new Alumno(); // es un objeto
            FB.api('/me', function (dataresponse) {
                alumno_1.setNombre(dataresponse.name);
                alumno_1.setId(dataresponse.id);
                document.getElementById("response").innerHTML = 'Listo';
                $("#register-al").show("slow");
            });
            console.log(alumno_1);
        }
        else {
            $("#register-al").hide("fast");
        }
    });
};
var statusChangeCallback = function (response) {
    if (response.status === 'connected') {
        FB.api('/me', function (dataresponse) {
            window.location.href = './';
        });
    }
    else {
        document.getElementById('status').innerHTML = 'Favor de iniciar sesión';
    }
};
var checkLoginState = function () {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function () {
    FB.init({
        appId: '2099671733382944',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    });
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};
$("#register-al").click(function(e){
  e.preventDefault();
  var result = errors({
    valid : ["strnombre","stremail","strtelefono"],
    normalstyle: { "border-bottom": "solid 1px #ddd"},
    errors : false,
    errorstyle : { "border-bottom": "solid 1px red" },
    otherconf : { "confemail": true }
  });
  if(result){
    alumno_1.setRNombre( $("#strnombre").val() );
    alumno_1.setRCorreo( $("#stremail").val() );
    alumno_1.setRTelefono( $("#strtelefono").val() );
    console.log(alumno_1);
  }
});
