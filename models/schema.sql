DROP DATABASE IF EXISTS footprints;
CREATE DATABASE footprints;

USE footprints; 

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username varchar(40) NOT NULL,
    firstName varchar(40) NOT NULL,
    lastName varchar(40) NOT NULL,
    nature int,
    cost int, 
    history int, 
    adventure int,
    culture int,
    urban int, 
    activity int, 
    climate int,
    access int,
    stay int,
    createdAt timestamp,
    updatedAt timestamp,
    PRIMARY KEY(id)
);

CREATE TABLE locations (
    id int NOT NULL AUTO_INCREMENT,
    city varchar(40) NOT NULL,
    country varchar(40) NOT NULL,
    img varchar(240) NOT NULL,
    locDesc varchar(500) NOT NULL,
    nature int,
    cost int, 
    history int, 
    adventure int,
    culture int,
    urban int, 
    activity int, 
    climate int,
    access int,
    stay int,
    createdAt timestamp,
    updatedAt timestamp,
    PRIMARY KEY(id)
);

CREATE TABLE input (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(40) NOT NULL,
    city varchar(40) NOT NULL,
    country varchar(40) NOT NULL,
    comment varchar(240) NOT NULL,
    locDesc varchar(500) NOT NULL,
    PRIMARY KEY (id)
);



