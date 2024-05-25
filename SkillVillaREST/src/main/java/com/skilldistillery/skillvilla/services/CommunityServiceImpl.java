package com.skilldistillery.skillvilla.services;

import java.util.List;

import com.skilldistillery.skillvilla.Repositories.CommunityRepository;
import com.skilldistillery.skillvilla.entities.Community;

public class CommunityServiceImpl implements CommunityService{
	
	private CommunityRepository commRepo;
	
	public CommunityServiceImpl(CommunityRepository commRepo) {
		super();
		this.commRepo = commRepo;
	}

	@Override
	public List<Community> findAll() {
		return commRepo.findAll();
	}

	@Override
	public Community show(int id) {
		return commRepo.findById(id);
	}

	@Override
	public Community create(Community community) {
		return commRepo.saveAndFlush(community);
	}

	@Override
	public Community update(Community community, int id) {
		Community updatedComm = commRepo.findById(id);
		updatedComm.setName(community.getName());
		updatedComm.setCreatedAt(community.getCreatedAt());
		updatedComm.setUpdatedAt(community.getUpdatedAt());
		updatedComm.setEnabled(community.isEnabled());
		updatedComm.setDescription(community.getDescription());
		updatedComm.setDiscordUrl(community.getDiscordUrl());
		updatedComm.setImageUrl(community.getImageUrl());
		return commRepo.saveAndFlush(updatedComm);
	}

	@Override
	public void delete(int id) {
		if( commRepo.existsById(id)) {
			commRepo.deleteById(id);
		}
	}
	
	
	
	

}
