package controll;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import model.Pesca;

public class PescaProcess {
	public static PreparedStatement ps;
	public static Connection con;
	public static ResultSet rs;
	private JSONObject jo;
	
	public JSONArray readAll() throws SQLException, JSONException {
		JSONArray ja = new JSONArray();
		
		String query = "select * from pesca";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(query);
		rs = ps.executeQuery();
		while(rs.next()) {
			jo = new JSONObject();
			jo.put("id", rs.getInt("id"));
			jo.put("nome_cidade", rs.getString("nome_cidade"));
			jo.put("quantidade", rs.getString("quantidade"));
			jo.put("status", rs.getString("status"));
			jo.put("excedente", rs.getString("excedente"));
			jo.put("multa", rs.getString("multa"));
			jo.put(jo);
		}
		con.close();
		return ja;
	}
	
	public boolean create(Pesca pesca) throws SQLException {
		String query = "insert into pesca(nome_cidade, quantidade, status, excedente, multa) values (?, ?, ?, ?, ?)";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(query);
		ps.setString(1, pesca.getCidade());
		ps.setString(2, pesca.getQuantidade());
		ps.setString(3, pesca.getStatus());
		ps.setString(4, pesca.getExcedente());
		ps.setString(5, pesca.getMulta());
		if(ps.executeUpdate() > 0) {
			rs = ps.getGeneratedKeys();
			rs.next();
			int id = rs.getInt(1);
			pesca.setId(id);
			con.close();
			return true;
		}
		
		return false;
	}
	
	public boolean delete(int id) throws SQLException {
		String query = "delete from pesca where id = ?";
		con = ConnectionDB.getConnection();
		ps = con.prepareStatement(query);
		ps.setInt(1, id);
		if(ps.executeUpdate() > 0) {
			con.close();
			return true;
		}
		return false;
	}	
}