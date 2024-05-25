package com.skilldistillery.skillvilla.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.skillvilla.entities.Community;
import com.skilldistillery.skillvilla.services.CommunityService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost/" })
public class CommunityController {
	
	private CommunityService commService;
	
	public CommunityController(CommunityService commService) {
		super();
		this.commService = commService;
	}

	@GetMapping("communities")
	public List<Community> findAll(HttpServletRequest req, HttpServletResponse res){
		
		List<Community> communities = commService.findAll();
		
		if (communities.isEmpty()) {
			res.setStatus(204);
		}
		
		return communities;
	}

	@GetMapping("communities/{communityId}")
	public Community show(HttpServletRequest req, HttpServletResponse res, @PathVariable("communityId") int id) {
		
		Community community = commService.show(id);
		
		if (community == null) {
			res.setStatus(404);
		}
		
		return community;
	}

//	@PostMapping("communities")
//	public Community create(@RequestBody Community community) {
//		return commService.create(community);
//	}
//	
//	@PutMapping("communities/{id}")
//	public Community update(@PathVariable("id") int id, @RequestBody Community community) {
//		return commService.update(community, id);
//	}
//	
//	@DeleteMapping("communities/{id}")
//	public void delete(@PathVariable("id") int id) {
//		commService.delete(id);
//	}
}
