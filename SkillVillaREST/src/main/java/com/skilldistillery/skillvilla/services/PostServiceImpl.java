package com.skilldistillery.skillvilla.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.skillvilla.Repositories.CommunityRepository;
import com.skilldistillery.skillvilla.Repositories.PostRepository;
import com.skilldistillery.skillvilla.Repositories.UserRepository;
import com.skilldistillery.skillvilla.entities.Post;
import com.skilldistillery.skillvilla.entities.User;

@Service
public class PostServiceImpl implements PostService{

	private PostRepository postRepo;
	private UserRepository userRepo;
	private CommunityRepository commRepo;

	public PostServiceImpl(PostRepository postRepo,UserRepository userRepo,CommunityRepository commRepo) {
		super();
		this.postRepo = postRepo;
		this.userRepo = userRepo;
		this.commRepo = commRepo;
	}

	@Override
	public List<Post> findAll() {
		return postRepo.findAll();
	}

	@Override
	public Post show(int postId, int communityId) {
		return postRepo.findByIdAndCommunityId(postId, communityId);
	}

	@Override
	public Post create(String username, int communityId, Post post) {
		
		User user = userRepo.findByUsername(username);
		
		if (user != null) {
			post.setCommunity(commRepo.findById(communityId));
			post.setUser(user);
			System.out.println(post);
			return postRepo.saveAndFlush(post);
		}

		return null;
		
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
