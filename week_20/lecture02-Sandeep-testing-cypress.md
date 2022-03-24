# Testing with Cypress
* End to end testing is a technique that tests the entire software product from beginning to end to ensure the app flow behaves as expected.
* Test user stories

## Compare Jest vs Cypress

Jest
- CLI
- Zero Config
- Focus on Unit and Integration Tests
- Isolated Testing / parallel tests
- Fast and cheap
- Con: Cumbersome snapshotting large codebases

Cypress
- Browser based
- Might need some config
- Focus on end-to-end testing
- User-flow testing
- Slow and expensive
- no IE/Safari/Opera


## Cheat Sheets

- https://cheatography.com/aiqbal/cheat-sheets/cypress-io/
- https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell
- Cypress Doc is great

## Install and Configure Cypress
- npx create-react-app
- npm install cypress --save-dev
- Creates ./cypress folder with subfolders ./fixtures, ./integration, ./plugins, ./support
- Examples provided in ./integration
- Start cypress: ```./node-modules/.bin/cypress open```
- For VSCode integration: ```npm i eslint-plugin-cypress --save-dev```
- in package JSON:
  - "plugin:cypress/recommended"
  - "cypress:open": "cypress open"
- ```use cypress.json``` in /src

## How to use 
- selector playground to get selectors 
- use DOM traversal to select item you want
- Aliases:
  ```javascript
  beforeEach(() => {
      cy.visit('http://localhost:8002');
      cy.get('.radius').as("searchInput");
  });  
  ```
  - within it(): ```cy.get('@searchInput')```

## Flaky test
* A text that may fail or pass depending on environment (e.g. including 3rd party API requests)
* Use Fixture to mock the endpoint
  ```javascript
  cy.intercept('GET', '**/search*', { fixture: 'result.json'}); //this file in fixtures
  ```


