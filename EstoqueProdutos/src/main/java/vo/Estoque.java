package vo;

import java.util.Objects;

public class Estoque {
	
	private int id;
	private String nome;
	private String descri��o;
	private float valor;
	private String quantidade;
	
	public Estoque() {
	}

	public Estoque(String id) {
		this.id = Integer.valueOf(id);
	}
	
	public Estoque(String[] vetor) {
		this.id = Integer.valueOf(vetor[0]);
		this.nome = vetor[1];
		this.descri��o = vetor[2];
		this.valor = Float.valueOf(vetor[3]);
	}
	
	public Estoque(String id, String nome, String descri��o, String valor, String quantidade) {
		this.id = Integer.valueOf(id);
		this.nome = nome;
		this.descri��o = descri��o;
		this.valor = Float.valueOf(valor);
		this.quantidade = quantidade;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescri��o() {
		return descri��o;
	}

	public void setDescri��o(String descri�a�, String descri��o) {
		this.descri��o = descri��o;
	}

	public float getValor() {
		return valor;
	}

	public void setValor(float valor) {
		this.valor = valor;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Estoque other = (Estoque) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return id + "\t" + nome + "\t" + descri��o + "\t" + valor + quantidade + "\n";
	}
	
	public String toCSV() {
		return id + ";" + nome + ";" + descri��o + ";" + valor + quantidade + "\r\n";
	}
	
	public String toHTML() {
		return "<td>"+ id + "</td><td>" + nome + "</td><td>" + descri��o + "</td><td>" + valor + "</td><td>" + quantidade + "</td>";
	}
	
}