package com.skilldistillery.skillvilla.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.skillvilla.Repositories.SkillCategoryRepository;
import com.skilldistillery.skillvilla.Repositories.SkillRepository;
import com.skilldistillery.skillvilla.Repositories.UserRepository;
import com.skilldistillery.skillvilla.entities.Skill;
import com.skilldistillery.skillvilla.entities.SkillCategory;

@Service
public class SkillServiceImpl implements SkillService {

	private SkillRepository skillRepo;
	private UserRepository userRepo;
	private SkillCategoryRepository skillCatRepo;
	
	public SkillServiceImpl(SkillRepository skillRepo, UserRepository userRepo, SkillCategoryRepository skillCatRepo) {
		super();
		this.skillRepo = skillRepo;
		this.userRepo = userRepo;
		this.skillCatRepo = skillCatRepo;
	}

	@Override
	public List<Skill> indexSkills() {
		return skillRepo.findAll();

	}

	@Override
	public List<SkillCategory> indexSkillCategories() {
		return skillCatRepo.findAll();
	}


}
