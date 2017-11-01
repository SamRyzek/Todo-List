package data;

import java.util.List;


import entities.Todo;

public interface TodoDAO {

	public List<Todo> index(int uid);
	
	public Todo show (int uid, int tid);
	
	public Todo create ( int uid, String todoJson);
	
	public Todo update(int uid, int tid, String todoJson);
	
	public Boolean destory (int uid, int tid);
	
	
}
