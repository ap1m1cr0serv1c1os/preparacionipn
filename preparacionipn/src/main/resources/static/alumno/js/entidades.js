"use strict";
exports.__esModule = true;
var curso;
(function (curso) {
    var Alumno = /** @class */ (function () {
        function Alumno() {
        }
        Alumno.prototype.getIdAlumno = function () {
            return this.idAlumno;
        };
        Alumno.prototype.setIdAlumno = function (idAlumno) { this.idAlumno = idAlumno; };
        Alumno.prototype.getNombre = function () { return this.nombre; };
        Alumno.prototype.setNombre = function (nombre) { this.nombre = nombre; };
        Alumno.prototype.getApellidoPaterno = function () { return this.apellidoPaterno; };
        Alumno.prototype.setApellidoPaterno = function (apellidoPaterno) { this.apellidoPaterno = apellidoPaterno; };
        Alumno.prototype.getApellidoMaterno = function () { return this.apellidoMaterno; };
        Alumno.prototype.setApellidoMaterno = function (apellidoMaterno) { this.apellidoMaterno = apellidoMaterno; };
        Alumno.prototype.getEmail = function () { return this.email; };
        Alumno.prototype.setEmail = function (email) { this.email = email; };
        Alumno.prototype.getDireccion = function () { return this.direccion; };
        Alumno.prototype.setDireccion = function (direccion) { this.direccion = direccion; };
        Alumno.prototype.getTelefono = function () { return this.telefono; };
        Alumno.prototype.setTelefono = function (telefono) { this.telefono = telefono; };
        Alumno.prototype.getIdFacebook = function () { return this.idFacebook; };
        Alumno.prototype.setIdFacebook = function (idFacebook) { this.idFacebook = idFacebook; };
        Alumno.prototype.getTutor = function () { return this.tutor; };
        Alumno.prototype.setTutor = function (tutor) { this.tutor = tutor; };
        Alumno.prototype.getTelefonoTutor = function () { return this.telefonoTutor; };
        Alumno.prototype.setTelefonoTutor = function (telefonoTutor) { this.telefonoTutor = telefonoTutor; };
        Alumno.prototype.getCiudad = function () { return this.ciudad; };
        Alumno.prototype.setCiudad = function (ciudad) { this.ciudad = ciudad; };
        Alumno.prototype.getCodigoPostal = function () { return this.codigoPostal; };
        Alumno.prototype.setCodigoPostal = function (codigoPostal) { this.codigoPostal = codigoPostal; };
        Alumno.prototype.getMunicipio = function () { return this.municipio; };
        Alumno.prototype.setMunicipio = function (municipio) { this.municipio = municipio; };
        Alumno.prototype.getListaasistenciaList = function () { return this.listaasistenciaList; };
        Alumno.prototype.setListaasistenciaList = function (listaasistenciaList) {
            this.listaasistenciaList = listaasistenciaList;
        };
        Alumno.prototype.getPagoList = function () { return this.pagoList; };
        Alumno.prototype.setPagoList = function (pagoList) { this.pagoList = pagoList; };
        return Alumno;
    }());
    curso.Alumno = Alumno;
    var Cursoclase = /** @class */ (function () {
        function Cursoclase() {
        }
        Cursoclase.prototype.getIdCursoClase = function () {
            return this.idCursoClase;
        };
        Cursoclase.prototype.setIdCursoClase = function (idCursoClase) {
            this.idCursoClase = idCursoClase;
        };
        Cursoclase.prototype.getNombre = function () {
            return this.nombre;
        };
        Cursoclase.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        Cursoclase.prototype.getDescripcionCorta = function () {
            return this.descripcionCorta;
        };
        Cursoclase.prototype.setDescripcionCorta = function (descripcionCorta) {
            this.descripcionCorta = descripcionCorta;
        };
        Cursoclase.prototype.getDescripcionLarga = function () {
            return this.descripcionLarga;
        };
        Cursoclase.prototype.setDescripcionLarga = function (descripcionLarga) {
            this.descripcionLarga = descripcionLarga;
        };
        Cursoclase.prototype.getCosto = function () {
            return this.costo;
        };
        Cursoclase.prototype.setCosto = function (costo) {
            this.costo = costo;
        };
        Cursoclase.prototype.getUrlImagen = function () {
            return this.urlImagen;
        };
        Cursoclase.prototype.setUrlImagen = function (urlImagen) {
            this.urlImagen = urlImagen;
        };
        Cursoclase.prototype.getGrupocompuestoList = function () {
            return this.grupocompuestoList;
        };
        Cursoclase.prototype.setGrupocompuestoList = function (grupocompuestoList) {
            this.grupocompuestoList = grupocompuestoList;
        };
        return Cursoclase;
    }());
    curso.Cursoclase = Cursoclase;
    var Grupo = /** @class */ (function () {
        function Grupo() {
        }
        Grupo.prototype.getIdGrupo = function () {
            return this.idGrupo;
        };
        Grupo.prototype.setIdGrupo = function (idGrupo) {
            this.idGrupo = idGrupo;
        };
        Grupo.prototype.getCupo = function () {
            return this.cupo;
        };
        Grupo.prototype.setCupo = function (cupo) {
            this.cupo = cupo;
        };
        Grupo.prototype.getLugaresDisponibles = function () {
            return this.lugaresDisponibles;
        };
        Grupo.prototype.setLugaresDisponibles = function (lugaresDisponibles) {
            this.lugaresDisponibles = lugaresDisponibles;
        };
        Grupo.prototype.getGrupocompuestoList = function () {
            return this.grupocompuestoList;
        };
        Grupo.prototype.setGrupocompuestoList = function (grupocompuestoList) {
            this.grupocompuestoList = grupocompuestoList;
        };
        return Grupo;
    }());
    curso.Grupo = Grupo;
    var Grupocompuesto = /** @class */ (function () {
        function Grupocompuesto() {
        }
        Grupocompuesto.prototype.getIdGrupoCompuesto = function () {
            return this.idGrupoCompuesto;
        };
        Grupocompuesto.prototype.setIdGrupoCompuesto = function (idGrupoCompuesto) {
            this.idGrupoCompuesto = idGrupoCompuesto;
        };
        Grupocompuesto.prototype.getListaasistenciaList = function () {
            return this.listaasistenciaList;
        };
        Grupocompuesto.prototype.setListaasistenciaList = function (listaasistenciaList) {
            this.listaasistenciaList = listaasistenciaList;
        };
        Grupocompuesto.prototype.getIdCursoClase = function () {
            return this.idCursoClase;
        };
        Grupocompuesto.prototype.setIdCursoClase = function (idCursoClase) {
            this.idCursoClase = idCursoClase;
        };
        Grupocompuesto.prototype.getIdGrupo = function () {
            return this.idGrupo;
        };
        Grupocompuesto.prototype.setIdGrupo = function (idGrupo) {
            this.idGrupo = idGrupo;
        };
        Grupocompuesto.prototype.getIdHorario = function () {
            return this.idHorario;
        };
        Grupocompuesto.prototype.setIdHorario = function (idHorario) {
            this.idHorario = idHorario;
        };
        Grupocompuesto.prototype.getPagoList = function () {
            return this.pagoList;
        };
        Grupocompuesto.prototype.setPagoList = function (pagoList) {
            this.pagoList = pagoList;
        };
        return Grupocompuesto;
    }());
    curso.Grupocompuesto = Grupocompuesto;
    var Horario = /** @class */ (function () {
        function Horario() {
        }
        Horario.prototype.getIdHorario = function () {
            return this.idHorario;
        };
        Horario.prototype.setIdHorario = function (idHorario) {
            this.idHorario = idHorario;
        };
        Horario.prototype.getDescripcionHorario = function () {
            return this.descripcionHorario;
        };
        Horario.prototype.setDescripcionHorario = function (descripcionHorario) {
            this.descripcionHorario = descripcionHorario;
        };
        Horario.prototype.getGrupocompuestoList = function () {
            return this.grupocompuestoList;
        };
        Horario.prototype.setGrupocompuestoList = function (grupocompuestoList) {
            this.grupocompuestoList = grupocompuestoList;
        };
        return Horario;
    }());
    curso.Horario = Horario;
    var Listaasistencia = /** @class */ (function () {
        function Listaasistencia() {
        }
        Listaasistencia.prototype.getIdListaAsistencia = function () {
            return this.idListaAsistencia;
        };
        Listaasistencia.prototype.setIdListaAsistencia = function (idListaAsistencia) {
            this.idListaAsistencia = idListaAsistencia;
        };
        Listaasistencia.prototype.getAsistio = function () {
            return this.asistio;
        };
        Listaasistencia.prototype.setAsistio = function (asistio) {
            this.asistio = asistio;
        };
        Listaasistencia.prototype.getFecha = function () {
            return this.fecha;
        };
        Listaasistencia.prototype.setFecha = function (fecha) {
            this.fecha = fecha;
        };
        Listaasistencia.prototype.getIdGrupoCompuesto = function () {
            return this.idGrupoCompuesto;
        };
        Listaasistencia.prototype.setIdGrupoCompuesto = function (idGrupoCompuesto) {
            this.idGrupoCompuesto = idGrupoCompuesto;
        };
        Listaasistencia.prototype.getIdAlumno = function () {
            return this.idAlumno;
        };
        Listaasistencia.prototype.setIdAlumno = function (idAlumno) {
            this.idAlumno = idAlumno;
        };
        return Listaasistencia;
    }());
    curso.Listaasistencia = Listaasistencia;
    var Pago = /** @class */ (function () {
        function Pago() {
        }
        Pago.prototype.getIdPago = function () {
            return this.idPago;
        };
        Pago.prototype.setIdPago = function (idPago) {
            this.idPago = idPago;
        };
        Pago.prototype.getCantidad = function () {
            return this.cantidad;
        };
        Pago.prototype.setCantidad = function (cantidad) {
            this.cantidad = cantidad;
        };
        Pago.prototype.getStatus = function () {
            return this.status;
        };
        Pago.prototype.setStatus = function (status) {
            this.status = status;
        };
        Pago.prototype.getTipo = function () {
            return this.tipo;
        };
        Pago.prototype.setTipo = function (tipo) {
            this.tipo = tipo;
        };
        Pago.prototype.getFechaRegistro = function () {
            return this.fechaRegistro;
        };
        Pago.prototype.setFechaRegistro = function (fechaRegistro) {
            this.fechaRegistro = fechaRegistro;
        };
        Pago.prototype.getFechaPago = function () {
            return this.fechaPago;
        };
        Pago.prototype.setFechaPago = function (fechaPago) {
            this.fechaPago = fechaPago;
        };
        Pago.prototype.getIdGrupoCompuesto = function () {
            return this.idGrupoCompuesto;
        };
        Pago.prototype.setIdGrupoCompuesto = function (idGrupoCompuesto) {
            this.idGrupoCompuesto = idGrupoCompuesto;
        };
        Pago.prototype.getIdAlumno = function () {
            return this.idAlumno;
        };
        Pago.prototype.setIdAlumno = function (idAlumno) {
            this.idAlumno = idAlumno;
        };
        return Pago;
    }());
    curso.Pago = Pago;
})(curso = exports.curso || (exports.curso = {}));
