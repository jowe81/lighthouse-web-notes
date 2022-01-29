# Week 13
## Subqueries
```sql
SELECT (
  SELECT count(assignments)
  FROM assignments
)-count(assignment_submissions) as total_incomplete
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
```
* The subquery returns a single number, resulting in something like ```SELECT 424 - count(assignment_submissions)...```
* the COUNT function can apparently take the name of the table as well as any column name
* SELECT returns a table that can be used as any other table
```sql
SELECT * FROM (
  SELECT something_id
  FROM someTable
  WHERE something
) as sub_table;
```
* Query below calculates average # of students per cohort
* Aliasing the subquery as totals_table allows it to have more than one column and still do the avg() calculation
```sql
SELECT avg(totals_table.count) 
FROM (
  SELECT count(students) FROM students JOIN cohorts on cohorts.id = students.cohort_id GROUP BY cohorts
) AS totals_table;
```
* It is possible to use a single-column table as a list with the ```IN``` keywoard
* The subquery below essentially yields ``` (1, 2, 4, 6, ...)``` 
```sql
SELECT assignments.name
FROM assignments 
WHERE id NOT IN
(
  SELECT assignment_id
  FROM assignment_submissions
  JOIN students ON students.id = student_id
  WHERE students.name = 'Ibrahim Schimmel'
);
```
* ```IN``` can make a query more readible, replacing multiple ```OR``` statements
```sql
SELECT * FROM exercise_logs WHERE type IN (SELECT type FROM drs_favorites);
```
instead of
```sql
SELECT * FROM exercise_logs WHERE type = "rowing" OR type = "hiking" OR type = "biking";
```

## Helper functions
* ```ROUND()``` removes decimal places
* ```CONCAT (a, b, c...)``` concatenates values (eg ```CONCAT (30, '%')```)
* ```ALL```: Acts over a list, here finding the biggest country by population: 
```sql
SELECT name
  FROM world
 WHERE population >= ALL(SELECT population
                           FROM world
                          WHERE population>0)
```

## Correlated Subquery
(from SQL zoo: https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial)
* Largest (by area) in each continent
```sql
SELECT continent, name, area FROM world x
  WHERE area >= ALL
    (SELECT area FROM world y
        WHERE y.continent=x.continent
          AND population>0)
```
A correlated subquery works like a nested loop: the subquery only has access to rows related to a single record at a time in the outer query. The technique relies on table aliases to identify two different uses of the same table, one in the outer query and the other in the subquery.

One way to interpret the line in the WHERE clause that references the two table is “… where the correlated values are the same”.

In the example provided, you would say “select the country details from world where the population is greater than or equal to the population of all countries where the continent is the same”.

* First country of each continent: List each continent and the name of the country that comes first alphabetically.
```sql
SELECT continent, name FROM world x
 WHERE name <= ALL (
   SELECT name FROM world y WHERE x.continent = y.continent
);
```

* Some countries have populations more than three times that of all of their neighbours (in the same continent). Give the countries and continents.
```sql
SELECT name, continent FROM world x WHERE 
x.population > ALL (
  SELECT population*3 as triple_population FROM world y WHERE x.continent = y.continent
  AND y.name != x.name  
)
```

* For some reason ```ALL()``` apparently can't appear as the first operand - see below:
This will work:
```sql
SELECT name, continent, population FROM world x WHERE 25000000 >= ALL( 
 SELECT population FROM world y WHERE x.continent = y.continent
);
```

This will not work:
```sql
SELECT name, continent, population FROM world x WHERE ALL( 
 SELECT population FROM world y WHERE x.continent = y.continent
) <= 25000000;
```

## CASE
* Make a virtual column
* Structure:
```sql
CASE
  WHEN condition THEN value
  WHEN condition THEN value
  ELSE value
END AS column_name
```

## ALTER TABLE
* ```ALTER TABLE table ADD column type DEFAULT value```

## Transactions for data integrity
* use a transaction if multiple statements depend on each other (e.g. out of multiple UPDATE operations, the latter ones should only be executed if the first one succeeds)
* if you want to ensure that no other operations are performed on the data between a sequence of operations
```sql
BEGIN TRANSACTION;
UPDATE people SET husband = "Winston" WHERE user_id = 1;
UPDATE people SET wife = "Winnefer" WHERE user_id = 2;
COMMIT;
```

## Security
* Backup
* Replication (multiple live copies)
* GRANT restrictive privileges
