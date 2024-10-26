---
slug: "/projects/primequery"
title: "PrimeQuery"
type: project
date: 2018-01-04
excerpt: "Helping professors answer lecture questions that matter."
languages:
  - HTML
  - CSS
  - JavaScript
  - VueJS
  - Python
  - SocketIO
repo_link: "https://github.com/cakoch10/PrimeQuery"
---
# a bigredhacks 2017 project

![Desktop screenshot](./images/primequery-desktop.jpg)

# languages and technologies used

- HTML
- CSS / Sass
- JavaScript / VueJS
- Python
- JSON
- Socket.io
- Google NLP

# background
This was a project I worked on with three other students at a hackathon hosted at
Cornell University. When attending lectures, we noticed several recurring
problems.

- Students started asking extraneous questions that really didn't
enhance the understanding of the material
- Students had valuable questions but were too scared to ask them in lecture.
- The professor would spend too much time answering unimportant questions resulting in the lecture ending up incomplete.

In order to alleviate these problems, we decided to build PrimeQuery, helping
students ask questions anonymously during lecture, and allowing them to filter
out the useless quesions themselves, all while allowing them to follow along
with lecture slides on their device. Additionally, we used Google's Natural Langauge Processing API to filter out profanity and detect duplicate questions and prevent such questions from being entered.

# my role

## front-end

- Designed the entire layout of the app using wireframes
- Ensured the site was completely mobile responsive using CSS Grid and media queries
- Enhanced the visual appeal and the usability of the site by writing all of CSS (With the help of Sass)
- Simplified the process for updating the view after a user asks a question or upvotes one by utilizing VueJS (a JavaScript front-end framework I learned as I went along with this project)
- Wrote the code required to send out and receive websocket signals (accomplished using Socket.io) whenever a user asked a question or upvoted one.

## back-end

- Refined the functions used to handle websocket communications (Correctly updating the data file used to store questions and their votes, and then broadcasting to the front-end)
- Redesigned the data files (JSON) used to store a sessions' set of questions and points
- Assisted in the proper filtering of profanity and duplicate questions (using keyword recognition)
