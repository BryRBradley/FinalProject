package com.skilldistillery.skillvilla.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class CommunityTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private User user;
	
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
		 user = em.find(User.class, 1);
	 }
			
	@AfterEach
	 void tearDown() throws Exception {
		em.close();
	}
	
	
//	@Test
//	void test_user() {
//		assertNotNull(user);
//		assertEquals("test", user.getUsername());
//		assertEquals(true, user.isEnabled());
//		
//	}

}
