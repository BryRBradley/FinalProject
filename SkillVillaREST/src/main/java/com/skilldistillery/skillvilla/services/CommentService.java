package com.skilldistillery.skillvilla.services;

import java.util.List;

import com.skilldistillery.skillvilla.entities.Comment;

public interface CommentService {

	Comment createOnPost(String name, int communityId, int postId, Comment comment);

	boolean destroy(String name, int communityId, int postId, int commentId);

	List<Comment> index(int postId);

}
