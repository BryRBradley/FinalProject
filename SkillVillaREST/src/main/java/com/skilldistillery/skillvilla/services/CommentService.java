package com.skilldistillery.skillvilla.services;

import com.skilldistillery.skillvilla.entities.Comment;

public interface CommentService {

	Comment createOnPost(String name, int communityId, int postId, Comment comment);

}
