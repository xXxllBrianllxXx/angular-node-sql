CREATE DATABASE test
;
CREATE TABLE users (
    id int primary key,
    name varchar(255),
    lastname varchar(255),
	email varchar(255) null,
	phone int null
)
;
CREATE TABLE tickets (
    id int primary key,
    description varchar(255),
    status int,
	userId int
)
;
ALTER TABLE tickets ADD CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES users (id)
;