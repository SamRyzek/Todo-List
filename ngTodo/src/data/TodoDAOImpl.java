package data;

import java.util.List;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Todo;
import entities.User;


@Repository
@Transactional
public class TodoDAOImpl implements TodoDAO {
	
	@PersistenceContext
	private EntityManager em;


	@Override
	public List<Todo> index(int uid) {
		String query = "SELECT t FROM Todo t WHERE t.user.id = :id";
		return em.createQuery(query, Todo.class).setParameter("id", uid).getResultList();
	}

	@Override
	public Todo show(int uid, int tid) {
		return em.find(Todo.class, tid);
	}

	@Override
	public Todo create(int uid, String todoJson) {
		ObjectMapper mapper = new ObjectMapper();
		
		try {
			Todo mappedTodo = mapper.readValue(todoJson, Todo.class);
			User u = em.find(User.class, uid);
			mappedTodo.setUser(u);
			
			em.persist(mappedTodo);
			em.flush();
			return mappedTodo;
			
		} catch (Exception e) {
			
			e.printStackTrace();
			
		}
		
		return null;
	}

	@Override
	public Todo update(int uid, int tid, String todoJson) {
		ObjectMapper mapper = new ObjectMapper();
        Todo mappedTodo = null;
        try {
            mappedTodo = mapper.readValue(todoJson, Todo.class);
            Todo t = em.find(Todo.class, tid);
            t.setTask(mappedTodo.getTask());
            t.setCompleted(mappedTodo.getCompleted());
            t.setDescription(mappedTodo.getDescription());
            return t;
        }catch(Exception e) {
            e.printStackTrace();
        }
          
       return null;
	}

	@Override
	public Boolean destory(int uid, int tid) {
		Todo t = em.find(Todo.class, tid);
		
		try {
			em.remove(t);
			return true;
		}
		catch (Exception e) {
			return false;
			
		}
	}

}
