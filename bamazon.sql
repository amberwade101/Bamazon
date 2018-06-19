DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;



CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL (10,2) NULL DEFAULT 0,
  stock_quantity INT DEFAULT 0,
  PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (1,'table', 'home',119.99,10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (2,'bread', 'food',2.99,12);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (3,'vitamins', 'beauty',9.99,13);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (4,'lime', 'food',0.35,17);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (5,'ghd flat iron', 'beauty',299.99,11);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (6,'sulfate-free shampoo', 'beauty',9.99,4);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (7,'water', 'food',1.99,8);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (8,'rug', 'home',20.99,9);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (9,'bamboo brush', 'beauty',19.99,3);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (10,'bananna', 'food',0.99,19);