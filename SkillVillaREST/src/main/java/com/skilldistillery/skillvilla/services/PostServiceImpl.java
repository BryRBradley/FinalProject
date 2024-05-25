package com.skilldistillery.skillvilla.services;

import com.skilldistillery.skillvilla.Repositories.PostRepository;

public class PostServiceImpl implements PostService{

	private PostRepository postRepo;

	public PostServiceImpl(PostRepository postRepo) {
		super();
		this.postRepo = postRepo;
	}
	
	
	
	
}
