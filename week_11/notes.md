# Relational Databases and SQL

* Getting rid of repetitive data: First Normal Form (1NF)
* column with a reference to another table is called _foreign key_
* A _primary key_ can be defined on more than one column (composite key)

## ERD
* Entity (model)
* Attribute (column)
* Primary Key
* Relationship
* Cardinality (crow's foot notation):
  * || One-Mandatory
  * |< Many-Mandatory
  * O| One-Optional
  * O< Many-Optional
* Many-to-many relationships: use bridge table

## SQL
* CREATE TABLE name (colname TYPE, ...);
* SUM()
* IN operator: 
```sql
SELECT * FROM table WHERE field IN ("one", "two","three")
```
* Subquery:
```sql
SELECT * FROM table WHERE field IN (SELECT ...)
```
* LIKE operator, instead of equal-sign; % is wildcard: 
```sql
  ... WHERE field LIKE "%string%"
```
* GROUP BY field and HAVING: HAVING refers to the group of records rather than to each selected record (as WHERE does)
```sql
SELECT author, AVG(words) as avg_words FROM books GROUP BY author HAVING avg_words > 150000;
```
* CASE WHEN condition THEN "value" [...] [ELSE "value"] AS colname:
```sql
SELECT type, heart_rate,
    CASE 
        WHEN heart_rate > 220-30 THEN "above max"
        WHEN heart_rate > ROUND(0.90 * (220-30)) THEN "above target"
        WHEN heart_rate > ROUND(0.50 * (220-30)) THEN "within target"
        ELSE "below target"
    END as "hr_zone"
```
* BETWEEN x AND y: inclusive
