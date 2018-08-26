package com.preparacionipn.preparacionipn.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;


@Entity
@Table(name = "grupocompuesto")
@XmlRootElement
public class Grupocompuesto implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id_grupo_compuesto")
    private String idGrupoCompuesto;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idGrupoCompuesto")
    private List<Listaasistencia> listaasistenciaList;
    @JoinColumn(name = "id_curso_clase", referencedColumnName = "id_curso_clase")
    @ManyToOne(optional = false)
    private Cursoclase idCursoClase;
    @JoinColumn(name = "id_grupo", referencedColumnName = "id_grupo")
    @ManyToOne(optional = false)
    private Grupo idGrupo;
    @JoinColumn(name = "id_horario", referencedColumnName = "id_horario")
    @ManyToOne(optional = false)
    private Horario idHorario;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idGrupoCompuesto")
    private List<Pago> pagoList;

    public Grupocompuesto() {
    }

    public Grupocompuesto(String idGrupoCompuesto) {
        this.idGrupoCompuesto = idGrupoCompuesto;
    }

    public String getIdGrupoCompuesto() {
        return idGrupoCompuesto;
    }

    public void setIdGrupoCompuesto(String idGrupoCompuesto) {
        this.idGrupoCompuesto = idGrupoCompuesto;
    }

    @XmlTransient
    public List<Listaasistencia> getListaasistenciaList() {
        return listaasistenciaList;
    }

    public void setListaasistenciaList(List<Listaasistencia> listaasistenciaList) {
        this.listaasistenciaList = listaasistenciaList;
    }

    public Cursoclase getIdCursoClase() {
        return idCursoClase;
    }

    public void setIdCursoClase(Cursoclase idCursoClase) {
        this.idCursoClase = idCursoClase;
    }

    public Grupo getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(Grupo idGrupo) {
        this.idGrupo = idGrupo;
    }

    public Horario getIdHorario() {
        return idHorario;
    }

    public void setIdHorario(Horario idHorario) {
        this.idHorario = idHorario;
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
        hash += (idGrupoCompuesto != null ? idGrupoCompuesto.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Grupocompuesto)) {
            return false;
        }
        Grupocompuesto other = (Grupocompuesto) object;
        if ((this.idGrupoCompuesto == null && other.idGrupoCompuesto != null) || (this.idGrupoCompuesto != null && !this.idGrupoCompuesto.equals(other.idGrupoCompuesto))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "Grupocompuesto [idGrupoCompuesto=" + idGrupoCompuesto + ", listaasistenciaList=" + listaasistenciaList
				+ ", idCursoClase=" + idCursoClase + ", idGrupo=" + idGrupo + ", idHorario=" + idHorario + ", pagoList="
				+ pagoList + "]";
	}
    
}
