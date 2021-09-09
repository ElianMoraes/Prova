package dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import vo.Estoque;

public class EstoqueDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "c:\\dbs\\estoque.csv";
	private ArrayList<Estoque> estoque1;
	public void escrever(ArrayList<Estoque> estoque) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo, false));
			for (@SuppressWarnings("unused") Estoque estoque1  : estoque) {
				bw.write(toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println("Erro ao salvar: " + e);
		}
	}

	private char[] toCSV() {
		return null;
	}

	public ArrayList<Estoque> ver() {
		estoque1 = new ArrayList<>();
		try {
			br = new BufferedReader(new FileReader(arquivo));
			while ((br.readLine()) != null) {
				estoque1 = new ArrayList<Estoque>();
				estoque1.addAll(estoque1);
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println("Arquivo não encontrado: " + e);
		} catch (IOException e) {
			System.out.println("Erro ao abrir: " + e);
		}
		return estoque1;
	}

}