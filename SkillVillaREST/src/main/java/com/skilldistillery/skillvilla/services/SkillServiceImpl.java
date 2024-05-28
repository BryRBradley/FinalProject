package com.skilldistillery.skillvilla.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.skillvilla.Repositories.SkillRepository;
import com.skilldistillery.skillvilla.Repositories.UserRepository;
import com.skilldistillery.skillvilla.entities.Skill;
import com.skilldistillery.skillvilla.entities.User;

@Service
public class SkillServiceImpl implements SkillService {

	private SkillRepository skillRepo;
	private UserRepository userRepo;

	public SkillServiceImpl(SkillRepository skillRepo, UserRepository userRepo) {
		super();
		this.skillRepo = skillRepo;
		this.userRepo = userRepo;
	}





	@Override
	public List<Skill> findUserSkills(String username, int userId) {
		User user = userRepo.findByUsername(username);
		List<Skill> skills = null;
		
		if(user != null) {

		}
		
		return skills;
	
	}

		
		
	
	





	



	
}
