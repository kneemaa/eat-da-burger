CREATE DATABASE burger_stand;
USE burger_stand;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255),
    is_eaten tinyint(1) DEFAULT 0,
    PRIMARY KEY (id)
    );
    