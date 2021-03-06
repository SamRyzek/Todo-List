package entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String email;
	
	private String password;
	
	@JsonIgnore
	@OneToMany(mappedBy="user", fetch = FetchType.EAGER)
	private List<Todo> todos;


	//sets and gets
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public List<Todo> getTodos() {
		return todos;
	}
	
	public void setTodos(List<Todo> todos) {
		this.todos = todos;
	}

	
	//toString
	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", password=" + password + ", todos=" + todos + "]";
	}
	
}
