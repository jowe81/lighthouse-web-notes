# Database Design
* ontology: theoretical representation of the data
* requirements analysis (figuring out how to store the data) vs. domain knowledge (what data needs to be stored)
* if A is determined by B, A is considered dependent on B (an address [A] and multiple names [B], for example)
* Relational database -> term comes from mathematical term relation (a generalized function), not because tables are relating to each other
* physical design: data types, indexing options, stored procedures etc.
* normalization: eliminate data redundancy. Normal forms: 1NF,2NF,3NF,BOYCE-CODD NF (3.5NF),4NF and 5NF: https://blog.udemy.com/normalization-in-database-with-example/

## Postgres
* JSON datatype exists!
* ALTER TABLE table ADD COLUMN name type, ADD COLUMN name type...
* DROP TABLE IF EXISTS table CASCADE (cascade deletes dependant tables)
* Now() function:
```sql
CREATE TABLE users (
  member_since TIMESTAMP NOT NULL DEFAULT Now()  
)
```
* INSERT: can use existing table data to populate columns for another table
```sql
INSERT INTO first_table [(col1,col2,...colN)]
  SELECT col1,col2,...colN
  FROM second_table [WHERE...]
```
* DELETE FROM table [WHERE...]
* UPDATE table SET field = value[, field2 = value, ...] [WHERE...]

## PSQL And PG (node-postgress)
* Commandline psql: ```psql [-h host] [-p port] [-U user] [database]```

# Trees
* Breadth first traversal (or level order): visit all children before visiting grandchildren
* Depth first traversal: visit the leaves first (stick-man walks around tree idea)
* Types of Depth first traversal (binary tree):
  * pre-order (vist root first)
  * in-order (left child - root - right child)
    * in-order traversal of a binary search tree gives you a sorted list
  * post-order (left child - right child - root)

