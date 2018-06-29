---
title: "Planning & Researching For My Blog"
date: 2013-11-01T06:04:00Z
slug: 2013/11/planning-researching-for-realchaseadams-dot-com
aliases: [
    2013/11/planning-researching-for-my-blog/,
    posts/planning-researching-for-my-blog
]
---

I wanted to go cold turkey with WordPress and restart my blogging journey with a new platform. This was my process.

When I decided to migrate from WordPress and start a new blog on a new platform, I started by making a list of the things I wanted:

- Essentials
  - No Database. (Secure)
  - Files served quickly.
  - Leverages Markdown.
  - A language that's not PHP. (Preferrably NodeJS or Ruby)
  - YAML Front-Matter
- Nice to Haves
  - Lean. Not a lot of extra cruft like WordPress.
  - Built in Categories &amp; Tags
  - Flexible Layouts

## Test Drives

Based on my list of requirements I came up with the following frameworks/options:

- Poet (Node.js)
- Express.js (Node.js)
- Geddy (Node.js)
- Assemble (Node.js)
- Ghost (Node.js)
- Rails (Ruby)
- Jekyll (Ruby)
- Handrolled Ruby Markdown

I researched each framework and attempted to get started with a few. After some test drives, I ended up deciding it would either be __Jekyll__ or __Assemble__. They both allow you to use Markdown, leverage a pretty robust templating language and have a very small footprint and core. They both compile down to a static HTML target that can either be deployed or in my case, created via the post-receive git hook.

## Jekyll

#### What I liked about Jekyll

Jekyll has a lot of great strengths for me: it's Ruby, it has a convention for where pages and posts go, as well as an easy way to scale categories, tags and multiple archive pages.

It's well-supported, very mature and really well documented.

#### What I didn't like about Jekyll

The markdown options are great, but there's some overhead in making certain things work (I wanted to be able to give a paragraph block a class, and that only works in certain scenarios).

## Assemble

#### What I liked about Assemble

Assemble is pretty awesome, and I've had the opportunity to work with it deeply in some projects at Zappos. One of the greatest features of Assemble is that it's unopinionated. It doesn't care where you put what or how you architect your application. It's basically just a matter of, "I tell Assemble where to put what, and what to use to compile it, and it does it."

It's possible to create a JSON file with all the posts in it and just consume it, which is pretty nice if you're going to use a front-end framework like backbone to consume the content and inject it into the page.

#### What I didn't like about Assemble

It's still an immature framework and making multiple tag, category and archive pages compile is a lot of work...so much so that it wasn't worth trying to spend the time working on a plugin to make multi-page compilation work.

On top of that the documentation, since it's so immature, isn't that great and is oftentimes just incorrect.

## The Winner: Jekyll

Spinning up a new jekyll project leveraging Yeoman was so easy, it wasn't really even fair to Assemble. Good documentation as well as easily implementable custom plugins, on top of the ease of creating multi-page archives for the blog, categories and tags made it the obvious choice.

My next post will be an extensive writeup on the process I used to create my project and what I used to get performance gains in my workflow.

__What about you? What platform do you use to blog and why?__
