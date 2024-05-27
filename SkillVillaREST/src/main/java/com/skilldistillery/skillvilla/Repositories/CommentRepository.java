package com.skilldistillery.skillvilla.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.skillvilla.entities.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer>{

	boolean existsByIdAndPostId(int commentId, int postId);

}
