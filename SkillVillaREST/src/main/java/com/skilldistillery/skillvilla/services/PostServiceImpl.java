package com.skilldistillery.skillvilla.services;

import java.util.List;

import com.skilldistillery.skillvilla.Repositories.PostRepository;
import com.skilldistillery.skillvilla.entities.Post;

public class PostServiceImpl implements PostService{

	private PostRepository postRepo;

	public PostServiceImpl(PostRepository postRepo) {
		super();
		this.postRepo = postRepo;
	}

	@Override
	public List<Post> findAll() {
		return postRepo.findAll();
	}

	@Override
	public Post show(int id) {
		return postRepo.findById(id);
	}

	@Override
	public Post create(Post post) {
		return postRepo.saveAndFlush(post);
	}

	@Override
	public Post update(int id, Post post) {
		Post updatedPost = postRepo.findById(id);
		updatedPost.setDescription(post.getDescription());
		updatedPost.setCreatedAt(post.getCreatedAt());
		updatedPost.setUpdatedAt(post.getUpdatedAt());
		updatedPost.setEnabled(post.isEnabled());
		updatedPost.setImageUrl(post.getImageUrl());
		return postRepo.saveAndFlush(updatedPost);
	}

	@Override
	public void delete(int id) {
		if(postRepo.existsById(id)) {
			postRepo.deleteById(id);
		}
		
	}
	
	
	
	
}
