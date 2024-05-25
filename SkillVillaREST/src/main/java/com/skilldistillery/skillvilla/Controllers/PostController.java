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

import com.skilldistillery.skillvilla.entities.Post;
import com.skilldistillery.skillvilla.services.PostService;

@RestController
@CrossOrigin({ "*", "http://localhost/" })
public class PostController {
	
private PostService postService;

	
	
	public PostController(PostService postService) {
	super();
	this.postService = postService;
}

	@GetMapping("posts")
	public List<Post> findAll(){
		return postService.findAll();
	}

	@GetMapping("posts/{id}")
	public Post show(@PathVariable("id") int id) {
		return postService.show(id);
	}

	@PostMapping("posts")
	public Post create(@RequestBody Post post) {
		return postService.create(post);
	}
	
	@PutMapping("posts/{id}")
	public Post update(@PathVariable("id") int id, @RequestBody Post post) {
		return postService.update(id, post);
	}
	
	@DeleteMapping("posts/{id}")
	public void delete(@PathVariable("id") int id) {
		postService.delete(id);
	}

}
