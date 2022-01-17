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

## JOINs

* INNER JOIN (JOIN): only rows with valid foreign key (NOT NULL) will be included in the result set
* LEFT OUTER JOIN (LEFT JOIN): all rows from the left (first named) table will be returned, even if there's no match in the right table (foreign key is NULL)
* RIGHT OUTER JOIN (RIGHT JOIN): all rows from the right (second named) table will be returned, even if there's no match in the left table (foreign key is NULL)
* FULL OUTER JOIN (FULL JOIN): all rows from both tables are returned even if there's no match. For rows that do not match, the corresponding other row will contain all NULL
* implicit join: SELECT FROM table1, table2 (no ON clause -> cartesian join)
* self join: student buddies example from Khan academy
```sql
  SELECT students.first_name, students.last_name, buddies.email AS buddy_email
  FROM students
  JOIN students buddies
  ON students.buddy_id = buddies.id
```
https://www.khanacademy.org/computing/computer-programming/sql/relational-queries-in-sql/pt/joining-tables-to-themselves-with-self-joins

## GROUP BY, HAVING
* GROUP BY is mandatory when using aggregate functions (AVG, COUNT, MIN, MAX, SUM)
* HAVING behaves like WHERE, except it operates on aggregate data (combine with GROUP BY)
* Aliases can't be used with HAVING, because it is evaluated before the SELECT statement

## Foreign Keys
```sql
reftable_id INTEGER REFERENCES reftable(id) ON DELETE CASCADE
```
* On delete cascade means: delete corresponding records in child table (this one) if the parent reference record is deleted. For example: if an assignment gets deleted all the submissions of that assignment get delete, too.
