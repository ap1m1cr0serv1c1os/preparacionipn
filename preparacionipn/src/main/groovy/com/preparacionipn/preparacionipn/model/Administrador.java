package com.preparacionipn.preparacionipn.model;

public class Administrador {
	boolean chkactualizar;
	boolean chkeliminar;
	boolean chkregistrar;
	String strcorreo;
	String strnombre;
	String strpass;
	String strpassre;
	public boolean isChkactualizar() {
		return chkactualizar;
	}
	public void setChkactualizar(boolean chkactualizar) {
		this.chkactualizar = chkactualizar;
	}
	public boolean isChkeliminar() {
		return chkeliminar;
	}
	public void setChkeliminar(boolean chkeliminar) {
		this.chkeliminar = chkeliminar;
	}
	public boolean isChkregistrar() {
		return chkregistrar;
	}
	public void setChkregistrar(boolean chkregistrar) {
		this.chkregistrar = chkregistrar;
	}
	public String getStrcorreo() {
		return strcorreo;
	}
	public void setStrcorreo(String strcorreo) {
		this.strcorreo = strcorreo;
	}
	public String getStrnombre() {
		return strnombre;
	}
	public void setStrnombre(String strnombre) {
		this.strnombre = strnombre;
	}
	public String getStrpass() {
		return strpass;
	}
	public void setStrpass(String strpass) {
		this.strpass = strpass;
	}
	public String getStrpassre() {
		return strpassre;
	}
	public void setStrpassre(String strpassre) {
		this.strpassre = strpassre;
	}
	@Override
	public String toString() {
		return "Administrador [chkactualizar=" + chkactualizar + ", chkeliminar=" + chkeliminar + ", chkregistrar="
				+ chkregistrar + ", strcorreo=" + strcorreo + ", strnombre=" + strnombre + ", strpass=" + strpass
				+ ", strpassre=" + strpassre + "]";
	}
	
	
}
