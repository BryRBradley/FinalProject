package com.skilldistillery.skillvilla.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.skillvilla.entities.Post;

public interface PostRepository extends JpaRepository<Post, Integer>{

	
	@Override
	List <Post> findAll();
	
	Post findById(int id);

	Post findByIdAndCommunityId(int postId, int communityId);

	List<Post> findAllByCommunityId(int comunityId);
	
}
