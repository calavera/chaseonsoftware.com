+++
title = "Deploying a Hugo Static Site with Netlify"
draft = true
+++

If you're wondering how the sausage is made and how chaseadams.io is deployed, this article is for you.

chaseadams.io is a static website generated with by a command line utility called Hugo. Static site generators are great for blog content because the code that's deployed to a server is simply a collection of html files. There are a number of benefits from using html files over having something like wordpress that has a database to store content and login credentials:

- there's no attack vector for hackers because it's just html
- the content is already in the rendered state that the page visitor asks for so it's significantly faster
- serving static html is "cheap" both in cost and in the amount of requests that can be served in parallel

Now that I've gotten the why out of the way, let's dig into the how!

## Static Site Generator

I write all of my content locally in my favorite editor, as markdown files (hopefully to be org-mode files soon, but more on that some other time). Markdown is incredibly easy to learn and comes with the benefit of being a somewhat standardized format. This makes it easy for doing visual checks of your content in applications like iAWriter, Mou or if your editor has an extension or package that will render markdown in a way that lets you visually see it.

