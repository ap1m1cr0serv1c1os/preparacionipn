package com.preparacionipn.preparacionipn.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

@Entity
@Table(name = "cursoclase")
@XmlRootElement
public class Cursoclase implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id_curso_clase")
    private Integer idCursoClase;
    @Basic(optional = false)
    @Column(name = "nombre")
    private String nombre;
    @Basic(optional = false)
    @Lob
    @Column(name = "descripcion_corta")
    private String descripcionCorta;
    @Basic(optional = false)
    @Lob
    @Column(name = "descripcion_larga")
    private String descripcionLarga;
    @Basic(optional = false)
    @Column(name = "costo")
    private long costo;
    @Column(name = "url_imagen")
    private String urlImagen;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idCursoClase")
    private List<Grupocompuesto> grupocompuestoList;

    public Cursoclase() {
    }

    public Cursoclase(Integer idCursoClase) {
        this.idCursoClase = idCursoClase;
    }

    public Cursoclase(Integer idCursoClase, String nombre, String descripcionCorta, String descripcionLarga, long costo) {
        this.idCursoClase = idCursoClase;
        this.nombre = nombre;
        this.descripcionCorta = descripcionCorta;
        this.descripcionLarga = descripcionLarga;
        this.costo = costo;
    }

    public Integer getIdCursoClase() {
        return idCursoClase;
    }

    public void setIdCursoClase(Integer idCursoClase) {
        this.idCursoClase = idCursoClase;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcionCorta() {
        return descripcionCorta;
    }

    public void setDescripcionCorta(String descripcionCorta) {
        this.descripcionCorta = descripcionCorta;
    }

    public String getDescripcionLarga() {
        return descripcionLarga;
    }

    public void setDescripcionLarga(String descripcionLarga) {
        this.descripcionLarga = descripcionLarga;
    }

    public long getCosto() {
        return costo;
    }

    public void setCosto(long costo) {
        this.costo = costo;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    @XmlTransient
    public List<Grupocompuesto> getGrupocompuestoList() {
        return grupocompuestoList;
    }

    public void setGrupocompuestoList(List<Grupocompuesto> grupocompuestoList) {
        this.grupocompuestoList = grupocompuestoList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idCursoClase != null ? idCursoClase.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Cursoclase)) {
            return false;
        }
        Cursoclase other = (Cursoclase) object;
        if ((this.idCursoClase == null && other.idCursoClase != null) || (this.idCursoClase != null && !this.idCursoClase.equals(other.idCursoClase))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "Cursoclase [idCursoClase=" + idCursoClase + ", nombre=" + nombre + ", descripcionCorta="
				+ descripcionCorta + ", descripcionLarga=" + descripcionLarga + ", costo=" + costo + ", urlImagen="
				+ urlImagen + ", grupocompuestoList=" + grupocompuestoList + "]";
	}
}
