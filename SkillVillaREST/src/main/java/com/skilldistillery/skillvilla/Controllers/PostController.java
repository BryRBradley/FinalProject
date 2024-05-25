package com.skilldistillery.skillvilla.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.skillvilla.entities.Post;
import com.skilldistillery.skillvilla.services.PostService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost/" })
public class PostController {
	
private PostService postService;

	
	
	public PostController(PostService postService) {
	super();
	this.postService = postService;
}



	@GetMapping("communities/{communityId}/posts/{postId}")
	public Post show(
			HttpServletRequest req, 
			HttpServletResponse res,
			@PathVariable("communityId") int communityId, 
			@PathVariable("communityId") int postId) {
		
		
		Post post = postService.show(postId, communityId);
		
		if (post == null) {
			res.setStatus(404);
		}
		
		return post;
	}

//	@PostMapping("posts")
//	public Post create(@RequestBody Post post) {
//		return postService.create(post);
//	}
//	
//	@PutMapping("posts/{id}")
//	public Post update(@PathVariable("id") int id, @RequestBody Post post) {
//		return postService.update(id, post);
//	}
//	
//	@DeleteMapping("posts/{id}")
//	public void delete(@PathVariable("id") int id) {
//		postService.delete(id);
//	}

}
