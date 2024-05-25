package com.skilldistillery.skillvilla.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.skillvilla.entities.Post;
import com.skilldistillery.skillvilla.entities.User;

public interface PostRepository extends JpaRepository<Post, Integer>{

	
	List <Post> findAll();
	
	Post findById(int id);
	
}
