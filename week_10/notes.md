# Responsive Web Design
* Good reasons for mobile first:
  * Tends to be easier
  * Helps avoid loading desktop assets on mobile devices (load times, data contingent)

## Media queries
```@media print and (min-width:500px) {} ```
```@media not screen {} ```
* Overlapping queries: use min-width (or max-width) only for several break-points (rules get overwritten, order matters, can result in relatively little code)
* Back-to-back queries: use min-width AND max-width for breakpoints (mutually exclusive queries, order doesn't matter, tends to result in more code)

## Common responsive design patterns
https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns

# Big O Notation
- drop constants and lower order terms
- O(1): constant time (e.g. accessing an array, regardless of size)
- O(n): linear time
- O(n*2): Quadratic time
  * find all duplicates in an (unsorted) array
  * find the first unique number in an array
  * find duplicate phone numbers (unsorted)
- O(log n)
  * binary search
  * quicksort
- Big O refers to worst case
- Omega refers to best case


# Interview notes
- Ask clarification questions
- Think out loud
- Think through the solutions before starting to code
- Test example sets in real time
- Verify edge cases

# Some info from Charlotte re: Technical Interviews
NOTE: entire course, projects, katas, code reviews, technical interviews and your programming tests will prepare you thoroughly for pair programming or live coding part of interview.

Below are some questions from interviews I’ve had and some questions we ask at work.

Some of these questions are React, which you will learn in the second half of the course. I also included only questions that pertain to what you’re learning here.
NOTE: it’s not necessarily giving the correct answer either. This is why there are 3 - 4 rounds and they also ask you at times to submit outside projects to review your code.

Companies are also looking for fit first from experience. They want someone who’s willing to learn and get along with team.

Honesty is key, and let them know when you don’t know the answer.

Usually 1 hour to solve 5 problems. I got 3.8/5 in my latest technical interview. I ran out of time. I was brainstorming and I was questioned by the senior devs while coding. It’s not always the correct answer, they want to know if you can communicate.

try to remain calm and I’ve blanked out completely in some of my interviews because I was nervous.

there are times when the company is looking to hire for multiple positions and the answers you give will give them an idea where they could fit you and which team.

A total of 3 - 4 rounds of interviews depending on company.

Technical Interview (common questions)

Exercise (take home)

Technical Interview (pair programming with senior developers, usually two or more)
give you questions to solve.
ask you to explain your process while you code.
ask you questions about your process.
interactive, google and ask devs questions while problem solving.
this is the fun part of interview that I enjoy.

Technical Interview with senior devs or directors of engineering and technology.

detailed questions about principles and inner workings of programming language.

1. What is a DOM? 
2. Why is DOM important?
3. What is node? 
4. What technology does node run in?
5. What is the difference between INNER JOIN, LEFT JOIN & RIGHT JOIN?
6. Explain the difference between a state & prop?
7. What is an interface?
8. What is ProtoTypes?
9. What are the principles of OOP?
10. How does react do state management?
11. Explain life cycle?
12. Pros & Cons of front-end technologies?
13. Coercion?
14. JavaScript data types?
15. What is json?
16. Pass by Value vs Pass by Reference?
17. Map vs Filter vs Reduce?
18. const vs let vs var?
19. Object Notations?
20. undefined vs null?
21. Synchronous vs Asynchronous?
22. SOLID?
23. Components?
24. Difference between SPA vs MPA?
25. HTTP
