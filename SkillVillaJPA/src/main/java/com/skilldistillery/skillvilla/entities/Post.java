package com.skilldistillery.skillvilla.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="created_at")
	private LocalDateTime createdAt;

	@Column(name="updated_at")
	private LocalDateTime updatedAt;
	
	private String description;
	
	private boolean enabled;
	
	@Column(name="image_url")
	private String imageUrl;
	
//	@ManyToOne
//	@JoinColumn(name="posts_id")
//	private PostCategory postCat;
	
	@ManyToOne
	@JoinColumn(name="community_id")
	private Community community;
	
//	@ManyToOne
//	@JoinColumn(name="user_id")
//	private User user;
//	
//	@OneToOne
//	@JoinColumn(name="post")
//	private Location location;
//	
//	@OneToMany(mappedBy="post")
//	private List <Comment> comments;
	
	
	
	public Post () {	
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	
	

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

//	public PostCategory getPostCat() {
//		return postCat;
//	}
//
//	public void setPostCat(PostCategory postCat) {
//		this.postCat = postCat;
//	}

	public Community getCommunity() {
		return community;
	}

	public void setCommunity(Community community) {
		this.community = community;
	}

//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
//
//	public Location getLocation() {
//		return location;
//	}
//
//	public void setLocation(Location location) {
//		this.location = location;
//	}
//
//	public List<Comment> getComments() {
//		return comments;
//	}

//	public void setComments(List<Comment> comments) {
//		this.comments = comments;
//	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		Post other = (Post) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", updatedAt=" + updatedAt + ", createdAt=" + createdAt + ", description="
				+ description + ", enabled=" + enabled + "]";
	};

	
	
}

