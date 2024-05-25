package com.skilldistillery.skillvilla.Controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.skillvilla.entities.Community;
import com.skilldistillery.skillvilla.services.CommunityService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin({ "*", "http://localhost/" })
public class CommunityController {
	
	private CommunityService commService;
	
	public CommunityController(CommunityService commService) {
		super();
		this.commService = commService;
	}

	@GetMapping("communities")
	public List<Community> findAll(HttpServletRequest req, HttpServletResponse res, Principal principal){
		return commService.findAll();
	}

	@GetMapping("communities/{id}")
	public Community show(@PathVariable("id") int id) {
		return commService.show(id);
	}

	@PostMapping("communities")
	public Community create(@RequestBody Community community) {
		return commService.create(community);
	}
	
	@PutMapping("communities/{id}")
	public Community update(@PathVariable("id") int id, @RequestBody Community community) {
		return commService.update(community, id);
	}
	
	@DeleteMapping("communities/{id}")
	public void delete(@PathVariable("id") int id) {
		commService.delete(id);
	}
}
