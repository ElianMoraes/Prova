package vo;

import java.util.Objects;

public class Estoque {
	
	private int id;
	private String nome;
	private String descrição;
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
		this.descrição = vetor[2];
		this.valor = Float.valueOf(vetor[3]);
	}
	
	public Estoque(String id, String nome, String descrição, String valor, String quantidade) {
		this.id = Integer.valueOf(id);
		this.nome = nome;
		this.descrição = descrição;
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

	public String getDescrição() {
		return descrição;
	}

	public void setDescrição(String descriçaõ, String descrição) {
		this.descrição = descrição;
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
		return id + "\t" + nome + "\t" + descrição + "\t" + valor + quantidade + "\n";
	}
	
	public String toCSV() {
		return id + ";" + nome + ";" + descrição + ";" + valor + quantidade + "\r\n";
	}
	
	public String toHTML() {
		return "<td>"+ id + "</td><td>" + nome + "</td><td>" + descrição + "</td><td>" + valor + "</td><td>" + quantidade + "</td>";
	}
	
}