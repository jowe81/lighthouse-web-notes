#Ajax - Charlotte
* JSONVue plugin for Chrome formats JSON when pulling data from APIs
* AJAX with XMLHttpRequest()
```javascript
  const showCountries = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v2/all', true);

    xhr.onload = function() {
      if (this.status === 200) {
        const countries = JSON.parse(this.respsonse);
        contries.forEach(country => {
          const countryCard = document.createElement('div');
          countryCard.innerHTML = country.name;
          document.getElementById('feed').appendChild(countryCard(countryCard);
        });
      }
    }

    xhr.send();
  }

```

* API: Application Programming Interface

# jQuery
* ```.get().then()``` is a thing!
* ```form.serialize()``` is a method on ```$("form")```