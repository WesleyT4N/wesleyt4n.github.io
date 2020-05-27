---
slug: "/projects/just-news"
title: "JUST News"
type: project
date: 2017-06-12
excerpt: "Avoid fake news, and stay informed on all sides of a topic"
languages:
  - HTML
  - CSS
  - JavaScript
  - Python
repo_link: "https://github.com/cakoch10/neutral_news"
---
## a hackprinceton 2017 project

![Desktop screenshot](./images/justnews.png)

A political article analytics web app, allowing users to submit an online article URL,
and then find alternative political viewpoints on a certain subject.

# languages and technologies used

- HTML
- CSS
- JavaScript
- Python
- Google API

# background

This was a project I worked on with three other students at a hackathon hosted at
Princeton Univeristy. With the immense popularity of political articles, we noticed
several key problems with how people are consuming articles:

- Usually they only read a single one, and use it to form their opinion on the topic
- They never inform themselves of the various outlooks people may have

We developed JUST News as a response to this problem. It allows users to submit a
URL of an article (such as one found on CNN.com for example), and then scrapes its
keywords, uses the Google API to provide links other articles on the same topic, and then
categorizes them under one of several political categories (far-left, center-left,
 moderate, center-right, far-right).

# my role

## front-end

- Designed a simple, but intuitive UI for the app using HTML, CSS and Javascript
- Ensured the app could render infinitely many articles if needed with the help of
a slider
- Used a simple AJAX request to retrieve any matching articles from the Python backend


## back-end

- Wrote all the API functions necessary to send formatted data to the front-end
- Did some last minute bug-fixing in order to properly link up the front-end to the
back-end.
