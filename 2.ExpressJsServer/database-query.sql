CREATE TABLE access_log (
  id int NOT NULL AUTO_INCREMENT,
  endpoint varchar(255),
  params varchar(255),
  created_at datetime,
  Primary Key (id)
);
