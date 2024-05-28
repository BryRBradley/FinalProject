package com.skilldistillery.skillvilla.Controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.skillvilla.entities.Skill;
import com.skilldistillery.skillvilla.entities.User;
import com.skilldistillery.skillvilla.services.SkillService;
import com.skilldistillery.skillvilla.services.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost/" })
public class UserController {

	private UserService userService;
	private SkillService skillService;

	public UserController(UserService userService, SkillService skillService) {
		super();
		this.userService = userService;
		this.skillService = skillService;
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

	@PutMapping("users/{userId}")
	public User update(HttpServletRequest req, HttpServletResponse res, Principal principal,
			@PathVariable("userId") int userId, @RequestBody User user) {
		User updated = null;

		try {
			updated = userService.update(principal.getName(), userId, user);
			if (updated == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
		}

		return updated;

	}
	
	@GetMapping("users/{userId}")
	public List<Skill> indexSkills(HttpServletRequest req, HttpServletResponse res, Principal principal,
			@PathVariable("userId") int userId) {
		List<Skill> Skills = skillService.findUserSkills(principal.getName(), userId);

		if (Skills.isEmpty()) {
			res.setStatus(204);
		}

		return Skills;

	}

//	@DeleteMapping("users/{id}")
//	public void delete(@PathVariable("id") int id) {
//		userService.delete(id);
//	}

}
