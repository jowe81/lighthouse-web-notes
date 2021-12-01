# HTTP Cookies/ User Auth: Charlotte
* ```require('data.json')``` will automatically parse the JSON and return an object

## Multi-Language page:

```javascript
const dataObject = require('data.json');

app.get('/page', (req, res) => {
  const language = req.cookies.language;
  const title = dataObject[language]
  const content = dataObject[content]
  const templateVars = { title, content };
  res.render('page', templateVars);
});
```