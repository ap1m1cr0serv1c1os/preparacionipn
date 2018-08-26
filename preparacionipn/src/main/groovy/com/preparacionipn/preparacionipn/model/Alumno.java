package com.preparacionipn.preparacionipn.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient; 

@Entity
@Table(name = "alumno")
@XmlRootElement
public class Alumno implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id_alumno")
    private Integer idAlumno;
    @Basic(optional = false)
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "apellido_paterno")
    private String apellidoPaterno;
    @Basic(optional = false)
    @Column(name = "apellido_materno")
    private String apellidoMaterno;
    @Basic(optional = false)
    @Column(name = "email")
    private String email;
    @Column(name = "direccion")
    private String direccion;
    @Column(name = "telefono")
    private String telefono;
    @Basic(optional = false)
    @Column(name = "id_facebook")
    private String idFacebook;
    @Column(name = "tutor")
    private String tutor;
    @Column(name = "telefono_tutor")
    private String telefonoTutor;
    @Basic(optional = false)
    @Column(name = "ciudad")
    private String ciudad;
    @Basic(optional = false)
    @Column(name = "codigo_postal")
    private int codigoPostal;
    @Column(name = "municipio")
    private String municipio;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idAlumno")
    private List<Listaasistencia> listaasistenciaList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idAlumno")
    private List<Pago> pagoList;

    public Alumno() {
    }

    public Alumno(Integer idAlumno) {
        this.idAlumno = idAlumno;
    }

    public Alumno(Integer idAlumno, String nombre, String apellidoMaterno, String email, String idFacebook, String ciudad, int codigoPostal) {
        this.idAlumno = idAlumno;
        this.nombre = nombre;
        this.apellidoMaterno = apellidoMaterno;
        this.email = email;
        this.idFacebook = idFacebook;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }

    public Integer getIdAlumno() {
        return idAlumno;
    }

    public void setIdAlumno(Integer idAlumno) {
        this.idAlumno = idAlumno;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidoPaterno() {
        return apellidoPaterno;
    }

    public void setApellidoPaterno(String apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }

    public String getApellidoMaterno() {
        return apellidoMaterno;
    }

    public void setApellidoMaterno(String apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getIdFacebook() {
        return idFacebook;
    }

    public void setIdFacebook(String idFacebook) {
        this.idFacebook = idFacebook;
    }

    public String getTutor() {
        return tutor;
    }

    public void setTutor(String tutor) {
        this.tutor = tutor;
    }

    public String getTelefonoTutor() {
        return telefonoTutor;
    }

    public void setTelefonoTutor(String telefonoTutor) {
        this.telefonoTutor = telefonoTutor;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public int getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(int codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    @XmlTransient
    public List<Listaasistencia> getListaasistenciaList() {
        return listaasistenciaList;
    }

    public void setListaasistenciaList(List<Listaasistencia> listaasistenciaList) {
        this.listaasistenciaList = listaasistenciaList;
    }

    @XmlTransient
    public List<Pago> getPagoList() {
        return pagoList;
    }

    public void setPagoList(List<Pago> pagoList) {
        this.pagoList = pagoList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idAlumno != null ? idAlumno.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Alumno)) {
            return false;
        }
        Alumno other = (Alumno) object;
        if ((this.idAlumno == null && other.idAlumno != null) || (this.idAlumno != null && !this.idAlumno.equals(other.idAlumno))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "Alumno [idAlumno=" + idAlumno + ", nombre=" + nombre + ", apellidoPaterno=" + apellidoPaterno
				+ ", apellidoMaterno=" + apellidoMaterno + ", email=" + email + ", direccion=" + direccion
				+ ", telefono=" + telefono + ", idFacebook=" + idFacebook + ", tutor=" + tutor + ", telefonoTutor="
				+ telefonoTutor + ", ciudad=" + ciudad + ", codigoPostal=" + codigoPostal + ", municipio=" + municipio
				+ "]";
	}
}
