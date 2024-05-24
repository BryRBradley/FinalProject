package com.skilldistillery.skillvilla.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Community {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private LocalDateTime updatedAt;
	
	private boolean enabled;
	
	private String description;
	
	private String discordUrl;
	
	private String imageUrl;
	
	private LocalDateTime createdAt;
	
//  private int locationId

	
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
