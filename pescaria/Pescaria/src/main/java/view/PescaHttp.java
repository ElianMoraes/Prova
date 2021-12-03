package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controll.PescaProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Pesca;

@WebServlet("/pesca")
public class PescaHttp<JSONObject, JSONArray> extends HttpServlet {
	
	private PrintWriter pw;
	private JSONObject obj;
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		pw = resp.getWriter();
		PescaProcess pp = new PescaProcess();
		
		try {
			JSONArray ja = pp.readAll();
			pw.write(ja.toString());
		} catch (SQLException e) {
			System.out.println("Erro ao carregar dados do SGBD: "+e);
		} catch (JSONException e) {
			System.out.println("Erro ao converter JSON: "+e);
		}
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	pw = resp.getWriter();
    	String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
    	
    	try {
    		obj = new JSONObject(body);
    		String nomeCidade = obj.toString("nome_cidade");
    		String quantidade = obj.getString("quantidade");
    		String status = obj.getString("status");
    		String excedente = obj.getString("excedente");
    		String multa = obj.getString("multa");
    		
    		Pesca pesca = new Pesca();
    		pesca.setCidade(nomeCidade);
    		pesca.setQuantidade(quantidade);
    		pesca.setStatus(status);
    		pesca.setExcedente(excedente);
    		pesca.setMulta(multa);
    		
    		PescaProcess pp = new PescaProcess();
    		try {
    			if(pp.create(pesca)) {
    				obj.put("id", pesca.getId());
    				pw.write(obj.toString);
    			} else {
    				resp.setStatus(HttpServletResponse.SC_PAYMENT_REQUIRED);
    			}
    		} catch (SQLException e) {
    			System.out.println("Erro ao carregar dados do SGBD: "+e);
    		}
    	} catch (JSONException e) {
    		System.out.println("Erro ao converter JSON: "+e);
    	}
	}
	
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	pw = resp.getWriter();
    	PescaProcess pp = new PescaProcess(); 
    	
    	String tempId = req.getParameter("id");
    	int id = Integer.parseInt(tempId);
    	try {
    		if(pp.delete(id) == false) {
    			resp.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
    		} else {
    			resp.setStatus(HttpServletResponse.SC_ACCEPTED);	
    		}
    	} catch (SQLException e) {
    		System.out.println("erro ao carregar dados do SGBD: +e");
    	}
	}
}