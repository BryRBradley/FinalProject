package com.skilldistillery.skillvilla.Controllers;

import java.security.Principal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.skillvilla.entities.User;
import com.skilldistillery.skillvilla.services.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin({ "*", "http://localhost/" })
public class UserController {
	
	private UserService userService;
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

//	@GetMapping("users")
//	public List<User> findAll(){
//		return userService.findAll();
//	}

//	@GetMapping("users")
//	public User show(HttpServletRequest req, HttpServletResponse res, Principal principal) {
//		return userService.show(id);
//	}

//	@PostMapping("users")
//	public User create(@RequestBody User user) {
//		return userService.create(user);
//	}
	
	@PutMapping("users/{id}")
	public User update(HttpServletRequest req, HttpServletResponse res, Principal principal) {
		return userService.update(id, user);
	}
	
//	@DeleteMapping("users/{id}")
//	public void delete(@PathVariable("id") int id) {
//		userService.delete(id);
//	}

}
