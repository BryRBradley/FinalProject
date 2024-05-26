package com.skilldistillery.skillvilla.services;

import java.util.List;

import com.skilldistillery.skillvilla.entities.Post;

public interface PostService {

	
	
	Post show(int postId, int communityId);
	
	Post create(String string, int communityId, Post post);
	
	Post update(String userName, int postId, Post post);
	
	void delete(int id);

	List<Post> index(int communityId);
}
