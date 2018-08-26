package com.preparacionipn.preparacionipn.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "platicainformativa")
@XmlRootElement
public class Platicainformativa implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id_platica")
    private Integer idPlatica;
    @Basic(optional = false)
    @Column(name = "email")
    private String email;
    @Basic(optional = false)
    @Column(name = "nombre")
    private String nombre;
    @Basic(optional = false)
    @Column(name = "apellido_paterno")
    private String apellidoPaterno;
    @Basic(optional = false)
    @Column(name = "apellido_materno")
    private String apellidoMaterno;
    @Basic(optional = false)
    @Column(name = "fecha_platica")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaPlatica;
    public Platicainformativa() {
    }

    public Platicainformativa(Integer idPlatica) {
        this.idPlatica = idPlatica;
    }

    public Platicainformativa(Integer idPlatica, String email, String nombre, String apellidoPaterno, String apellidoMaterno, Date fechaPlatica) {
        this.idPlatica = idPlatica;
        this.email = email;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.fechaPlatica = fechaPlatica;
    }

    public Integer getIdPlatica() {
        return idPlatica;
    }

    public void setIdPlatica(Integer idPlatica) {
        this.idPlatica = idPlatica;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public Date getFechaPlatica() {
        return fechaPlatica;
    }

    public void setFechaPlatica(Date fechaPlatica) {
        this.fechaPlatica = fechaPlatica;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPlatica != null ? idPlatica.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Platicainformativa)) {
            return false;
        }
        Platicainformativa other = (Platicainformativa) object;
        if ((this.idPlatica == null && other.idPlatica != null) || (this.idPlatica != null && !this.idPlatica.equals(other.idPlatica))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "Platicainformativa [idPlatica=" + idPlatica + ", email=" + email + ", nombre=" + nombre
				+ ", apellidoPaterno=" + apellidoPaterno + ", apellidoMaterno=" + apellidoMaterno + ", fechaPlatica="
				+ fechaPlatica + "]";
	}
    
}
