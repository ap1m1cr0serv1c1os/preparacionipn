package com.preparacionipn.preparacionipn.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

@Entity
@Table(name = "horario")
@XmlRootElement
public class Horario implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id_horario")
    private Integer idHorario;
    @Basic(optional = false)
    @Column(name = "descripcion_horario")
    @Temporal(TemporalType.TIME)
    private Date descripcionHorario;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idHorario")
    private List<Grupocompuesto> grupocompuestoList;

    public Horario() {
    }

    public Horario(Integer idHorario) {
        this.idHorario = idHorario;
    }

    public Horario(Integer idHorario, Date descripcionHorario) {
        this.idHorario = idHorario;
        this.descripcionHorario = descripcionHorario;
    }

    public Integer getIdHorario() {
        return idHorario;
    }

    public void setIdHorario(Integer idHorario) {
        this.idHorario = idHorario;
    }

    public Date getDescripcionHorario() {
        return descripcionHorario;
    }

    public void setDescripcionHorario(Date descripcionHorario) {
        this.descripcionHorario = descripcionHorario;
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
        hash += (idHorario != null ? idHorario.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Horario)) {
            return false;
        }
        Horario other = (Horario) object;
        if ((this.idHorario == null && other.idHorario != null) || (this.idHorario != null && !this.idHorario.equals(other.idHorario))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "Horario [idHorario=" + idHorario + ", descripcionHorario=" + descripcionHorario
				+ ", grupocompuestoList=" + grupocompuestoList + "]";
	}   
    
}
