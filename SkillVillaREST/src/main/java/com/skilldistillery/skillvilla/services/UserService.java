package com.skilldistillery.skillvilla.services;

import java.util.List;

import com.skilldistillery.skillvilla.entities.User;

public interface UserService {

	List<User> findAll();
	
	User show(int id);
	
	User create(User user);
	
	User update(int id, User user);
	
	void delete(int id);
	
	
}
