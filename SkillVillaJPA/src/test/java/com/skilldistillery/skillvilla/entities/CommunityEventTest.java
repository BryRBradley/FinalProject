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

class CommunityEventTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private CommunityEvent event;
	
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
		 event = em.find(CommunityEvent.class, 1);
	 }
			
	@AfterEach
	 void tearDown() throws Exception {
		em.close();
		event = null;
	}
	
	
	@Test
	void event_basic_mapping() {
		assertNotNull(event);
		assertNotNull(event.getTitle());
		assertEquals("Bowling class with Pro Ted Kaminsky", event.getTitle());
	}
	
	@Test
	void event_MTO_community() {
		assertNotNull(event);
		assertNotNull(event.getCommunity());
		assertEquals("Denver Women Over 30 Snowboarders", event.getCommunity().getName());
	}

}
