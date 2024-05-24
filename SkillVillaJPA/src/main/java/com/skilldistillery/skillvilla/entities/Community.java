package com.skilldistillery.skillvilla.entities;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Community {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	@Column(name="updated_at")
	private LocalDateTime updatedAt;
	
	private boolean enabled;
	
	private String description;
	
	@Column(name="discord_url")
	private String discordUrl;
	
	@Column(name="image_url")
	private String imageUrl;
	
	@Column(name="created_at")
	private LocalDateTime createdAt;
	
	@ManyToMany(mappedBy = "user") 
	@JoinTable (name="user_has_communty", joinColumns = @JoinColumn(name= "user_id"), inverseJoinColumns= @JoinColumn(name="community_id"))
	private List<User> user;

	@OneToMany(mappedBy="community")
	private List<CommunityEvent> communityEvents;
	
	@ManyToOne
	@JoinColumn (name= "location")
	private Location location; 
	
	@ManyToMany(mappedBy = "skill") 
	private List<Skill> skills;
	
	@OneToMany(mappedBy="community")
	private List<Post> posts;
	
	public Community() {
		
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

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDiscordUrl() {
		return discordUrl;
	}

	public void setDiscordUrl(String discordUrl) {
		this.discordUrl = discordUrl;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	
	
	public List<User> getUser() {
		return user;
	}

	public void setUser(List<User> user) {
		this.user = user;
	}

	public List<CommunityEvent> getCommunityEvents() {
		return communityEvents;
	}

	public void setCommunityEvents(List<CommunityEvent> communityEvents) {
		this.communityEvents = communityEvents;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

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
		Community other = (Community) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Community [id=" + id + ", name=" + name + ", updatedAt=" + updatedAt + ", enabled=" + enabled
				+ ", description=" + description + ", discordUrl=" + discordUrl + ", imageUrl=" + imageUrl
				+ ", createdAt=" + createdAt + "]";
	}

	
}
