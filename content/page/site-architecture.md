---
title: Site Architecture
slug: site-architecture
date: 2015-06-23T02:47:00Z
---

_The project can be found at [chaseadamsio/chaseadamsio on github](https://github.com/chaseadamsio/chaseadams.io)._

A static site generator built with:

- Webpack
- React
- React Router

## How it works

There is a task for `npm run build` that does the following:

- Caches all content from the `content` directory in a JSON object
- Runs `react-router` for every individual file and the index and generates a `.html` file
- Generates a `.json` file for every `.html` file
