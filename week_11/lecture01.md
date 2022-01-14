# SQL - Charlotte

## psql
* \l list of databases
* \q quit
* \? help
* \c database name (connect to database name)
* \dt list tables in current database
* \i db_seed.sql (run the commands in db_seed.sql)
* CREATE DATABASE dbname (SQL command)

## SQL
* single quotes for strings
* double quotes when looking for table(?)
* LIMIT, OFFSET (```... LIMIT 10 OFFSET 5```)
* List all the projects along with how many tasks each project has:
```sql
  SELECT projects.name, COUNT(tasks.id)
    FROM projects
    INNER JOIN tasks ON projects.id = tasks.project_id
    GROUP BY projects.name;
```
## SQL Order of execution:
* https://sqlbolt.com/lesson/select_queries_order_of_execution
* FROM
* JOIN
* WHERE
* GROUP BY
* HAVING
* SELECT
* DISTINCT
* ORDER BY 
* LIMIT OFFSET 

## Types of JOINS:
* https://sql-joins.leopard.in.ua/

## Tech Interviews:
* sorting by multiple columns
```sql
  SELECT * FROM users
    WHERE country = 'United States'
    AND date_joined BETWEEN '2020-01-01' AND '2020-12-31'
    ORDER BY username DESC, date_joined ASC
```