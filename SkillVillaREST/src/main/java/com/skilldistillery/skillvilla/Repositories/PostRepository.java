package com.skilldistillery.skillvilla.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.skillvilla.entities.Post;

public interface PostRepository extends JpaRepository<Post, Integer>{

}
