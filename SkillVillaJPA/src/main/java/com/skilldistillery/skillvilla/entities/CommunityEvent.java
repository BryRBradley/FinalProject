package com.skilldistillery.skillvilla.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CommunityEvent {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;
	
	private LocalDateTime startDateTime;

	private LocalDateTime endDateTime;
	
	private String description;
	
	private String imageUrl;
	
	private boolean enabled;
	
	private LocalDateTime updatedAt;
	
	private LocalDateTime createdAt;
	
	private String discordUrl;
	
//  private int userId;
	
//  private int communityId;
	
//  private int locationId;
	
	public CommunityEvent() {
		
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public LocalDateTime getStartDateTime() {
		return startDateTime;
	}

	public void setStartDateTime(LocalDateTime startDateTime) {
		this.startDateTime = startDateTime;
	}

	public LocalDateTime getEndDateTime() {
		return endDateTime;
	}

	public void setEndDateTime(LocalDateTime endDateTime) {
		this.endDateTime = endDateTime;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
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

	public String getDiscordUrl() {
		return discordUrl;
	}

	public void setDiscordUrl(String discordUrl) {
		this.discordUrl = discordUrl;
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
		CommunityEvent other = (CommunityEvent) obj;
		return id == other.id;
	}
	

	@Override
	public String toString() {
		return "CommunityEvent [id=" + id + ", title=" + title + ", startDateTime=" + startDateTime + ", endDateTime="
				+ endDateTime + ", description=" + description + ", imageUrl=" + imageUrl + ", enabled=" + enabled
				+ ", updatedAt=" + updatedAt + ", createdAt=" + createdAt + ", discordUrl=" + discordUrl + "]";
	}
	
	
}
