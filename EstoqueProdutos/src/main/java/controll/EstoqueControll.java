package controll;

import java.util.ArrayList;

import vo.Estoque;

public class EstoqueControll {
	
	public static ArrayList<Estoque> estoque;
	public static dao.EstoqueDAO ld = new dao.EstoqueDAO();
	private static dao.EstoqueDAO id;
	private static Object id2;
	
	public static void testes() {
		estoque = new ArrayList<>();
		estoque.add(new Estoque("1","Mouse Gamer","Mouse HyperX","120.00", "1"));
		estoque.add(new Estoque("2","Teclado","Teclado Gamer Kaboom","300.00", "1"));
		estoque.add(new Estoque("3","Fone","Fone Headset Sony","85.00", "1"));
	}
	
	public static void abrir() {
		id2 = null;
		estoque = ((dao.EstoqueDAO) id2).ver();
	}
	
	public static void salvar() {
		id = null;
		id.escrever (estoque);
	}
	
}

