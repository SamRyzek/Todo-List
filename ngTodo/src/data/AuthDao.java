package data;

import entities.User;

public interface AuthDao {
	  public User register(User u);
	  public User login(User u);
	}