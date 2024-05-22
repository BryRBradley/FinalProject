package com.skilldistillery.skillvilla.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.skillvilla.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>{
}
