package com.skilldistillery.skillvilla.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.skillvilla.Repositories.UserRepository;
import com.skilldistillery.skillvilla.entities.User;

@Service
public class UserServiceImpl implements UserService{
	
	private UserRepository userRepo;
	
	

	public UserServiceImpl(UserRepository userRepo) {
		this.userRepo = userRepo;
	}

	@Override
	public List<User> findAll() {
		return userRepo.findAll();
	}

	@Override
	public User show(int id) {
		return userRepo.findById(id);
	}

	@Override
	public User create(User user) {
		return userRepo.saveAndFlush(user);
	}

	@Override
	public User update(int id, User user) {
		User updatedUser = userRepo.findById(id);
		updatedUser.setUsername(user.getUsername());
		updatedUser.setPassword(user.getPassword());
		updatedUser.setEmail(user.getEmail());
		updatedUser.setCreatedAt(user.getCreatedAt());
		updatedUser.setUpdatedAt(user.getUpdatedAt());
		updatedUser.setRole(user.getRole());
		updatedUser.setEnabled(user.isEnabled());
		return userRepo.saveAndFlush(updatedUser);
	}

	@Override
	public void delete(int id) {
		if(userRepo.existsById(id)) {
			userRepo.deleteById(id);
		}
	}
	
	
	
	

}
