-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema skillvilladb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `skillvilladb` ;

-- -----------------------------------------------------
-- Schema skillvilladb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `skillvilladb` DEFAULT CHARACTER SET utf8 ;
USE `skillvilladb` ;

-- -----------------------------------------------------
-- Table `experience`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `experience` ;

CREATE TABLE IF NOT EXISTS `experience` (
  `level` VARCHAR(16) NOT NULL,
  `skill_id` INT NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`level`));


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` VARCHAR(16) NOT NULL,
  `username` VARCHAR(200) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `active` VARCHAR(45) NULL,
  `role` VARCHAR(45) NULL,
  `community_id` VARCHAR(45) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `experience_level` VARCHAR(16) NULL,
  `enabled` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_experience1_idx` (`experience_level` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  CONSTRAINT `fk_user_experience1`
    FOREIGN KEY (`experience_level`)
    REFERENCES `experience` (`level`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `categories` ;

CREATE TABLE IF NOT EXISTS `categories` (
  `id` VARCHAR(16) NOT NULL,
  `name` VARCHAR(255) NULL,
  `skill_id` INT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `skills` ;

CREATE TABLE IF NOT EXISTS `skills` (
  `id` VARCHAR(16) NOT NULL,
  `name` VARCHAR(255) NULL,
  `category_id` INT NULL,
  `categories_id` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_skills_categories1_idx` (`categories_id` ASC),
  CONSTRAINT `fk_skills_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `community`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `community` ;

CREATE TABLE IF NOT EXISTS `community` (
  `id` VARCHAR(16) NOT NULL,
  `name` VARCHAR(255) NULL,
  `skill_id` INT NULL,
  `location_id` INT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `location` ;

CREATE TABLE IF NOT EXISTS `location` (
  `id` VARCHAR(16) NOT NULL,
  `type` VARCHAR(255) NULL,
  `address` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `community_has_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `community_has_user` ;

CREATE TABLE IF NOT EXISTS `community_has_user` (
  `community_id` VARCHAR(16) NOT NULL,
  `user_id` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`community_id`, `user_id`),
  INDEX `fk_community_has_user_user1_idx` (`user_id` ASC),
  INDEX `fk_community_has_user_community1_idx` (`community_id` ASC),
  CONSTRAINT `fk_community_has_user_community1`
    FOREIGN KEY (`community_id`)
    REFERENCES `community` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_community_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `user_1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_1` ;

CREATE TABLE IF NOT EXISTS `user_1` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);


-- -----------------------------------------------------
-- Table `user_2`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_2` ;

CREATE TABLE IF NOT EXISTS `user_2` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);

SET SQL_MODE = '';
DROP USER IF EXISTS skills@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'skills'@'localhost' IDENTIFIED BY 'skills';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'skills'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `skillvilladb`;
INSERT INTO `user` (`id`, `username`, `password`, `active`, `role`, `community_id`, `created_at`, `updated_at`, `experience_level`, `enabled`) VALUES ('1', 'test', '$2a$10$nShOi5/f0bKNvHB8x0u3qOpeivazbuN0NE4TO0LGvQiTMafaBxLJS', NULL, 'standard', NULL, NULL, NULL, NULL, '1');

COMMIT;

