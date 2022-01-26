# Gary - Q&A on LightBNB
* No semicolon needed in SQL for pg.query()

* View in Database: virtual table
* Stored procedures 

## Promises
* Return value from a then() function passes that value on to the chained .then() next in line

```javascript
return db.query(sql, [email])
  .then(user => {
    return res.rows
  })
  .then (rows = {
    const user = rows[0];
    return user;
  });
```

* Can totally use extra variables for clarification. Minifiers and optimizers take care of performance issues resulting from that

# Midterms advice
* Github: Master is only for merging