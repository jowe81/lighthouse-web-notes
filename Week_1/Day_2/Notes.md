# Functions

## Pure function
A function that has no side-effects (such as printing to the console) and doesn't rely on other functions' side effects (such as global bindings).

Pure functions are much easier to test than non-pure functions.

## Function Rules
* Start function name with a verb if possible
* camelCase for Javascript functions
* indent properly
* accomplish single task
* pass in parameters (no global variables

# Equals and Type Coercion
Always use ===, comparing both type and value.
The == operator will try to match the types of the expressions on both sides before comparing them, and can result in unintended outcomes.