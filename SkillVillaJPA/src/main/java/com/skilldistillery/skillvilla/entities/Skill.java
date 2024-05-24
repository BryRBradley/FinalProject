package com.skilldistillery.skillvilla.entities;

import java.util.List;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Skill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;

	private String description;
	
//	@ManyToMany
//	@JoinTable(name="user_has_skill", joinColumns = @JoinColumn(name="user_id"), inverseJoinColumns = @JoinColumn(name="skill_id"))
//	private List <User> users;
	
//	@ManyToMany
//	@JoinTable(name="community_has_skill", joinColumns = @JoinColumn(name="community_id"), inverseJoinColumns = @JoinColumn(name="skill_id"))
//	private List <Community> communities;
//	
//	@ManyToOne
//	@JoinColumn(name="skill")
//	private SkillCategory skillCat;
	
 // private int categoryId;
	
	Skill (){
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	

//	public List<User> getUsers() {
//		return users;
//	}
//
//	public void setUsers(List<User> users) {
//		this.users = users;
//	}

//	public List<Community> getCommunities() {
//		return communities;
//	}
//
//	public void setCommunities(List<Community> communities) {
//		this.communities = communities;
//	}
//
//	public SkillCategory getSkillCat() {
//		return skillCat;
//	}
//
//	public void setSkillCat(SkillCategory skillCat) {
//		this.skillCat = skillCat;
//	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Skill other = (Skill) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Skill [id=" + id + ", name=" + name + ", description=" + description + "]";
	};
	
}
