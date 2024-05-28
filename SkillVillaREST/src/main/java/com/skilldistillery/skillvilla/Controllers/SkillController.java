package com.skilldistillery.skillvilla.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.skillvilla.services.SkillService;
import com.skilldistillery.skillvilla.services.UserService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost/" })
public class SkillController {

	private UserService userService;
	private SkillService skillService;

	public SkillController(UserService userService, SkillService skillService) {
		super();
		this.userService = userService;
		this.skillService = skillService;
	}


	


}
