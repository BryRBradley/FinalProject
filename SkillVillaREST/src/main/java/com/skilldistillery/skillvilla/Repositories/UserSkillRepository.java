package com.skilldistillery.skillvilla.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.skillvilla.entities.Skill;

public interface UserSkillRepository extends JpaRepository<Skill, Integer>{

	
	
	
}
