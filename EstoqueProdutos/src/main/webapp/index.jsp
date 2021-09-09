<%@page import="vo.Estoque"%>
<%@page import="controll.EstoqueControll"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cadastro de produtos</title>
</head>
<body>
	<%
	Estoque estoque;
	String id = request.getParameter("id");
	String nome = request.getParameter("nome");
	String desccrição = request.getParameter("descrição");
	String valor = request.getParameter("valor");
	String quantidade = request.getParameter("quantidade");
	EstoqueControll.abrir();
	%>
	<div class="topo">
		<%
		if (quantidade == null) {
		%>
		<form>
			<label>Id</label><input type="number" name="id" required /> <label>Nome</label><input
				type="text" name="nome" required /> <label>Descrição</label><input
				type="text" name="descrição" required /> <label>Valor</label><input
				type="number" step="any" name="valor" required />
			<button type="submit">Confirmar</button>
		</form>
		<%
		} else {
		estoque = EstoqueControll.estoque.get(EstoqueControll.estoque.indexOf(new Estoque(id)));
		%>
		<form>
			<label>Id</label><input type="number" name="id"
				value="<%=estoque.getId()%>" required /> <label>Nome</label><input
				type="text" name="nome" value="<%=estoque.getNome()%>" required />
			<label>Descrição</label><input type="text" name="descrição"
				value="<%=estoque.getDescrição()%>" required /> <label>Valor</label><input
				type="number" step="any" name="valor" value="<%=estoque.getValor()%>"
				required /> <input type='hidden' name='quantidade' value='edit' />
			<button type="submit">Atualizar</button>
		</form>
		<%
		}
		%>
	</div>
	<div class="msg">
		<%
		if (id != null && nome != null && descrição != null && valor != null && quantidade != null) 
			estoque = new Estoque(id, nome, descrição, valor);
			EstoqueControll.estoque.set(EstoqueControll.estoque.indexOf(estoque), estoque);
			EstoqueControll.salvar();
		else if (id != null && nome != null && descrição != null && valor != null && quantidade != null) {
			estoque = new Estoque(id, nome, descrição, valor, quantidade);
			if (EstoqueControll.estoque.contains(estoque)) { 
				out.print("Id duplicado");
			} else 
				EstoqueControll.estoque.add(estoque);
				EstoqueControll.salvar();
			}
		else {
			if (id != null && quantidade.equals("del")) {
				EstoqueControll.estoque.remove(new Estoque(id));
				EstoqueControll.salvar();
			}
		}
		%>
	</div>
	<table>
		<tr>
			<th>Id</th>
			<th>Nome</th>
			<th>Descriçãoo</th>
			<th>Valor</th>
			<th>Edit</th>
			<th>Del</th>
		</tr>
		<%
		for (Estoque l : EstoqueControll.estoque) {
			out.print("<tr>");
			out.print(l.toHTML());
			out.print("<td>");
			out.print("<form>");
			out.print("<input type='hidden' name='quantidade' value='edit'/>");
			out.print("<input type='hidden' name='id' value='" + l.getId() + "'/>");
			out.print("<button type='submit'>Edit</button>");
			out.print("</form>");
			out.print("</td>");
			out.print("<td>");
			out.print("<form>");
			out.print("<input type='hidden' name='quantidade' value='del'/>");
			out.print("<input type='hidden' name='id' value='" + l.getId() + "'/>");
			out.print("<button type='submit'>Del</button>");
			out.print("</form>");
			out.print("</td>");
			out.print("</tr>");
		}
		%>
	</table>
</body>
</html>