package test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.User;

public class testTodo {

	private EntityManagerFactory emf = null;
	private EntityManager em = null;

	@Before
	public void setUp() {
		emf = Persistence.createEntityManagerFactory("TodoList");
		em = emf.createEntityManager();
	}

	@After
	public void tearDown() {
		em.close();
		emf.close();
	}
	@Test
	public void test() {
		assertEquals(true, true);
	}
	
	@Test
	public void test_user_returns_email_and_password() {
		User user = em.find(User.class, 1);
		assertEquals(user.getEmail(), "test");
		assertEquals(user.getPassword(), "test");	
	}
	
}



