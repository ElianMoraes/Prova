package model;

public class Pesca {

	private int id;
	private String nomeCidade;
	private String quantidade;
	private String status;
	private String excedente;
	private String multa;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCidade() {
		return nomeCidade;
	}
	public void setCidade(String cidade) {
		this.nomeCidade = cidade;
	}
	public String getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(String quantidade) {
		this.quantidade = quantidade;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getExcedente() {
		return excedente;
	}
	public void setExcedente(String excedente) {
		this.excedente = excedente;
	}
	public String getMulta() {
		return multa;
	}
	public void setMulta(String multa) {
		this.multa = multa;
	}
	
	
}
