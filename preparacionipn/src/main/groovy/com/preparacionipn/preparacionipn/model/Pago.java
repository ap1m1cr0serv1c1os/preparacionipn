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
@Table(name = "pago")
@XmlRootElement
public class Pago implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id_pago")
    private Integer idPago;
    @Basic(optional = false)
    @Column(name = "cantidad")
    private long cantidad;
    @Basic(optional = false)
    @Column(name = "status")
    private int status;
    @Basic(optional = false)
    @Column(name = "tipo")
    private int tipo;
    @Basic(optional = false)
    @Column(name = "fecha_registro")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaRegistro;
    @Basic(optional = false)
    @Column(name = "fecha_pago")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaPago;
    @JoinColumn(name = "id_grupo_compuesto", referencedColumnName = "id_grupo_compuesto")
    @ManyToOne(optional = false)
    private Grupocompuesto idGrupoCompuesto;
    @JoinColumn(name = "id_alumno", referencedColumnName = "id_alumno")
    @ManyToOne(optional = false)
    private Alumno idAlumno;

    public Pago() {
    }

    public Pago(Integer idPago) {
        this.idPago = idPago;
    }

    public Pago(Integer idPago, long cantidad, int status, int tipo, Date fechaRegistro, Date fechaPago) {
        this.idPago = idPago;
        this.cantidad = cantidad;
        this.status = status;
        this.tipo = tipo;
        this.fechaRegistro = fechaRegistro;
        this.fechaPago = fechaPago;
    }

    public Integer getIdPago() {
        return idPago;
    }

    public void setIdPago(Integer idPago) {
        this.idPago = idPago;
    }

    public long getCantidad() {
        return cantidad;
    }

    public void setCantidad(long cantidad) {
        this.cantidad = cantidad;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Date getFechaPago() {
        return fechaPago;
    }

    public void setFechaPago(Date fechaPago) {
        this.fechaPago = fechaPago;
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
        hash += (idPago != null ? idPago.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof Pago)) {
            return false;
        }
        Pago other = (Pago) object;
        if ((this.idPago == null && other.idPago != null) || (this.idPago != null && !this.idPago.equals(other.idPago))) {
            return false;
        }
        return true;
    }

	@Override
	public String toString() {
		return "Pago [idPago=" + idPago + ", cantidad=" + cantidad + ", status=" + status + ", tipo=" + tipo
				+ ", fechaRegistro=" + fechaRegistro + ", fechaPago=" + fechaPago + ", idGrupoCompuesto="
				+ idGrupoCompuesto + ", idAlumno=" + idAlumno + "]";
	}
    
}
