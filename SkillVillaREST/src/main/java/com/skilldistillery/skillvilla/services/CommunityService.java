package com.skilldistillery.skillvilla.services;

import java.util.List;

import com.skilldistillery.skillvilla.entities.Community;

public interface CommunityService {
	
	List<Community> findAll();
	
	Community show(int id);

	Community create(Community community);

	Community update(Community community, int id);
	
	void delete(int id);

}
