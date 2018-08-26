package com.preparacionipn.preparacionipn.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "listaasistencia")
@XmlRootElement
public class Listaasistencia implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id_lista_asistencia")
    private Integer idListaAsistencia;
    @Basic(optional = false)
    @Column(name = "asistio")
    private int asistio;
    @Basic(optional = false)
    @Column(name = "fecha")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fecha;
    @JoinColumn(name = "id_grupo_compuesto", referencedColumnName = "id_grupo_compuesto")
    @ManyToOne(optional = false)
    private Grupocompuesto idGrupoCompuesto;
    @JoinColumn(name = "id_alumno", referencedColumnName = "id_alumno")
    @ManyToOne(optional = false)
    private Alumno idAlumno;

    public Listaasistencia() {
    }

    public Listaasistencia(Integer idListaAsistencia) {
        this.idListaAsistencia = idListaAsistencia;
    }

    public Listaasistencia(Integer idListaAsistencia, int asistio, Date fecha) {
        this.idListaAsistencia = idListaAsistencia;
        this.asistio = asistio;
        this.fecha = fecha;
    }

    public Integer getIdListaAsistencia() {
        return idListaAsistencia;
    }

    public void setIdListaAsistencia(Integer idListaAsistencia) {
        this.idListaAsistencia = idListaAsistencia;
    }

    public int getAsistio() {
        return asistio;
    }

    public void setAsistio(int asistio) {
        this.asistio = asistio;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Grupocompuesto getIdGrupoCompuesto() {
        return idGrupoCompuesto;
    }

    public void setIdGrupoCompuesto(Grupocompuesto idGrupoCompuesto) {
        this.idGrupoCompuesto = idGrupoCompuesto;
    }

    public Alumno getIdAlumno() {
        return idAlumno;
    }

    public void setIdAlumno(Alumno idAlumno) {
        this.idAlumno = idAlumno;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idListaAsistencia != null ? idListaAsistencia.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Listaasistencia)) {
            return false;
        }
        Listaasistencia other = (Listaasistencia) object;
        if ((this.idListaAsistencia == null && other.idListaAsistencia != null) || (this.idListaAsistencia != null && !this.idListaAsistencia.equals(other.idListaAsistencia))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "Listaasistencia [idListaAsistencia=" + idListaAsistencia + ", asistio=" + asistio + ", fecha=" + fecha
				+ ", idGrupoCompuesto=" + idGrupoCompuesto + ", idAlumno=" + idAlumno + "]";
	}

}
