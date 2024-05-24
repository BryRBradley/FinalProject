package com.skilldistillery.skillvilla.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class SkillTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Skill skill;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception{
		emf = Persistence.createEntityManagerFactory("SkillVillaJPA");
	}
	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}
	
	@BeforeEach
	 void setUp() throws Exception {
		 em = emf.createEntityManager();  
		 skill = em.find(Skill.class, 1);
	 }
			
	@AfterEach
	 void tearDown() throws Exception {
		skill = null;
		em.close();
	}
	
	
	@Test
	void test_user() {
		assertNotNull(skill);
		assertEquals("Baking", skill.getName());
	}

	@Test
	void test_skill_has_user() {
		assertNotNull(skill);
		assertEquals("Baking", skill.getName());
	//	assertTrue(skill.);
	}
}