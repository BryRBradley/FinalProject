package com.skilldistillery.skillvilla.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.skillvilla.entities.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer>{

	boolean existsByIdAndPostIdAndUserUsername(int commentId, int postId, String username);

}
