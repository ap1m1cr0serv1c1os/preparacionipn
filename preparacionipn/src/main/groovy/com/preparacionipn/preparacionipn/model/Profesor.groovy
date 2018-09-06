package com.preparacionipn.preparacionipn.model

import javax.persistence.Basic
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table
import javax.xml.bind.annotation.XmlRootElement

@Entity
@Table(name = "profesor")
@XmlRootElement
class Profesor implements Serializable{

	def static final long serialVersionUID = 1L
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	@Column(name = "id_profesor")
	Integer idProfesor
	@Basic(optional = false)
	@Column(name = "nombre")
	String nombre
	@Column(name = "apellido_paterno")
	String apellidoPaterno
	@Basic(optional = false)
	@Column(name = "apellido_materno")
	String apellidoMaterno
	@Basic(optional = false)
	@Column(name = "correo")
	String email
	@Basic(optional = false)
	@Column(name = "password")
	String password
	@Column(name = "actualizar")
	boolean actualizar
	@Column(name = "eliminar")
	boolean eliminar
	@Column(name = "registrar")
	boolean registrar

	public Profesor() {
		super()
	}

	def Profesor(Integer idProfesor, String nombre, String apellidoPaterno, String apellidoMaterno, String email,
			String password, boolean actualizar, boolean eliminar, boolean registrar) {
		super()
		this.idProfesor = idProfesor
		this.nombre = nombre
		this.apellidoPaterno = apellidoPaterno
		this.apellidoMaterno = apellidoMaterno
		this.email = email
		this.password = password
		this.actualizar = actualizar
		this.eliminar = eliminar
		this.registrar = registrar
	}

	def Profesor(Integer idProfesor, String nombre, String apellidoPaterno, String apellidoMaterno, String email,
			String password) {
		super()
		this.idProfesor = idProfesor
		this.nombre = nombre
		this.apellidoPaterno = apellidoPaterno
		this.apellidoMaterno = apellidoMaterno
		this.email = email
		this.password = password
	}



	def Integer getIdProfesor() {
		return idProfesor
	}
	
	def setIdProfesor(Integer idProfesor) {
		this.idProfesor = idProfesor
	}
	
	def String getNombre() {
		return nombre
	}
	
	def setNombre(String nombre) {
		this.nombre = nombre
	}
	
	def String getApellidoPaterno() {
		return apellidoPaterno
	}
	
	def setApellidoPaterno(String apellidoPaterno) {
		this.apellidoPaterno = apellidoPaterno
	}
	
	def String getApellidoMaterno() {
		return apellidoMaterno
	}
	
	def setApellidoMaterno(String apellidoMaterno) {
		this.apellidoMaterno = apellidoMaterno
	}
	
	def String getEmail() {
		return email
	}
	
	def setEmail(String email) {
		this.email = email
	}
	
	def String getPassword() {
		return password
	}
	
	def setPassword(String password) {
		this.password = password
	}
	
	def boolean isActualizar() {
		return actualizar
	}
	
	def setActualizar(boolean actualizar) {
		this.actualizar = actualizar
	}
	
	def boolean isEliminar() {
		return eliminar
	}
	
	def setEliminar(boolean eliminar) {
		this.eliminar = eliminar
	}
	
	def boolean isRegistrar() {
		return registrar
	}
	
	def setRegistrar(boolean registrar) {
		this.registrar = registrar
	}

	@Override
	def int hashCode() {
		final int prime = 31
		int result = 1
		result = prime * result + (actualizar ? 1231 : 1237)
		result = prime * result + ((apellidoMaterno == null) ? 0 : apellidoMaterno.hashCode())
		result = prime * result + ((apellidoPaterno == null) ? 0 : apellidoPaterno.hashCode())
		result = prime * result + (eliminar ? 1231 : 1237)
		result = prime * result + ((email == null) ? 0 : email.hashCode())
		result = prime * result + ((idProfesor == null) ? 0 : idProfesor.hashCode())
		result = prime * result + ((nombre == null) ? 0 : nombre.hashCode())
		result = prime * result + ((password == null) ? 0 : password.hashCode())
		result = prime * result + (registrar ? 1231 : 1237)
		return result
	}

	@Override
	def boolean equals(Object obj) {
		if (this == obj)
			return true
		if (obj == null)
			return false
		if (getClass() != obj.getClass())
			return false
		Profesor other = (Profesor) obj;
		if (actualizar != other.actualizar)
			return false
		if (apellidoMaterno == null) {
			if (other.apellidoMaterno != null)
				return false
		} else if (!apellidoMaterno.equals(other.apellidoMaterno))
			return false
		if (apellidoPaterno == null) {
			if (other.apellidoPaterno != null)
				return false
		} else if (!apellidoPaterno.equals(other.apellidoPaterno))
			return false
		if (eliminar != other.eliminar)
			return false
		if (email == null) {
			if (other.email != null)
				return false
		} else if (!email.equals(other.email))
			return false
		if (idProfesor == null) {
			if (other.idProfesor != null)
				return false
		} else if (!idProfesor.equals(other.idProfesor))
			return false
		if (nombre == null) {
			if (other.nombre != null)
				return false
		} else if (!nombre.equals(other.nombre))
			return false
		if (password == null) {
			if (other.password != null)
				return false
		} else if (!password.equals(other.password))
			return false
		if (registrar != other.registrar)
			return false
		return true
	}

	@Override
	def String toString() {
		return "Profesor [idProfesor=" + idProfesor + ", nombre=" + nombre + ", apellidoPaterno=" + apellidoPaterno
				+ ", apellidoMaterno=" + apellidoMaterno + ", email=" + email + ", password=" + password
				+ ", actualizar=" + actualizar + ", eliminar=" + eliminar + ", registrar=" + registrar + "]"
	}
	
	
	
}
