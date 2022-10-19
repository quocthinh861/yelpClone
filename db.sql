--\? help
--\c change database
--\l list all database
--\d list tables

CREATE TABLE product (
    id INT,
    name VARCHAR(50),
    price INT, 
    on_sale boolean
);

CREATE TABLE restaurant (
    id INT,
    name VARCHAR(50),
    location VARCHAR(50),
    price_range INT
);

INSERT INTO restaurant (id, name, location, price_range) VALUES (123, 'mcdonalds', 'newyork', 1);

CREATE TABLE restaurant (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK(price_range >= 1 and price_range <= 5)
);
