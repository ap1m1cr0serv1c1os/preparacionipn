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
@Table(name = "grupo")
@XmlRootElement
public class Grupo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id_grupo")
    private Integer idGrupo;
    @Basic(optional = false)
    @Column(name = "cupo")
    private int cupo;
    @Basic(optional = false)
    @Column(name = "lugares_disponibles")
    private int lugaresDisponibles;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idGrupo")
    private List<Grupocompuesto> grupocompuestoList;
    
    public Grupo() {
    }

    public Grupo(Integer idGrupo) {
        this.idGrupo = idGrupo;
    }

    public Grupo(Integer idGrupo, int cupo, int lugaresDisponibles) {
        this.idGrupo = idGrupo;
        this.cupo = cupo;
        this.lugaresDisponibles = lugaresDisponibles;
    }

    public Integer getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(Integer idGrupo) {
        this.idGrupo = idGrupo;
    }

    public int getCupo() {
        return cupo;
    }

    public void setCupo(int cupo) {
        this.cupo = cupo;
    }

    public int getLugaresDisponibles() {
        return lugaresDisponibles;
    }

    public void setLugaresDisponibles(int lugaresDisponibles) {
        this.lugaresDisponibles = lugaresDisponibles;
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
        hash += (idGrupo != null ? idGrupo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Grupo)) {
            return false;
        }
        Grupo other = (Grupo) object;
        if ((this.idGrupo == null && other.idGrupo != null) || (this.idGrupo != null && !this.idGrupo.equals(other.idGrupo))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "Grupo [idGrupo=" + idGrupo + ", cupo=" + cupo + ", lugaresDisponibles=" + lugaresDisponibles
				+ ", grupocompuestoList=" + grupocompuestoList + "]";
	}
    
}
