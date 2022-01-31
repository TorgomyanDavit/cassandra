# cassandra

that we work cassandra download in the move into  bin folder then 
writ in gitbush ./cassandra 
then open new terminal and move into bin folder and write ./cqlsh and then can write cassandra
as we create space in cassandra we write this command
create keyspace (name) example
... with replication = {"class" : simplestrategy,"replication_factor" : 1};
then this Databas which name is example we can create table 
Create Table example.(users) <- [Table name <users>] (id varchar PRIMARY KEY,name varchar,email varchar,age int);
add values into Users table
INSERT INTO example.users (id,name,email,age) values ("hakob","hakob hakobyan","poghosyan@gmail.com",10);
INSERT INTO example.users (id,name,email,age) values ("vardan","vardan vardanyan","vardanyan@gmail.com",40);

when we want to receive value write this code
SELECT name FROM example.users [this command return me all name from example.users]
SELECT * FROM example.users [this command return me all data from example.users]
SELECT * FROM example.users [this command return me all data from example.users]

if we want to receive spacific value we must create index then write command
create user_age on example.users (age);
SELECT * from example.users from age = 10
this code will receive me all data where age === 10


