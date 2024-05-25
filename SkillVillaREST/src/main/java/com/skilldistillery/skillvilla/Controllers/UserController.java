package com.skilldistillery.skillvilla.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.skillvilla.entities.User;
import com.skilldistillery.skillvilla.services.UserService;

@RestController
@CrossOrigin({ "*", "http://localhost/" })
public class UserController {
	
	private UserService userService;
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

	@GetMapping("users")
	public List<User> findAll(){
		return userService.findAll();
	}

	@GetMapping("users/{id}")
	public User show(@PathVariable("id") int id) {
		return userService.show(id);
	}

	@PostMapping("users")
	public User create(@RequestBody User user) {
		return userService.create(user);
	}
	
	@PutMapping("users/{id}")
	public User update(@PathVariable("id") int id, @RequestBody User user) {
		return userService.update(id, user);
	}
	
	@DeleteMapping("users/{id}")
	public void delete(@PathVariable("id") int id) {
		userService.delete(id);
	}

}
