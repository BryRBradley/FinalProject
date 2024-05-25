package com.skilldistillery.skillvilla.services;

import java.util.List;

import com.skilldistillery.skillvilla.entities.Post;

public interface PostService {

	List<Post> findAll();
	
	Post show(int postId, int communityId);
	
	Post create(Post post);
	
	Post update(int id, Post post);
	
	void delete(int id);
}
