---
title: Site Architecture
slug: site-architecture
date: 2015-06-23T02:47:00Z
---

_The project can be found at [chaseadamsio/chaseadams.io.hugo on github](https://github.com/chaseadamsio/chaseadams.io.hugo)._

A static site generator built with:

- Hugo (A GoLang Static Site Generator)
- Webpack

## How it works

### Publishing

There is a task for `npm run publish` that does the following:

- Uses `hugo` to build static pages
- Runs `webpack` with minimize and optimize
- Runs `gulp` to first minify the html files and then publish those to s3

### Development

There is a task for `npm start` that does the following:

- Starts the hugo webserver and watches for changes. It also builds drafts
- Starts webpack watch, which will update the `bundle.js` on file changes
